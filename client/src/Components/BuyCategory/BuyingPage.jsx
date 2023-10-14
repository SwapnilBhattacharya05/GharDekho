import React, { useState } from "react";
import "./BuyingPage.css";
import BuyCategories from "../.././Data/BuyingPageCategories.js";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

const BuyPackages = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // ?const created for apartments
    // eslint-disable-next-line
    const [data1, setData] = useState(BuyCategories);
    return (
        <>
            <Menu />
            <div>

                <div className="buying mt-5">

                    {/* // *banner Hero for the buy page */}
                    <div className="buying-page-header-hero">
                        <img src="img/buy_page_head.jpg"
                            alt="buy_page_header_picture"
                            height={"100%"}
                            width={"100%"}
                            style={{ opacity: "80%" }}
                        />


                        {/* //Todo: need to make the search bar work */}


                        {/* banner Hero for the buy page search bar */}
                        <h1 className="buying-page-header-heading-hero">Discover your perfect home</h1>
                        <p className="buying-page-header-subheading-hero">With the most complete source of homes for sale & real estate near you</p>
                    </div>

                    {/* // ?banner Hero for the buy page search bar icon button */}
                    <div className="buy-page-header-hero-search-complete">
                        <input type="text" className="buying-page-header-hero-search" placeholder="What're you looking for?"></input>
                        <button className="buying-page-header-hero-search-button"><i class="fa-solid fa-magnifying-glass fa-lg"></i></button>
                    </div>

                    {/* // !starting ot the page below */}
                    <div className="container">

                        {/* heading for the flats */}
                        <div>
                            <h3 className="buying-flats-header mt-5 mb-5"><b>Search Properties to buy</b></h3>
                        </div>

                        <div className="row">

                            {
                                data1.map((elem1) => {
                                    const { photo, photoAlt, buyHeading, bhk, buyPrize, sqftIcon, sqft,
                                        statusIcon, status, doorIcon, buildLoc, buildLocText } = elem1;
                                    return (

                                        // !list of flats and cards
                                        <div className="container col-lg-3 col-md-6 col-sm-12 mb-5">
                                            <div className="buy-card bg-light">

                                                {/* top side of the card */}
                                                <div className="buy-card-top">
                                                    <img src={photo} alt={photoAlt} height={"100%"} width={"100%"}></img>
                                                </div>

                                                {/* bottom side if the card */}
                                                <div className="buy-card-bottom">
                                                    <p className="buy-card-prize">₹{buyPrize}<span className="buy-persqft" style={{ color: "#B7B7B7" }}></span></p>
                                                    <p className="buy-card-heading">{buyHeading}</p>
                                                    {/* <p className="buy-card-bhk">{bhk}</p> */}


                                                    {/* Sybmbol and text to check location */}
                                                    <div className="buy-card-Loc-status d-flex">
                                                        <p className="buy-card-build-symbol">
                                                            <i className={buildLoc}></i>
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BuyPackages;