import React, { useState, useEffect } from "react";
import "./Home.css";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';

const Home = () => {
    const [buyData, setSalesData] = useState([]);
    const [rentsData, setRentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [testimonialsData, setTestimonials] = useState([]);
    const [user, setUser] = useState({
        newsletterEmail: "",
    });

    useEffect(() => {

        window.scrollTo(0, 0);
        const fetchAllSells = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/property/getallsells`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const json = await response.json();
                setTimeout(() => {
                    setLoading(false);
                }, 2700);
                setSalesData(json.sells.slice(0, 4));
            } catch (error) {
                console.log("Error While Fetching Sell Properties");
            }
        }

        const fetchAllRents = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/property/getallrents`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const json = await response.json();
                setTimeout(() => {
                    setLoading(false);
                }, 2700);
                setRentsData(json.rents.slice(0, 4));
            } catch (error) {
                console.log("Error While Fetching Rent Properties");
            }
        }

        fetchAllSells();
        fetchAllRents();
        fetchTestimonials();
    }, []);


    const fetchTestimonials = async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/testimonial/fetchtestimonials`, {
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
        setUser({ newsletterEmail: e.target.value });
    }

    const handleSubmit = async (e) => {
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

        try {

            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/email/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userEmail: user.newsletterEmail })
            });

            const json = await response.json();

            if (json.success) {
                toast.success('Thanks for subscription!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }

        } catch (error) {
            toast.error('Something Went Wrong, Please Try Again Later!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }
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
                        loading === true ?
                            <img className="loading-img" src='https://cdn.dribbble.com/users/330915/screenshots/2311781/media/2e95edec9c2a16605982c96d1044023b.gif' alt='Loading...' />
                            :
                            buyData.map((value) => {
                                const { imageUrls, propertyName, bathrooms, price, bedrooms, street, city, state, } = value;
                                return (

                                    // !list of cards
                                    <div className="container col-lg-3 col-md-6 col-sm-12 mb-5" key={value._id}>
                                        <Link to={`/propertydescription/${value._id}`} className="buy-card-wrapper">
                                            <div className="buy-card bg-light">

                                                {/* top side of the card */}
                                                <div className="buy-card-top">
                                                    <img src={imageUrls[0]} alt={"buy img"} height={"100%"} width={"100%"} />
                                                </div>
                                                {/* bottom side if the card */}
                                                <div className="buy-card-bottom">
                                                    <p className="buy-card-prize">₹{price}<span className="buy-persqft" style={{ color: "#B7B7B7" }}></span></p>
                                                    <p className="buy-card-heading">{propertyName}</p>


                                                    {/* Sybmbol and text to check location */}
                                                    <div className="buy-card-Loc-status d-flex">
                                                        <p className="buy-card-build-symbol">
                                                            <i className={"fa-solid fa-location-dot"}></i>
                                                        </p>
                                                        <p className="buy-card-Loc-status-text">
                                                            {`${street}, ${city}, ${state} `}
                                                        </p>

                                                    </div>
                                                    <div className="container">
                                                        <hr className="buy-card-hr-line-custom" style={{ marginTop: "-10px" }} />
                                                    </div>
                                                    {/* Dimensions icon and status */}
                                                    <ul className="buy-icons d-flex">
                                                        <li className="includesWrapper">
                                                            <p className="buildingstatus">
                                                                <i><BathtubIcon /></i>
                                                            </p>
                                                            <p className="blackText">{bathrooms}<span className="sub-blacktext">Bathroom{(value.bathrooms > 1) ? "s" : ""}</span></p>
                                                        </li>


                                                        {/* Total Floors */}
                                                        <li className="includesWrapper">
                                                            <p className="buildingstatus">
                                                                <i><BedIcon /></i>
                                                            </p>
                                                            <p className="blackText">{bedrooms}<span className="sub-blacktext">Bedroom{(value.bedrooms > 1) ? "s" : ""}</span></p>
                                                        </li>
                                                        {/* Ready to move or not icon and status */}
                                                        <li className="includesWrapper">
                                                            <p className="buildingstatus">
                                                                <i>{(value.availability === "ready") ?
                                                                    <CheckCircleOutlineIcon
                                                                        className="availability-icon-status-ready-buy"
                                                                    />
                                                                    :
                                                                    <EngineeringIcon
                                                                        className="availability-icon-status-not-ready-buy"

                                                                    />
                                                                }
                                                                </i>
                                                            </p>
                                                            <p className="blackText">
                                                                <span className="sub-blacktext">
                                                                    {(value.availability === "ready") ?
                                                                        "Ready"
                                                                        :
                                                                        "Not Ready"
                                                                    }
                                                                </span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Link>
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
                        loading === true ?
                            <img className="loading-img" src='https://cdn.dribbble.com/users/330915/screenshots/2311781/media/2e95edec9c2a16605982c96d1044023b.gif' alt='Loading...' style={{ margin: "0 auto", display: "block" }} />
                            :
                            rentsData.map((value) => {
                                const { imageUrls, propertyName, bathrooms, price, bedrooms, street, city, state, } = value;
                                return (
                                    <div className="container col-lg-3 col-md-6 col-sm-12 mb-5" key={value._id}>
                                        <Link to={`/propertydescription/${value._id}`} className="rent-card-wrapper">
                                            <div className="rent-card bg-light">

                                                {/* top side of the card */}
                                                <div className="rent-card-top">
                                                    <img src={imageUrls[0]} alt={"rent img"} height={"100%"} width={"100%"} />
                                                </div>
                                                {/* bottom side if the card */}
                                                <div className="rent-card-bottom">
                                                    <p className="rent-card-prize">₹{price}/month<span className="rent-persqft" style={{ color: "#B7B7B7" }}></span></p>
                                                    <p className="rent-card-heading">{propertyName}</p>


                                                    {/* Sybmbol and text to check location */}
                                                    <div className="rent-card-Loc-status d-flex">
                                                        <p className="rent-card-build-symbol">
                                                            <i className={"fa-solid fa-location-dot"}></i>
                                                        </p>
                                                        <p className="rent-card-Loc-status-text">
                                                            {`${street}, ${city}, ${state} `}
                                                        </p>

                                                    </div>
                                                    <div className="container">
                                                        <hr className="rent-card-hr-line-custom" style={{ marginTop: "-10px" }} />
                                                    </div>
                                                    {/* Dimensions icon and status */}
                                                    <ul className="rent-icons d-flex">
                                                        <li className="includesWrapper">
                                                            <p className="buildingstatus">
                                                                <i><BathtubIcon /></i>
                                                            </p>
                                                            <p className="blackText">{bathrooms}<span className="sub-blacktext">Bathroom{(value.bathrooms > 1) ? "s" : ""}</span></p>
                                                        </li>


                                                        {/* Total Floors */}
                                                        <li className="includesWrapper">
                                                            <p className="buildingstatus">
                                                                <i><BedIcon /></i>
                                                            </p>
                                                            <p className="blackText">{bedrooms}<span className="sub-blacktext">Bedroom{(value.bedrooms > 1) ? "s" : ""}</span></p>
                                                        </li>
                                                        {/* Ready to move or not icon and status */}
                                                        <li className="includesWrapper">
                                                            <p className="buildingstatus">
                                                                <i>{(value.availability === "ready") ?
                                                                    <CheckCircleOutlineIcon
                                                                        className="availability-icon-status-ready-rent"
                                                                    />
                                                                    :
                                                                    <EngineeringIcon
                                                                        className="availability-icon-status-not-ready-rent"

                                                                    />
                                                                }
                                                                </i>
                                                            </p>
                                                            <p className="blackText">
                                                                <span className="sub-blacktext">
                                                                    {(value.availability === "ready") ?
                                                                        "Ready"
                                                                        :
                                                                        "Not Ready"
                                                                    }
                                                                </span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Link>
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
                                        <div key={_id} className={`carousel-item ${_id.toString() === "654aacb4a3b7811766bdd2fb" ? "active" : ""}`}>
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