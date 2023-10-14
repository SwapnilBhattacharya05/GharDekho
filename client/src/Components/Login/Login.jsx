import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
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
                        <div className="container-fluid">
                            <h1 className="mb-5" style={{ borderBottom: "1px solid #7a4bcf" }}>Log In</h1>
                            <form className="login-form">
                                <div className="row">
                                    <div className="login-group col-12">
                                        <label htmlFor="userEmail" className="login-label" >Email address<span style={{ color: "red" }}>*</span></label>
                                        <input name="email" type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" autoComplete="false" />
                                        <span className="mandatory-field"><i style={{ color: 'red' }}>enter your email *</i></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="login-group col-12">
                                        <label htmlFor="exampleInputPassword1" className="login-label">Password<span style={{ color: "red" }}>*</span></label>
                                        <input id="exampleInputPassword1" name="password" type="password" className="form-control" autoComplete="false" />
                                        <i style={{ cursor: "pointer" }} className="fa-solid fa-eye eye-symbol-login"></i>
                                        <span className="mandatory-field"><i style={{ color: 'red' }}>enter your password *</i></span>
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