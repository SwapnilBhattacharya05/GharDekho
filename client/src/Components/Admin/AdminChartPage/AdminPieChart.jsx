import React from "react";
import "./AdminCharts.css";
import Sidebar from "../Sidebar/Sidebar";
import { Box } from "@mui/material";
import PieChart from "../AdminDataCharts/PieChart";

const AdminPieChart = () => {
    return (
        <>
            <Sidebar />
            <div className="admin-main-container-charts">
            <h2 className="ml-2"><strong className="admin-page-main-headers">Pie Chart</strong></h2>
                <Box height="74vh" width="95%">
                    <PieChart />
                </Box>
            </div>
        </>
    )
}
export default AdminPieChart;