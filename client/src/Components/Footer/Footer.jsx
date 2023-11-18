import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {

    const backToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <>
            <div className="container-fluid footer-upper-conatiner">
                <div className="row text-center">
                    <div className="col-12 col-md-12">
                        <h3 style={{ color: "white", fontSize: "20px" }} className="p-2 mt-2" onClick={backToTop}>Back to top ↑</h3>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer-conatiner text-center text-lg-start text-white pb-4">
                <footer>
                    <div className="row pt-5">
                        <div className="col-lg-3 col-md-6" style={{ borderRight: "1px dashed white" }}>
                            <div className=" d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "150px", height: "150px" }}>

                                <img src="img/brand-logo.jpg" alt="img/brand-logo.jpg" height={"70px"} width={"70px"} />
                                <strong style={{ marginLeft: "5px", color: "white", fontSize: "40px" }}><span className="text-purple">Ghar</span>Dekho</strong>

                            </div>
                            <p className="text-center">Follow us @</p>
                            <ul className="list-unstyled d-flex flex-row justify-content-center">
                                <li>
                                    <Link className="social-media-icons" to="https://www.facebook.com/ghardekho" target="_blank">
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </Link>
                                </li>
                                <li >
                                    <Link className="social-media-icons" to="https://www.instagram.com/ghardekho" target="_blank">
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>

                                </li>
                                <li >
                                    <Link className="social-media-icons" to="https://twitter.com/ghardekho" target="_blank">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </Link>
                                    <Link className="social-media-icons" to="https://www.youtube.com/@ghardekho" target="_blank">
                                        <i className="fa-brands fa-youtube"></i>
                                    </Link>
                                    <Link className="social-media-icons" to="https://www.pinterest.com/ghardekho" target="_blank">
                                        <i className="fa-brands fa-pinterest"></i>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                        <div className="col-lg-3 col-md-6" style={{ borderRight: "1px dashed white" }}>
                            <h5 className="text-uppercase mt-5 mb-4">
                                <span className="footer-col-heading" style={{ borderBottom: "1px dotted white", fontSize: "25px" }}>Useful Links</span></h5>
                            <ul className="list-unstyled">
                                <li className="mb-2 font-weight-bold ">
                                    <Link to="/" className="footer-text-link text-decoration-none" onClick={backToTop}>
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-2 font-weight-bold ">
                                    <Link to="/blogs" className="footer-text-link text-decoration-none" onClick={backToTop}>
                                        Blog
                                    </Link>
                                </li>
                                <li className="mb-2 font-weight-bold ">
                                    <Link to="/about" className="footer-text-link text-decoration-none" onClick={backToTop}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="mb-2 font-weight-bold ">
                                    <Link to="/contact" className="footer-text-link text-decoration-none" onClick={backToTop}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4" >
                            <h5 className="text-uppercase mt-5 mb-4">
                                <span style={{ borderBottom: "1px dotted white", fontSize: "25px" }}>Properties</span></h5>

                            <ul className="list-unstyled">
                                <li className="mb-2 font-weight-bold ">
                                    <Link to="/buy" className="footer-text-link text-decoration-none" onClick={backToTop}>
                                        Buy
                                    </Link>
                                </li>
                                <li className="mb-2 font-weight-bold">
                                    <Link to="/postproperty" className="footer-text-link text-decoration-none" onClick={backToTop}>
                                        Rent
                                    </Link>
                                </li>
                                <li className="mb-2 font-weight-bold ">
                                    <Link to="/postproperty" className="footer-text-link text-decoration-none" onClick={backToTop}>
                                        Advertise
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6" style={{ borderLeft: "1px dashed white" }}>
                            <h5 className="text-uppercase mt-5 mb-4">
                                <span style={{ borderBottom: "1px dotted white", fontSize: "25px" }}>Contact</span></h5>

                            <ul className="list-unstyled">
                                <li className="font-weight-bold">
                                    <Link target="_blank" to="https://www.google.com/maps/place/WANDERLUST/@22.4882298,88.3610978,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02715cedc0252b:0xa626fd25de368075!8m2!3d22.4882249!4d88.3657112!16s%2Fg%2F11s0kv3lm_?entry=ttu" className="footer-text-link text-decoration-none"> <p>
                                        <i className="fa-solid fa-location-dot mr-2 "></i>
                                        GharDekho, Bijoygarh, Kolkata, West Bengal 700032
                                    </p></Link>

                                </li>
                                <li className="font-weight-bold">
                                    <Link to={"tel:+919062306723"} className="footer-text-link text-decoration-none"><p><i className="fa-solid fa-phone mr-2 "></i>+ 91 9062306723</p></Link>
                                </li>
                                <li className="font-weight-bold">
                                    <Link to={"mailto:ghardekho@support.com"} className="footer-text-link text-decoration-none "><p><i className="fa-solid fa-envelope mr-2"></i>ghardekho@support.com</p></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="container-fluid footer-lower-conatiner">
                <div className="row text-center">
                    <div className="col-12 col-md-12 pt-3 d-flex justify-content-center align-content-center">
                        <p className="text-light"><i className="fa-solid fa-copyright mr-2"></i>{new Date().getFullYear()} GharDekho. All rights reserved. </p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;