import React from "react";
import "./Dashboard.css";
import "../Shared_Container.css";
import Sidebar from "../Sidebar/Sidebar";
import { Box, colors } from "@mui/material";
import { CircularProgress, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import TrafficIcon from '@mui/icons-material/Traffic';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import BarChart from "../AdminDataCharts/BarChart";
import LineChart from "../AdminDataCharts/LineChart";
import PieChart from "../AdminDataCharts/PieChart"


function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="cadetblue">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <div className="admin-main-container">
                <div className="dashboard-main">
                    <h2 className="ml-2"><strong className="admin-page-main-headers">Dashboard</strong></h2>

                    {/* //!Start Writing Code from here */}
                    <div className="admin-stat-row mb-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="admin-stat-boxes-top d-flex">
                                        <div className="admin-stat-boxes-top-left">
                                            <EmailIcon className="admin-stat-boxes-icons" />
                                            <div className="admin-stat-boxes-numbers">3,450</div>
                                            <p className="admin-stat-boxes-text">Contacts Recieved</p>
                                        </div>
                                        <div className="admin-stat-boxes-top-right">
                                            <CircularProgressWithLabel
                                                value={50}
                                                className="admin-stat-boxes-top-progress"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="admin-stat-boxes-top d-flex">
                                        <div className="admin-stat-boxes-top-left">
                                            <PersonAddIcon className="admin-stat-boxes-icons" />
                                            <div className="admin-stat-boxes-numbers">10,200</div>
                                            <p className="admin-stat-boxes-text">New Clients</p>
                                        </div>
                                        <div className="admin-stat-boxes-top-right">
                                            <CircularProgressWithLabel
                                                value={10}
                                                className="admin-stat-boxes-top-progress"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="admin-stat-boxes-top d-flex">
                                        <div className="admin-stat-boxes-top-left">
                                            <PointOfSaleIcon className="admin-stat-boxes-icons" />
                                            <div className="admin-stat-boxes-numbers">52,500</div>
                                            <p className="admin-stat-boxes-text">Sales Obtained</p>
                                        </div>
                                        <div className="admin-stat-boxes-top-right">
                                            <CircularProgressWithLabel
                                                value={21}
                                                className="admin-stat-boxes-top-progress"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="admin-stat-boxes-top d-flex">
                                        <div className="admin-stat-boxes-top-left">
                                            <TrafficIcon className="admin-stat-boxes-icons" />
                                            <div className="admin-stat-boxes-numbers">1,325,200</div>
                                            <p className="admin-stat-boxes-text">Traffic Recieved</p>
                                        </div>
                                        <div className="admin-stat-boxes-top-right">
                                            <CircularProgressWithLabel
                                                value={43}
                                                className="admin-stat-boxes-top-progress"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="admin-line-graph-generated container">
                        <div className="row">
                            <div className="col-12">
                                <Box
                                    height="270px"
                                    width="100%"
                                    className="admin-dashboard-graph-bg-color"
                                >
                                    <div className="admin-dashboard-line-graph-heading">
                                        Line Graph
                                    </div>
                                    {/* <p className="admin-dashboard-line-graph-heading-number">
                                        ₹599,532.32
                                    </p> */}
                                    <LineChart />
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="admin-dashboard-bottom-part mt-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <Box
                                        height="195px"
                                        width="100%"
                                        className="admin-dashboard-graph-bg-color"
                                    >
                                        <div className="admin-dashboard-bottom-graph-heading">
                                            Bar Graph
                                        </div>
                                        <BarChart />
                                    </Box>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <Box
                                        height="195px"
                                        width="100%"
                                        className="admin-dashboard-graph-bg-color"
                                    >
                                        <div className="admin-dashboard-bottom-graph-heading">
                                            Pie Chart
                                        </div>
                                        <PieChart />
                                    </Box>
                                </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <Box
                                            height="195px"
                                            width="100%"
                                            className="admin-dashboard-graph-bg-color"
                                        >
                                            <div className="admin-dashboard-bottom-graph-heading">
                                                Total Sales
                                            </div>
                                            <CircularProgress
                                                variant="determinate"
                                                value={50}
                                                className="admin-dashboard-total-profit-progressbar"
                                            >
                                            </CircularProgress>
                                            <div className="admin-dashboard-total-profit-text">₹21,400 total sales</div>
                                        </Box>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;