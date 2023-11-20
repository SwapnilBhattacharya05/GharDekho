import React, { useState, useEffect } from "react";
import "./Home.css";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import buyProperty from "../../Data/BuyingPageCategories.js"
import rentProperty from "../../Data/RentingPageCategories.js"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";

const Home = () => {
    const [salesData, setSalesData] = useState([]);
    const [renstData, setRentsData] = useState([]);
    const [testimonialsData, setTestimonials] = useState([]);
    const [user, setUser] = useState({
        newsletterEmail: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        setSalesData(buyProperty.slice(0, 4));
        setRentsData(rentProperty.slice(0, 4));
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        const response = await fetch("http://localhost:8000/api/testimonial/fetchtestimonials", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const testimonials = await response.json();
        setTestimonials(testimonials);
    }

    window.onload = () => {
        document.getElementById("hero-video").addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.newsletterEmail)) {
            return toast.error('Please enter a valid email!', {
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

        toast.success('Thanks for subscription!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        //clear the newsletter input value
        setTimeout(() => {
            setUser({ newsletterEmail: "" });
        }, 3700);
    }

    return (
        <>
            <Menu />
            <ToastContainer />
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
                        <Link to={"/buy"}><span className="home-card-text">Buy</span></Link>
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
                <div className="row text-left">
                    {
                        salesData.map((value) => {
                            const { photo, photoAlt, buyHeading, bhk, buyPrize, sqftIcon, sqft,
                                statusIcon, status, doorIcon, buildLoc, buildLocText } = value;
                            return (

                                // !list of flats and cards
                                <div className="container col-lg-3 col-md-6 col-sm-12 mb-5" key={buyHeading}>
                                    <div className="buy-card bg-light">

                                        {/* top side of the card */}
                                        <div className="buy-card-top">
                                            <img src={photo} alt={photoAlt} height={"100%"} width={"100%"}></img>
                                            <i className="fa-regular fa-heart wishlist"></i>
                                        </div>

                                        {/* bottom side if the card */}
                                        <div className="buy-card-bottom">
                                            <p className="buy-card-prize">₹{buyPrize}<span className="buy-persqft" style={{ color: "#B7B7B7" }}></span></p>
                                            <p className="buy-card-heading">{buyHeading}</p>
                                            {/* <p className="buy-card-bhk">{bhk}</p> */}


                                            {/* Sybmbol and text to check location */}
                                            <div className="buy-card-Loc-status d-flex">
                                                <p className="buy-card-build-symbol">
                                                    <i className={buildLoc ? buildLoc : ""}></i>
                                                </p>
                                                <p className="buy-card-Loc-status-text">
                                                    {buildLocText}
                                                </p>

                                            </div>
                                            <div className="container">
                                                <hr className="buy-card-hr-line-custom" style={{ marginTop: "-10px" }} />
                                            </div>
                                            {/* Dimensions icon and status */}
                                            <ul className="buy-icons d-flex">

                                                <li className="includesWrapper">
                                                    <p className="buildingstatus">
                                                        <i className={sqftIcon}></i>
                                                    </p>
                                                    <p className="blackText">{sqft}</p>
                                                </li>

                                                {/* Ready to move or not icon and status */}
                                                <li className="includesWrapper">
                                                    <p className="buildingstatus">
                                                        <i className={statusIcon}></i>
                                                    </p>
                                                    <p className="blackText">{status}</p>
                                                </li>

                                                {/* Total Floors */}
                                                <li className="includesWrapper">
                                                    <p className="buildingstatus">
                                                        <i className={doorIcon}></i>
                                                    </p>
                                                    <p className="blackText">{bhk}</p>
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
                <div className="row text-left">
                    {
                        renstData.map((value) => {
                            const { photo, photoAlt, rentHeading, bhk, rentPrice, sqftIcon, sqft,
                                statusIcon, status, doorIcon, buildLoc, buildLocText } = value;
                            return (
                                <div className="container col-lg-3 col-md-6 col-sm-12 mb-5" key={rentHeading}>
                                    <div className="rent-card bg-light" >
                                        <div className="rent-card-top">
                                            <img src={photo} alt={photoAlt} height={"100%"} width={"100%"}></img>
                                            <i className="fa-regular fa-heart wishlist" style={{ position: "absolute" }}></i>
                                        </div>
                                        <div className="rent-card-bottom">
                                            <p className="rent-card-prize">₹{rentPrice}<span className="rent-persqft" style={{ color: "#B7B7B7" }}></span></p>
                                            <p className="rent-card-heading">{rentHeading}</p>
                                            <div className="rent-card-Loc-status d-flex">
                                                <p className="rent-card-build-symbol">
                                                    <i className={buildLoc}></i>
                                                </p>
                                                <p className="rent-card-Loc-status-text">
                                                    {buildLocText}
                                                </p>

                                            </div>
                                            <div className="container">
                                                <hr className="rent-card-hr-line-custom" style={{ marginTop: "-10px" }} />
                                            </div>
                                            <ul className="rent-icons d-flex">

                                                <li className="includesWrapper">
                                                    <p className="buildingstatus">
                                                        <i className={sqftIcon}></i>
                                                    </p>
                                                    <p className="blackText">{sqft}</p>
                                                </li>
                                                <li className="includesWrapper">
                                                    <p className="buildingstatus">
                                                        <i className={statusIcon}></i>
                                                    </p>
                                                    <p className="blackText">{status}</p>
                                                </li>
                                                <li className="includesWrapper">
                                                    <p className="buildingstatus">
                                                        <i className={doorIcon}></i>
                                                    </p>
                                                    <p className="blackText">{bhk}</p>
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
            <hr />
            {/*Testimonilas-section*/}
            <div div id="testimonilas" className="container" >
                <div className="testimonilas-container text-center mt-5 mb-5">
                    <h3 className="pt-5 pb-2"><b>Testimonials</b></h3>
                    <div id="carouselExampleControls" className="carousel slide mt-2" data-ride="carousel">
                        <div className="carousel-inner">
                            {
                                testimonialsData.map((value) => {
                                    const { _id, quotes, name, image } = value;
                                    return (
                                        <div className={`carousel-item ${_id.toString() === "654aacb4a3b7811766bdd2fb" ? "active" : ""}`}>
                                            <div className="testimonilas-caption text-center">
                                                <div className="pl-4 pl-4 testimonilas-quotes">{`"${quotes}"`}</div>
                                                <p className="mt-2" id="image-caption" style={{ fontSize: "17px", fontWeight: "10px" }}>━ {name}</p>
                                                <img className="testimonilas-img" src={image} alt={image} />
                                            </div>
                                        </div>
                                    );
                                })
                            }
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

            <div className="container-fluid text-center newsletter-container pt-3 pb-3">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <h2 ><b>Newsletter</b></h2>
                        <p style={{ fontSize: "17px" }}><i>Subscribe to our newsletter for the latest property listings. Let's stay updated!</i></p>
                        <form method="post" className="d-flex justify-content-center align-content-center" onSubmit={handleSubmit}>
                            <input name="newsletterEmail" id="newsletter" type="email" placeholder="demo@gmail.com" style={{ border: "1px solid #7a4bcf", outline: "none" }} required onChange={onChange} value={user.newsletterEmail}></input>
                            <button className="btn btn-purple newsletter-btn ml-2" type="submit"><i className="fa-solid fa-envelope"></i> Subscribe</button>
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default Home;