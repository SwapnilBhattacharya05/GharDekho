import React, { useEffect, useState } from "react";
import "./Rent.css";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';

const RentPackages = () => {
    const [rentsData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchAllRents = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/property/getallrents?searchTerm=${searchTerm}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const json = await response.json();
                setTimeout(() => {
                    setLoading(false);
                }, 2700);
                setData(json.rents)
            } catch (error) {
                console.log("Error While Fetching Rent Properties");
            }
        }

        fetchAllRents();
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

                <div className="renting mt-5">

                    <div className="renting-page-header-hero">
                        <img src="img/rent_page_head.jpg" style={{ objectFit: "cover" }} height={"400px"} width={"100%"} id="rent-page-header-image" alt="rent_page_header_image"></img>


                        <h1 className="renting-page-header-heading-hero">Discover your perfect home</h1>
                        <p className="renting-page-header-subheading-hero">With the most complete source of homes for you to rent</p>
                    </div>

                    <form className="rent-page-header-hero-search-complete" onSubmit={handleSubmit}>
                        <input name="searchTerm"
                            id="searchTerm"
                            value={searchTerm || ""}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            className="renting-page-header-hero-search"
                            placeholder="Look for your dream home here!"
                        />
                        <button className="renting-page-header-hero-search-button">
                            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                        </button>
                    </form>

                    <div className="container" style={{minHeight:"500px"}}>

                        <div>
                            <h3 className="renting-flats-header mt-1 mb-5"><b>Search Properties to Rent</b></h3>
                        </div>

                        <div className="row">
                            {

                                loading === true ? <img src='https://cdn.dribbble.com/users/330915/screenshots/2311781/media/2e95edec9c2a16605982c96d1044023b.gif' alt='spinner' style={{ margin: "0 auto", display: "block" }} /> :
                                    rentsData.length !== 0 ?
                                        rentsData.map((value) => {
                                            const { imageUrls, propertyName, bathrooms, price, bedrooms, street, city, state, } = value;
                                            return (

                                                // !list of cards
                                                <div key={value._id} className="container col-lg-3 col-md-6 col-sm-12 mb-5">
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

export default RentPackages;