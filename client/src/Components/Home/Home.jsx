import React, { useState } from "react";
import "./Home.css";
import Menu from "../Menu/Menu";

import { Link, renderMatches } from "react-router-dom";
import BuyCategories from "../.././Data/BuyingPageCategories.js";
import RentCategories from "../../Data/RentingPageCategories.js";
import testimonials from "../../Data/Testimonials";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
const Home = () => {
    const [salesData, setSalesData] = useState(BuyCategories);
    const [rentsData, setRentsData] = useState(RentCategories);
    const [testimonialsData, setTestimonials] = useState(testimonials);
    const [user, setUser] = useState({
        newsletterEmail: "",
    });

    window.onload = () => {
        document.getElementById("hero-video").addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    }

    // ?Keep first 4 data of the sales data
    let filteredSalesData = [];
    for (let i = 0; i < 4; i++) {
        filteredSalesData.push(salesData[i]);
    }

    // ?Keep first 4 data of the rent data
    let filteredRentData = [];
    for (let i = 0; i < 4; i++) {
        filteredRentData.push(rentsData[i]);
    }



    return (
        <>
            <Menu />

            {/* hero-video*/}
            <div className="video-container">
                <video id="hero-video" autoPlay muted loop className="w-100"  >
                    <source src="video/herovideo1.mp4" type="video/mp4" alt="video/herovideo1.mp4" />
                    <source src="video/herovideo1.ogg" type="video/ogg" alt="video/herovideo1.ogg" />
                    <source src="video/herovideo1.webm" type="video/webm" alt="video/herovideo1.webm" />
                </video>
            </div>
            <div className="container mt-5 home-card">
                <h3 className="text-center mb-3" style={{ letterSpacing: "5px" }}>WHAT ARE YOU LOOKING FOR?</h3>
                <div className="home-card d-flex">
                    <div className="home-card-left">
                        <Link><span className="home-card-text">Buy</span></Link>
                        <img src="img/property1.jpg" height={"100%"} width={"100%"} alt="img/property1.jpg" />
                    </div>
                    <div className="home-card-right">
                        <Link to="/rent"><span className="home-card-text">Rent</span></Link>
                        <img src="img/property2.jpg" height={"100%"} width={"100%"} alt="img/property2.jpg" />
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center home-content">
                <hr />
                <h4>NEW PROPERTIES</h4>
                <h3><b>For Sale</b></h3>
                <div className="row">
                    {
                        filteredSalesData.map((value) => {
                            const { photo, photoAlt, buyHeading, bhk, buyPrize, sqftIcon,doorIcon, buildLoc,buildLocText, sqft, persqft, statusIcon, status, stairIcon, floors, cardDesc, buildStatus, buildStatusText } = value;
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
                                <div className="home-buy-card bg-light">

                                    {/* top side of the card */}
                                    <div className="home-buy-card-top">
                                        <img src={photo} alt={photoAlt} height={"100%"} width={"100%"}></img>
                                    </div>

                                    {/* bottom side if the card */}
                                    <div className="home-buy-card-bottom">
                                        <p className="home-buy-card-prize">₹{buyPrize}<span className="home-buy-persqft" style={{ color: "#B7B7B7" }}></span></p>
                                        <p className="home-buy-card-heading">{buyHeading}</p>
                                        {/* <p className="buy-card-bhk">{bhk}</p> */}


                                        {/* Sybmbol and text to check location */}
                                        <div className="home-buy-card-Loc-status d-flex">
                                            <p className="home-buy-card-build-symbol">
                                                <i className={buildLoc}></i>
                                            </p>
                                            <p className="home-buy-card-Loc-status-text">
                                                {buildLocText}
                                            </p>

                                        </div>
                                        <div className="container">
                                            <hr className="home-buy-card-hr-line-custom" style={{ marginTop: "-10px" }} />
                                        </div>
                                        {/* Dimensions icon and status */}
                                        <ul className="home-buy-icons d-flex">

                                            <li className="home-includesWrapper">
                                                <p className="home-buildingstatus">
                                                    <i className={sqftIcon}></i>
                                                </p>
                                                <p className="home-blackText">{sqft}</p>
                                            </li>

                                            {/* Ready to move or not icon and status */}
                                            <li className="home-includesWrapper">
                                                <p className="home-buildingstatus">
                                                    <i className={statusIcon}></i>
                                                </p>
                                                <p className="home-blackText">{status}</p>
                                            </li>

                                            {/* Total Floors */}
                                            <li className="home-includesWrapper">
                                                <p className="home-buildingstatus">
                                                    <i className={doorIcon}></i>
                                                </p>
                                                <p className="home-blackText">{bhk}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="container mt-5 text-center home-content">
                <hr />
                <h4>NEW PROPERTIES</h4>
                <h3><b>For Rent</b></h3>
                <div className="row">
                    {
                        filteredRentData.map((value) => {
                            const { photo, photoAlt, buyHeading, bhk, buyPrize, sqftIcon, sqft, persqft, statusIcon, status, stairIcon, floors, cardDesc, buildStatus, buildStatusText } = value;
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="card mb-2">
                                        <img src={photo} alt={photo} className="mb-2"></img>
                                        <h5><b>{buyHeading}</b></h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <hr />
            </div>

            {/*Testimonilas-section*/}
            <div id="testimonilas">
                <div className="container testimonilas-conatiner text-center mt-5 mb-5">
                    <h3 className="p-3"><b>Testimonials</b></h3>
                    <div id="carouselExampleControls" className="carousel slide mt-2" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="testimonilas-caption text-center">
                                    <div className="ml-5 mr-5 testimonilas-quotes">
                                        "There are no words to express my huge gratitude to GharDekho for the advice they provided and for
                                        being so accommodating and responsive to all the requests regarding the properties
                                        I viewed and particularly the property I bought. I appreciate the timeliness and the detail of replies to the queries,
                                        the tips on how to get the best deal, and the suggestions on how to turn a house into home.
                                        I was very nervous buying my first home, and they helped to make this journey seamless and exciting."
                                    </div>
                                    <p className="mt-2" id="image-caption" style={{ fontSize: "17px", fontWeight: "10px" }}>━ Abdul Khan</p>
                                    <img className="testimonilas-img" src="img/testimonials1.jpg" alt="img/testimonials1.jpg" />
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="testimonilas-caption text-center">
                                    <div className="ml-5 mr-5 testimonilas-quotes">
                                        "We are so grateful to have been recommended the services of GharDekho.
                                        They helped a lot in selling our first home promptly,
                                        professionally and effortlessly.
                                        Always contactable and approachable, putting real estate jargon that is not tip of the tongue for most,
                                        into a manner that we were able to understand and digest, was super important to us.
                                        These guys delivered a great outcome for our first home sale."
                                    </div>
                                    <p className="mt-2" id="image-caption" style={{ fontSize: "17px", fontWeight: "10px" }}>━ Rahul Das</p>
                                    <img className="testimonilas-img" src="img/testimonials2.jpg" alt="img/testimonials2.jpg" />
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="testimonilas-caption text-center">
                                    <div className="ml-5 mr-5 testimonilas-quotes">
                                        "Just wanted to thank you GharDekho for being so awesome!
                                        I absolutely love the house I am renting, and I also love the services too! They have been so wonderful to work with!
                                        So thank you very very much for making my life so much more enjoyable."
                                    </div>
                                    <p className="mt-2" id="image-caption" style={{ fontSize: "17px", fontWeight: "10px" }}>━ Nick Chaturbedi</p>
                                    <img className="testimonilas-img" src="img/testimonials3.jpg" alt="img/testimonials3.jpg" />

                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="testimonilas-caption text-center">
                                    <div className="ml-5 mr-5 testimonilas-quotes">
                                        "GharDekho and the team were highly responsive, proactive and professional from
                                        start to finish and were a pleasure to deal with.
                                        They made things easy for someone like myself juggling the stress of trying to
                                        find the right tenants along with other jobs and priorities.
                                        Would highly recommend!""
                                    </div>
                                    <p className="mt-2" id="image-caption" style={{ fontSize: "17px", fontWeight: "10px" }}>━ Aneesha Williams</p>
                                    <img className="testimonilas-img" src="img/testimonials4.jpg" alt="img/testimonials4.jpg" />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center newsletter-conatiner pt-3 pb-3">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <h2 ><b>Newsletter</b></h2>
                        <p style={{ fontSize: "17px" }}><i>Subscribe to our newsletter for the latest property listings. Let's stay updated!</i></p>
                        <div className="d-flex justify-content-center align-content-center">
                            <input name="newsletterEmail" id="newsletter" type="email" placeholder="demo@gmail.com" style={{ border: "1px solid #7a4bcf", outline: "none" }}></input>
                            <input className="btn btn-outline-purple newsletter-btn ml-2" type="submit" value={"Subscribe"}></input>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default Home;