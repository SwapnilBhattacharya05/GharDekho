import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../../Context/user/UserContext";
import "./Menu.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Menu = () => {

    const navigate = useNavigate();

    const userContext = useContext(UserContext);

    const { userData, setUserData } = userContext;
    const handleLogOut = async (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        await setUserData({ id: "", username: "", email: "", phone: "", photo: "" });
        navigate("/login");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-main">
                <Link className="navbar-brand" to="/">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ghardekho-bd550.appspot.com/o/brand-logo.jpg?alt=media&token=e901988f-af26-4c21-9253-487c4e0b0453" id="icon" className="mb-1" alt="img/brand-logo.jpg" />
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
                                    to="/listproperty"
                                >
                                    Advertise
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogshome" >
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
                        !localStorage.getItem("token") ?
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
                            <ul className="navbar-nav ml-auto">
                                <li className="dropdown menubar-profile-pic-dropdown-button-wrapper nav-item">
                                    <button className="menubar-profile-pic-dropdown-button"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-expanded="false">
                                        <img src={userData.photo || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                                            alt="profile"
                                            className="profile-avatar mx-4 nav-item"
                                            style={{ width: "50px", marginTop: 0 }} />
                                    </button>
                                    <div className="dropdown-menu menubar-profile-pic-dropdown-options">
                                        <Link className="dropdown-item sub-nav-link"
                                            to={"/profile"}
                                        >
                                            <AccountCircleOutlinedIcon /> Profile
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item sub-nav-link"
                                            to={"/myproperty"}
                                        >
                                            <HouseOutlinedIcon /> My Properties
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <button className="btn dropdown-item sub-nav-link"
                                            id="menubar-logout-dropdown-button-handler"
                                            onClick={handleLogOut}
                                        >
                                            <LogoutOutlinedIcon /> Log out
                                        </button>
                                    </div>
                                </li>
                            </ul>
                    }
                </div>
            </nav>
        </>
    )
}
export default Menu;