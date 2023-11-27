import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import "../Shared_Container.css";
import Sidebar from "../Sidebar/Sidebar";
import { Box } from "@mui/material";
import { CircularProgress, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SellIcon from '@mui/icons-material/Sell';
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
                    {`${Math.round(props.value)}`}
                </Typography>
            </Box>
        </Box>
    );
}

const Dashboard = () => {

    // !fetching contacts
    const [allContacts, setAllContacts] = useState([])
    const [allUsers, setAllUsers] = useState([]);
    const [contactsRecieved, setContactsRecieved] = useState(0)
    const [usersRecieved, setUsersRecieved] = useState(0)

    const fetchAllContacts = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/contact/fetchcontacts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json()
            await setAllContacts(json.contacts);
            setContactsRecieved(json.contacts.length)

        } catch (error) {
            console.error("Error fetching contact:", error.message)
        }
    }
    useEffect(() => {
        fetchAllContacts()
    }, [])

    useEffect(() => {
        console.log(allContacts)
    }, [allContacts])


    // !Fetching all users

    const fetchAllUsers = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/getallusers`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const json = await response.json();
            // console.log(json.users);
            await setAllUsers(json.users);
            setUsersRecieved(json.users.length)
        } catch (error) {
            console.error("Error fetching users:", error.message);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, []);

    useEffect(() => {
        console.log(allUsers);
    }, [allUsers]);


    // !Fetching all sells data
    const [allSells, setAllSells] = useState([]);
    const [sellsRecieved, setSellsRecieved] = useState(0)

    const fetchAllSells = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/property/getallsells`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const json = await response.json();
            await setAllSells(json.sells);
            setSellsRecieved(json.sells.length)
        } catch (error) {
            console.error("Error fetching users:", error.message);
        }
    }

    useEffect(() => {
        fetchAllSells();
    }, []);

    useEffect(() => {
        console.log(allSells);
    }, [allSells]);

    // !Fetching rents data
    const [allRents, setAllRents] = useState([])
    const [rentsRecieved, setRentsRecieved] = useState(0)
    const fetchAlllRents = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/property/getallrents`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            await setAllRents(json.rents);
            setRentsRecieved(json.rents.length)
            // console.log(json.rents)
        } catch (error) {
            console.error("Error fetching rents:", error.message)
        }
    }
    useEffect(() => {
        fetchAlllRents();
    }, [])
    useEffect(() => {
        console.log(allRents)
    }, [allRents])




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
                                            <div className="admin-stat-boxes-numbers">{contactsRecieved}</div>
                                            <p className="admin-stat-boxes-text">Contacts Recieved</p>
                                        </div>
                                        <div className="admin-stat-boxes-top-right">
                                            <CircularProgressWithLabel
                                                value={contactsRecieved}
                                                className="admin-stat-boxes-top-progress"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="admin-stat-boxes-top d-flex">
                                        <div className="admin-stat-boxes-top-left">
                                            <PersonAddIcon className="admin-stat-boxes-icons" />
                                            <div className="admin-stat-boxes-numbers">{usersRecieved}</div>
                                            <p className="admin-stat-boxes-text">New Clients</p>
                                        </div>
                                        <div className="admin-stat-boxes-top-right">
                                            <CircularProgressWithLabel
                                                value={usersRecieved}
                                                className="admin-stat-boxes-top-progress"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="admin-stat-boxes-top d-flex">
                                        <div className="admin-stat-boxes-top-left">
                                            <SellIcon className="admin-stat-boxes-icons" />
                                            <div className="admin-stat-boxes-numbers">{sellsRecieved}</div>
                                            <p className="admin-stat-boxes-text">Sells Created</p>
                                        </div>
                                        <div className="admin-stat-boxes-top-right">
                                            <CircularProgressWithLabel
                                                value={sellsRecieved}
                                                className="admin-stat-boxes-top-progress"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="admin-stat-boxes-top d-flex">
                                        <div className="admin-stat-boxes-top-left">
                                            <SupervisorAccountIcon className="admin-stat-boxes-icons" />
                                            <div className="admin-stat-boxes-numbers">{rentsRecieved}</div>
                                            <p className="admin-stat-boxes-text">Rents Created</p>
                                        </div>
                                        <div className="admin-stat-boxes-top-right">
                                            <CircularProgressWithLabel
                                                value={rentsRecieved}
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
                                            Total Created
                                        </div>
                                        <CircularProgress
                                            variant="determinate"
                                            value={rentsRecieved + sellsRecieved}
                                            className="admin-dashboard-total-profit-progressbar"
                                        >
                                        </CircularProgress>
                                        <div className="admin-dashboard-total-profit-text">{rentsRecieved + sellsRecieved} Created</div>
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