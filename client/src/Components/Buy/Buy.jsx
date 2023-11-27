import React, { useState, useEffect } from "react";
import "./Buy.css";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';



const BuyPackages = () => {

    const [buyData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchAllSells = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/property/getallsells?searchTerm=${searchTerm}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const json = await response.json();
                setTimeout(() => {
                    setLoading(false);
                }, 2700);
                setData(json.sells)
            } catch (error) {
                console.log("Error While Fetching Sell Properties");
            }
        }
        fetchAllSells();
        // eslint-disable-next-line
    }, [window.location.search]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('searchTerm');
        if (searchTerm) {
            setSearchTerm(searchTerm);
        }
        // eslint-disable-next-line
    }, [window.location.search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("searchTerm", searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`?${searchQuery}`);
    }

    return (
        <>
            <Menu />
            <div>

                <div className="buying mt-5">

                    {/* // *banner Hero for the buy page */}
                    <div className="buying-page-header-hero">
                        <img src="img/buy_page_head.jpg" height={"400px"} width={"100%"} id="buy-page-header-image" alt="buy_page_header_image"></img>


                        {/* //Todo: need to make the search bar work */}


                        {/* banner Hero for the buy page search bar */}
                        <h1 className="buying-page-header-heading-hero">Discover your perfect home</h1>
                        <p className="buying-page-header-subheading-hero">With the most complete source of homes for sale & real estate near you</p>
                    </div>

                    {/* // ?banner Hero for the buy page search bar icon button */}
                    <form onSubmit={handleSubmit} className="buy-page-header-hero-search-complete">
                        <input type="text"
                            className="buying-page-header-hero-search"
                            placeholder="What're you looking for?"
                            value={searchTerm || ""}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="buying-page-header-hero-search-button">
                            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                        </button>
                    </form>

                    {/* // !starting ot the page below */}
                    <div className="container" style={{ minHeight: "500px" }}>

                        {/* heading for the flats */}
                        <div>
                            <h3 className="buying-flats-header mt-1 mb-5"><b>Search Properties to buy</b></h3>
                        </div>
                        <div className="row">

                            {
                                loading === true ? <img src='https://cdn.dribbble.com/users/330915/screenshots/2311781/media/2e95edec9c2a16605982c96d1044023b.gif' alt='Loading...' style={{ margin: "0 auto", display: "block" }} /> :
                                    buyData.length !== 0 ?
                                        buyData.map((value) => {
                                            const { imageUrls, propertyName, bathrooms, price, bedrooms, street, city, state, } = value;
                                            return (

                                                // !list of cards
                                                <div key={value._id} className="container col-lg-3 col-md-6 col-sm-12 mb-5">
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
                                        }) :
                                        <div className="m-auto">
                                            <p className="text-center">Oops No Property Found!</p>
                                            <img src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png?resize=400x300&vertical=center" alt="Nothing Found" />
                                        </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BuyPackages;