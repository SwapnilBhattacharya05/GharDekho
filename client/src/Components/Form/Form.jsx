import React, { useState,useEffect } from "react";
import './Form.css';
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";



const Form = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        image: '',
        address: '',
        price: '',
        area: '',
        bhk: '',
        description: '',
        status: '',
        photo: '',
        target: '',
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fileData = (e) => {
        setUser({ ...user, image: e.target.files[0] });
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const useName = useRef(null);
    const useFather = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();

        const { name, email, phone, image, address, price, area, bhk, description, status, photo, target } = user

        if (!name) {
            alert("Enter Your Name");
        } else if (!email) {
            alert("Enter Your Email");
        } else if (!phone) {
            alert("Enter Your Phone Number");
        } else if (!image) {
            alert("Upload Identification Proof");
        } else if (!address) {
            alert("Enter The Address Of The Property");
        } else if (!price) {
            alert("Enter The Price Of The Property");
        } else if (!area) {
            alert("Enter The Area Of The Property");
        } else if (!bhk) {
            alert("Enter The Number of Bedrooms In The Property");
        } else if (!description) {
            alert("Enter The Description Of The Property");
        } else if (!status) {
            alert("Enter The Status Of The Property");
        } else if (!photo) {
            alert("Upload Image Of The Property");
        } else if (!target) {
            alert("Enter Your Target");
        } else {

            const formData = new FormData();

            formData.append('image', user.image, user.image.name)
            formData.append('name', user.name)
            formData.append('email', user.email)
            formData.append('phone', user.phone)
            formData.append('address', user.address)
            formData.append('price', user.price)
            formData.append('area', user.area)
            formData.append('bhk', user.bhk)
            formData.append('description', user.description)
            formData.append('status', user.status)
            formData.append('photo', user.photo)
            formData.append('target', user.target)
        }
    }

    return (
        <>
            <Menu />
            <div className="container-fluid" style={{ margin: "80px 0px 80px 0px" }}>
                <form method="post">
                    <h3 align="center" className="text-center pt-3">Tell Us About Your Property</h3><hr></hr>

                    <div className="container form pb-4">
                        <h4 className="pt-3">Personal Details</h4><hr></hr>
                        <div className="row">
                            <div className="col-4 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="name" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                    <span id="name"><i style={{ color: 'red' }}>Enter Your Name *</i></span>
                                </div>
                            </div>
                            <div className="col-4 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email" name="email" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <div className="col-4 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Contact Number <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="phone" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Contact Number" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Identification Proof <span style={{ color: 'red' }}>*</span></label>
                                    <input type="file" name="image" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Upload your file" />
                                </div>
                            </div>
                        </div>

                        <div className="container m-0 p-0">
                            <h4 className="pt-3">Property Details</h4><hr></hr>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Address <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="address" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Property Address" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Price <span style={{ color: 'red' }}>*</span></label>
                                    <input type="number" name="price" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Property Price" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Area <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="area" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Property Area" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Number of Bedrooms <span style={{ color: 'red' }}>*</span></label><br />
                                    <input type="number" name="bedroom" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the number of bedrooms" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Number of Bathrooms <span style={{ color: 'red' }}>*</span></label><br />
                                    <input type="number" name="bathroom" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the number of bathrooms" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Number of Balconies <span style={{ color: 'red' }}>*</span></label><br />
                                    <input type="number" name="balcony" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the number of balconies" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Description <span style={{ color: 'red' }}>*</span></label>
                                    <textarea name="description" rows={5} cols={5} onChange={onValueChange} class="form-control" id="exampleInputEmail1" placeholder="Enter Property Description" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Photos <span style={{ color: 'red' }}>*</span></label>
                                    <input multiple type="file" name="photo" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Upload Photos of the Property" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="age">Age of the Property <span style={{ color: 'red' }}>*</span></label><br />
                                    <input type="number" name="age" onChange={onValueChange} class="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter the age of the property" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Target <span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="target" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option disabled selected value={''}>--Select Target--</option>
                                        <option value={'rent'}>On Rent</option>
                                        <option value={'sale'}>On Sale</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Furnishing <span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="furnish" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option disabled selected value={''}>--Select Furnishing--</option>
                                        <option value={'yes'}>Furnished</option>
                                        <option value={'partially'}>Semi Furnished</option>
                                        <option value={'no'}>Not Furnished</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Availability <span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="avail" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option disabled selected value={''}>--Select Availability--</option>
                                        <option value={'ready'}>Ready To Move</option>
                                        <option value={'notready'}>Under Construction</option>
                                    </select>
                                </div>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-12">
                                <div className="submit-btn">
                                    <input type="reset" value={'Reset'} className="mr-2"></input>
                                    <NavLink to={''} className={'btn-submit'} onClick={submitForm}>Submit</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Form;