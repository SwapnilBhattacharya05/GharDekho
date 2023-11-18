import React, { useContext } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import UserContext from "../../Context/user/UserContext";
const Menu = () => {

    const userContext = useContext(UserContext);
    const { userData } = userContext;

    // const handleLogOut = () => {
    //     localStorage.removeItem("token");
    //     navigate("/login");
    // }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-main">
                <Link className="navbar-brand" to="/">
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
                            <Link className="nav-link" to="/">
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
                                <Link className="dropdown-item sub-nav-link" to="/buy">
                                    Buy
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link
                                    className="dropdown-item sub-nav-link"
                                    to="/rent"
                                >
                                    Rent
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link
                                    className="dropdown-item sub-nav-link"
                                    to="/postproperty"
                                >
                                    Advertise
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs" >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                    {
                        userData.username === "" ?
                            <div className="d-flex justify-content-center">
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
                            :
                            <>

                                <Link to={"/profile"}>
                                    <img src={userData.photo} alt="profile" className="profile-avatar mx-4 nav-item" />
                                </Link>
                                {/* <button type="button" className="btn btn-outline-purple mx-3" onClick={handleLogOut}>
                                    <i className="fa-solid fa-right-from-bracket"></i> Log Out
                                </button> */}
                            </>
                    }
                </div>
            </nav>
        </>
    )
}
export default Menu;