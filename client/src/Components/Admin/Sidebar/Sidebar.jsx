import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Shared_Container.css";
import "./Sidebar.css";




const Sidebar = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleLogout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem("isAdmin");
        window.location.href = "/adminlogin";
    }

    return (
        <>
            <nav className="navbar-admin navbar-dark sticky-top flex-md-nowrap p-0 shadow">
                <Link className="navbar-brand admin-navbar-brand col-md-3 col-lg-2 mr-0 px-4" to="/adminhome">
                    <img src="img/brand-logo.jpg"
                        id="admin-panel-icon"
                        className="mb-1"
                        alt="img/brand-logo.jpg"
                        style={{ height: "30px", width: "30px" }}
                    />
                    <strong className="admin-nav-top-heading"><span className="text-purple">Ghar</span><span className="text-dekho-admin">Dekho</span></strong>
                </Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <div className="admin-title">MAIN</div>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adminhome" >
                                        <DashboardIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Dashboard</span>

                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adminuser" >
                                        <PersonIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Users</span>

                                    </Link>
                                </li>
                                <div className="admin-title">PAGES</div>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adminbuypage" >
                                        <ShoppingCartIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Buys</span>

                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adminrentpage" >
                                        <AccessTimeIcon className="admin-sidebar-icons" />

                                        <span className="admin-sidebar-options">Rents</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adminblogpage" >
                                        <AutoStoriesIcon className="admin-sidebar-icons" />

                                        <span className="admin-sidebar-options">Blogs</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admincontactpage" >
                                        <PhoneEnabledIcon className="admin-sidebar-icons" />

                                        <span className="admin-sidebar-options">Contacts</span>
                                    </Link>
                                </li>
                                <div className="admin-title">CHARTS</div>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/barchart" >
                                        <BarChartIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Bar Chart</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/linechart" >
                                        <SsidChartIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Line Chart</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/piechart" >
                                        <DonutLargeIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Pie Chart</span>
                                    </Link>
                                </li>

                                <div className="admin-title">COLOR OPTIONS</div>
                                <li className="nav-item" id="admin-color-options-wrapper">
                                    <div className="admin-coloroptions"></div>
                                    <div className="admin-coloroptions"></div>
                                </li>
                                <div className="admin-title">SERVICE</div>
                                <li className="nav-item">
                                    <button className='btn btn-text-danger' onClick={handleLogout}>
                                        <LogoutIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Log out</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Sidebar;