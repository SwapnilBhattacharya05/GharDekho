import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu';
import "./MyProperty.css";
import UserContext from '../../Context/user/UserContext';
import { Link } from 'react-router-dom';
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProperty = () => {

    const userContext = useContext(UserContext);
    const { userData } = userContext;

    const [property, setProperty] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetchMyProperties();
        //eslint-disable-next-line
    }, [userData]);

    const fetchMyProperties = async () => {
        console.log(loading);
        try {
            const response = await fetch(`http://localhost:8000/api/property/getmyproperty/${userData.id}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            });

            const json = await response.json();
            setTimeout(()=>{
                setLoading(false);
            },2700);

            setProperty(json.property);
        } catch (error) {
            console.log("Error While fetching posted property data", error.message);
        }
    }

    const handlePropertyDelete = async (propertyId) => {
        //Delete from frontend
        setProperty((prevData) => prevData.filter((property) => property._id !== propertyId));

        //API call to delete in DB
        try {
            const response = await fetch(`http://localhost:8000/api/property/deleteProperty/${propertyId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
            });

            const json = await response.json();
            if (json.success) {
                toast.success(json.msg, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error(json.msg, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.log("Error While Deleting A Property", error.message);
        }
    }

    return (
        <>
            <Menu />
            <div className='my-property-main container'>
                <h1 className='text-center font-weight-bold my-2'>My Properties</h1>
                {
                    loading === true ? <img src='https://cdn.dribbble.com/users/330915/screenshots/2311781/media/2e95edec9c2a16605982c96d1044023b.gif'  alt='spinner' style={{ margin: "80px auto", display: "block" }} /> :
                        property && property.length > 0 ?
                            (<div className="row">
                                {
                                    property.map((value) => {
                                        return (
                                            <div key={value._id} className="col-12">
                                                <div className="property-card my-4 d-flex">
                                                    <div className="left-part">
                                                        <img src={value.imageUrls[0]} alt='property' />
                                                    </div>
                                                    <div className="right-part">
                                                        <p style={{ fontSize: "25px" }}>{value.propertyName}</p>
                                                        <div className="property-crud">
                                                            <Link to={`/propertydescription/${value._id}`}><button type='button' className='btn btn-purple mx-2'> View</button></Link>
                                                            <Link to={`/updateproperty/${value._id}`}><button type='button' className='btn btn-outline-purple mx-2'><i className="fa-solid fa-pen-to-square"></i> Edit</button></Link>
                                                            <button type='button' onClick={() => handlePropertyDelete(value._id)} className='btn btn-danger mx-2'><i className="fa-solid fa-trash"></i> Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>) :
                            <div className="d-flex justify-content-center align-items-center">
                                <img src='https://i.pinimg.com/736x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.jpg' alt='nothing'></img>
                            </div>
                }

            </div>
            <ToastContainer />
            <Footer />
        </>
    )
}

export default MyProperty;