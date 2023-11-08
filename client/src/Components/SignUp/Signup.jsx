import React, { useState } from "react";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
    const [credentials, setCredentials] = useState({ userName: "", userEmail: "", userPhn: "", userPassword: "", userConfirmPassword: "" });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.userConfirmPassword !== credentials.userPassword) {
            return toast.warn("Confirm password doesn't match with password!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        const response = await fetch("http://localhost:8000/api/user/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: credentials.userName, email: credentials.userEmail, phone: credentials.userPhn, password: credentials.userPassword })
        })

        const json = await response.json();

        if (json.success) {
            localStorage.setItem("token", json.authToken);
            toast.success("Account Created Successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() => {
                navigate("/");
            }, 3700);
        } else {
            toast.error("Something Went Wrong! Please Try Again Later", {
                position: "top-center",
                autoClose: 5000,
                transition: Flip,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        };
        // setTimeout(() => {
        //     window.location.reload();
        // }, 5700);
    }


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="main-body">
                <div className="signup-container">
                    <div className="left-part">
                        <Link to="/">
                            <div className="div-msg d-flex">
                                <img src="img/brand-logo.jpg" id="icon" alt="img/brand-logo.jpg" />
                                <h1 className="msg ml-1">GharDekho</h1>
                            </div>
                        </Link>
                        <img src="img/signup.jpg" alt="img/signup.jpg"></img>
                    </div>
                    <div className="right-part">
                        <div className="container my-5">
                            <h1 style={{ borderBottom: "1px solid #7a4bcf", fontSize: "40px" }} className="text-md-center text-sm-left">Sign Up</h1>
                            <form className="signup-form container" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="signup-group col-12">
                                        <input type="text" className="form-control user-mandatory-fields" name="userName" id="userName" placeholder="Username" onChange={onChange} required value={credentials.userName} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="signup-group col-12">
                                        <input type="email" className="form-control user-mandatory-fields" name="userEmail" id="userEmail" placeholder="Email" onChange={onChange} required value={credentials.userEmail} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="signup-group col-12">
                                        <input type="text" className="form-control" name="userPhn" id="userPhn" placeholder="Phone Number" required onChange={onChange} value={credentials.userPhn} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="signup-group col-12">
                                        <input type="password" className="form-control" name="userPassword" id="userPassword" placeholder="Password" required onChange={onChange} value={credentials.userPassword} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="signup-group col-12">
                                        <input id="userConfirmPassword" name="userConfirmPassword" type="text" className="form-control" placeholder="Confirm Password" required onChange={onChange} value={credentials.userConfirmPassword} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center mt-4">
                                        <button type="submit" className="btn btn-purple submit-button">Submit</button>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-12 footer-text d-flex align-conent-center justify-content-center">
                                        <p className="text">Already have an account?</p>
                                        <Link to="/login" className="ml-2 text" style={{ textDecoration: "underline", color: "#7a4bcf" }}>Log in</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
export default Signup