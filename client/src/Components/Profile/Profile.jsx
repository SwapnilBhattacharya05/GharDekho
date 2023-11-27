import React, { useContext, useEffect, useRef, useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import Menu from '../Menu/Menu';
import "./Profile.css";
import Footer from '../Footer/Footer';
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from '../../Context/user/UserContext';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase';

const Profile = () => {
    const userContext = useContext(UserContext);
    const { userData, setUserData, setUser } = userContext;

    const [credentials, setCredentials] = useState({ userName: "", userEmail: "", userPhn: "", userPassword: "", userPhoto: "" });
    const [file, setFile] = useState(undefined);
    const [filePercentage, setFilePercentage] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        setCredentials(({ userName: userData.username, userEmail: userData.email, userPhn: userData.phone, userPhoto: userData.photo }));
        if (file) {
            handleFileUpload(file);
        }
        // eslint-disable-next-line
    }, [userData, file]);

    const navigate = useNavigate();
    const fileRef = useRef(null);

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFilePercentage(Math.round(progress));
        }, (error) => {
            setFileUploadError(true);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setFormData({ ...formData, photo: downloadURL });
                setCredentials({ userPhoto: formData.photo });
            })
        });
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/update/${userData.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({ username: credentials.userName, email: credentials.userEmail, phone: credentials.userPhn, password: credentials.userPassword, photo: formData.photo })
            });

            const json = await response.json();
            console.log(json);
            console.log(formData);
            if (json.success) {
                await setUser();
                toast.success(json.msg, {
                    position: "top-right",
                    autoClose: 3000,
                    transition: Flip,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                return toast.error(json.msg, {
                    position: "top-right",
                    autoClose: 3000,
                    transition: Flip,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleProfileDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/delete/${userData.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
            });

            const json = await response.json();
            console.log(json);
            if (json.success) {
                await setUserData({ id: "", username: "", email: "", phone: "", photo: "" });
                localStorage.removeItem("token");
                navigate("/login");
            } else {
                return toast.warn(json.msg, {
                    position: "top-right",
                    autoClose: 3000,
                    transition: Flip,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogOut = async (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        await setUserData({ id: "", username: "", email: "", phone: "", photo: "" });
        navigate("/login");
    }

    return (
        <>
            <Menu />
            <div className='container profile-container'>
                <h1 className='text-center font-weight-bold my-2'>
                    Profile
                </h1>
                <form onSubmit={handleProfileUpdate}
                    className='profile-form my-4'
                    method='post'
                >
                    <div className="row">
                        <div className="profile-group col-12">
                            <input
                                accept='image/*'
                                type='file'
                                ref={fileRef}
                                hidden
                                name='photo'
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <img src={formData.photo || userData.photo}
                                alt='Profile-Avatar'
                                onClick={() => fileRef.current.click()}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className='profile-group col-12'>
                            <p>
                                {
                                    fileUploadError ? (
                                        <span className='text-danger'>Error While Uploading the Image</span>
                                    ) : filePercentage > 0 && filePercentage < 100 ? (
                                        <span>{`Uploading: ${filePercentage}%`}</span>
                                    ) : filePercentage === 100 ? (
                                        <span className='text-success'>Image Uploaded Successfully</span>
                                    ) : (
                                        ""
                                    )
                                }
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <input type="text"
                                className="form-control user-mandatory-fields"
                                name="userName"
                                id="userName"
                                placeholder="Username"
                                onChange={onChange}
                                value={credentials.userName || ""}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <input type="email"
                                className="form-control user-mandatory-fields"
                                name="userEmail"
                                id="userEmail"
                                placeholder="Email"
                                onChange={onChange}
                                value={credentials.userEmail || ""}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <input type="number"
                                className="form-control user-mandatory-fields"
                                name="userPhn"
                                id="userPhn"
                                placeholder="Phone"
                                onChange={onChange}
                                value={credentials.userPhn || ""} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <input type="password"
                                className="form-control user-mandatory-fields"
                                name="userPassword"
                                id="userPassword"
                                placeholder="Password"
                                onChange={onChange}
                                value={credentials.userPassword || ""}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="profile-group col-12">
                            <button type="submit"
                                className="btn btn-purple my-4">
                                Update
                            </button>
                        </div>
                    </div>
                    <div className="row" style={{ marginLeft: "19%", marginRight: "19%" }}>
                        <div className="d-flex justify-content-between col-12">
                            <button type='button' className="btn btn-danger"
                                data-toggle="modal"
                                data-target="#staticBackdrop"
                            >
                                Delete account
                            </button>

                            {/* //!Modal to show upon clicking delete account */}
                            <div className="modal fade"
                                id="staticBackdrop"
                                data-backdrop="static"
                                data-keyboard="false"
                                tabIndex="-1"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title"
                                                id="staticBackdropLabel"
                                            >
                                                This action can't be reversed
                                            </h5>
                                            <button type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            Do you want to continue?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button"
                                                className="btn btn-secondary"
                                                data-dismiss="modal"
                                            >
                                                no
                                            </button>
                                            <button type="button"
                                                className="btn btn-danger"
                                                data-dismiss="modal"
                                                onClick={handleProfileDelete}
                                            >
                                                Yes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type='button' onClick={handleLogOut}
                                className="btn btn-purple">
                                Log out
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
            <Footer />
        </>
    )
}

export default Profile;