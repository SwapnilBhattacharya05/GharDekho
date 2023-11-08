import React, { useState } from "react";
import "./Rent.css";
import RentCategories from "../../Data/RentingPageCategories.js";
import Footer from "../Footer/Footer.jsx";
import Menu from "../Menu/Menu.jsx";


const RentPackages = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const [data2, setData] = useState(RentCategories);
    return (
        <>
            <Menu />

            <div className="renting mt-5">

                <div className="renting-page-header-hero">
                    <img src="img/rent_page_head.jpg"
                        id="rent-page-header-image"
                        alt="rent_page_header_image"
                        height={"100%"}
                        width={"100%"}
                        style={{ opacity: "80%" }}

                    />


                    <h1 className="renting-page-header-heading-hero">Discover your perfect home</h1>
                    <p className="renting-page-header-subheading-hero">With the most complete source of homes for you to rent</p>
                </div>

                <div className="rent-page-header-hero-search-complete">
                    <input type="text" className="renting-page-header-hero-search" placeholder="Look for your dream home here!"></input>
                    <button className="renting-page-header-hero-search-button"><i class="fa-solid fa-magnifying-glass fa-lg"></i></button>
                </div>

                <div className="container">

                    <div>
                        <h3 className="renting-flats-header mt-5 mb-5"><b>Search Properties to Rent</b></h3>
                    </div>

                    <div className="row">
                        {
                            data2.map((elem2) => {
                                const { photo, photoAlt, rentHeading, bhk, rentPrice, sqftIcon, sqft,
                                    statusIcon, status, doorIcon, buildLoc, buildLocText } = elem2;
                                return (
                                    <div className="container col-lg-3 col-md-6 col-sm-12 mb-5">
                                        <div className="rent-card bg-light">
                                            <div className="rent-card-top">
                                                <img src={photo}
                                                    alt={photoAlt}
                                                    height={"100%"}
                                                    width={"100%"}
                                                />
                                                <span className="wishlist-rent-wrapper">
                                                    <i className="fa-regular fa-heart wishlist-rent" />
                                                </span>
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
            </div>
            <Footer />
        </>
    )
}

export default RentPackages;