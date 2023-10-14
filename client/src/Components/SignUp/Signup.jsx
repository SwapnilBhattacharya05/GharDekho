import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
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
                        <div className="container-fluid">
                            <h1 className="mb-2" style={{ borderBottom: "1px solid #7a4bcf" }}>Sign Up</h1>
                            <form className="signup-form">
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="" className="signup-label">Username<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" class="form-control user-mandatory-fields" name="userName" id="userName" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="userEmail" className="signup-label" >Email address<span style={{ color: "red" }} >*</span></label>
                                        <input type="email" class="form-control user-mandatory-fields" name="userEmail" id="userEmail" placeholder="e.g. demo@gmail.com" aria-describedby="emailHelp" />

                                    </div>
                                </div>
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="userPhn" className="signup-label">Phone No.<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" class="form-control" name="userPhn" id="userPhn" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="userPassword" className="signup-label">Password<span style={{ color: "red" }}>*</span></label>
                                        <input type="password" class="form-control" name="userPassword" id="userPassword" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="userConfirmPassword" className="signup-label">Confirm Password<span style={{ color: "red" }}>*</span></label>
                                        <input id="userConfirmPassword" name="userConfirmPassword" type="password" class="form-control" />
                                        <i style={{ cursor: "pointer" }} class="fa-solid fa-eye eye-symbol-signup"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center mt-2">
                                        <button type="submit" class="btn btn-purple submit-button">Submit</button>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-12 footer-text d-flex align-conent-center justify-content-center">
                                        <label for="exampleInputEmail1" className="text">Already have an account?</label>
                                        <Link to="/login" className="ml-2 text" style={{ textDecoration: "underline", color: "#7a4bcf" }}>Log in</Link>
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
export default Signup;