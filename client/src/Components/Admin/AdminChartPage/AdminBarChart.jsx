import React from "react";
import "./AdminCharts.css";
import "../Shared_Container.css";
import Sidebar from "../Sidebar/Sidebar";
import { Box } from "@mui/material";
import BarChart from "../AdminDataCharts/BarChart";

const AdminBarChart = () => {
    return (
        <>
            <Sidebar />
            <div className="admin-main-container-charts">
            <h2 className="ml-2"><strong className="admin-page-main-headers">Bar Chart</strong></h2>
                <Box height="74vh" width="95%">
                    <BarChart />
                </Box>
            </div>
        </>
    )
}
export default AdminBarChart;

