import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";



const Menu = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-main">
                <Link className="navbar-brand" to="/" onClick={backToTop}>
                    <img src="img/brand-logo.jpg" id="icon" className="mb-1" alt="img/brand-logo.jpg" />
                    <strong className="brand-name"><span className="text-purple">Ghar</span>Dekho</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={backToTop}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Properties
                            </Link>
                            <div className="dropdown-menu ">
                                <Link className="dropdown-item sub-nav-link" to="/buyPackages"
                                    onClick={backToTop}>
                                    Buy
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link
                                    className="dropdown-item sub-nav-link"
                                    to="/postproperty"
                                    onClick={backToTop}
                                >
                                    Sell
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link
                                    className="dropdown-item sub-nav-link"
                                    to="/rentPackages"
                                    onClick={backToTop}

                                >
                                    Rent
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs" onClick={backToTop}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={backToTop} >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={backToTop}>
                                Contact us
                            </Link>
                        </li>
                    </ul>

                    <Link to="/login">
                        <button type="button" className="btn btn-outline-purple">
                            Log in
                        </button>
                    </Link>
                    <Link className="ml-3 mr-2" to="/signup">
                        <button type="button" className="btn btn-purple">
                            Sign up
                        </button>
                    </Link>

                </div>
            </nav>
        </>
    )
}
export default Menu;