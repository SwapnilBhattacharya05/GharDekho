import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

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
                                        <button type="submit" className="btn btn-purple submit-button">Submit</button>
                                    </div>
                                </div>
                                <hr className="text-primary"></hr>
                                <div className="row">
                                    <div className="col-12 footer-text mt-3 d-flex align-conent-center justify-content-center">
                                        <label htmlFor="exampleInputEmail1" className="text">Don't have an account?</label>
                                        <Link to="/signup" className="ml-2 text" id={"sign-up-btn"} style={{ textDecoration: "underline", color: "#7a4bcf" }}>Sign up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;