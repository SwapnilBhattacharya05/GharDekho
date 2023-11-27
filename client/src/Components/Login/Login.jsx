import React, { useState, useContext } from "react";
import "./Login.css";
import UserContext from "../../Context/user/UserContext";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../OAuth";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const userContext = useContext(UserContext);
    const { setUser, userData } = userContext;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(credentials.email)) {
            toast.warn("Enter a valid Email!", {
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
            setTimeout(() => {
                setCredentials({ email: "", password: "" });
            }, 3700);
            return;
        }

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            await setUser();
            toast.success(`Welcome, ${userData.username}!`, {
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
            setTimeout(() => {
                navigate("/");
            }, 3700);

        } else {
            toast.error("Please Enter Valid Credentials Or Try Again Later!", {
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
            setCredentials({ email: "", password: "" });
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="main-body">
                <div className="login-container">
                    <div className="left-part">
                        <Link to="/">
                            <div className="div-msg d-flex">
                                <img src="img/brand-logo.jpg" id="icon" alt="img/brand-logo.jpg" />
                                <h1 className="msg ml-1">GharDekho</h1>
                            </div>
                        </Link>
                        <img src="img/login1.jpg" alt="img/login1.jpg"></img>
                    </div>
                    <div className="right-part">
                        <div className="container my-5">
                            <h1 style={{ borderBottom: "1px solid #7a4bcf", fontSize: "40px" }} className="text-md-center text-sm-left">Log In</h1>
                            <form className="login-form container" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="login-group col-12">
                                        <input name="email" type="email" className="form-control" id="email" onChange={onChange} value={credentials.email} autoComplete="false" required placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="login-group col-12">
                                        <input name="password" type="password" className="form-control" onChange={onChange} autoComplete="false" required value={credentials.password} placeholder="Password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-center mt-4 col-12">
                                        <button className="btn btn-purple submit-button">Submit</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-center mt-3 col-12">
                                        <OAuth />
                                    </div>
                                </div>
                            </form>
                            <hr />
                            <div className="row">
                                <div className="col-12 footer-text mt-3 d-flex align-conent-center justify-content-center">
                                    <label htmlFor="exampleInputEmail1" className="text">Don't have an account?</label>
                                    <Link to="/signup" className="ml-2 text" id={"sign-up-btn"} style={{ textDecoration: "underline", color: "#7a4bcf" }}>Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
export default Login;