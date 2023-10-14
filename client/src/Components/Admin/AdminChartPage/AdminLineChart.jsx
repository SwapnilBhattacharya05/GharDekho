import React from "react";
import "./AdminCharts.css";
import "../Shared_Container.css";
import Sidebar from "../Sidebar/Sidebar";
import { Box } from "@mui/material";
import LineChart from "../AdminDataCharts/LineChart";

const AdminLineChart = () => {
    return (
        <>
            <Sidebar />
            <div className="admin-main-container-charts">
                <h2 className="ml-2"><strong className="admin-page-main-headers">Line Chart</strong></h2>
                <Box height="73vh" width="95%">
                    <LineChart />
                </Box>
            </div>
        </>
    )
}
export default AdminLineChart;
