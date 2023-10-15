import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import { React } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";




const Sidebar = () => {

    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <nav class="navbar-admin navbar-dark sticky-top flex-md-nowrap p-0 shadow">
                <Link class="navbar-brand admin-navbar-brand col-md-3 col-lg-2 mr-0 px-4" to="/adminhome">
                    <img src="img/brand-logo.jpg"
                        id="admin-panel-icon"
                        className="mb-1"
                        alt="img/brand-logo.jpg"
                        style={{ height: "30px", width: "30px" }}
                    />
                    <strong className="admin-nav-top-heading"><span className="text-purple">Ghar</span><span className="text-dekho-admin">Dekho</span></strong>
                </Link>
                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>

            <div class="container-fluid">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                <div className="admin-title">MAIN</div>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/adminhome" onClick={backToTop}>
                                        <DashboardIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Dashboard</span>

                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/adminuser" onClick={backToTop}>
                                        <PersonIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Users</span>

                                    </Link>
                                </li>
                                <div className="admin-title">PAGES</div>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/adminhomepage" onClick={backToTop}>
                                        <HomeIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Home</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/adminbuypage" onClick={backToTop}>
                                        <ShoppingCartIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Buy</span>

                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/adminsellpage" onClick={backToTop}>
                                        <SellIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Sell</span>

                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/adminrentpage" onClick={backToTop}>
                                        <AccessTimeIcon className="admin-sidebar-icons" />

                                        <span className="admin-sidebar-options">Rent</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/adminblogpage" onClick={backToTop}>
                                        <AutoStoriesIcon className="admin-sidebar-icons" />

                                        <span className="admin-sidebar-options">Blogs</span>
                                    </Link>
                                </li>
                                <div className="admin-title">CHARTS</div>

                                <li class="nav-item">
                                    <Link class="nav-link" to="/barchart" onClick={backToTop}>
                                        <BarChartIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Bar Chart</span>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="/linechart" onClick={backToTop}>
                                        <SsidChartIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Line Chart</span>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="/piechart" onClick={backToTop}>
                                        <DonutLargeIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Pie Chart</span>
                                    </Link>
                                </li>

                                <div className="admin-title">COLOR OPTIONS</div>
                                <li class="nav-item" id="admin-color-options-wrapper">
                                    <div className="admin-coloroptions"></div>
                                    <div className="admin-coloroptions"></div>
                                </li>
                                <div className="admin-title">SERVICE</div>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/adminlogin" onClick={backToTop}>
                                        <LogoutIcon className="admin-sidebar-icons" />
                                        <span className="admin-sidebar-options">Log out</span>

                                    </Link>
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