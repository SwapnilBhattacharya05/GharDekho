import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import "../Shared_Container.css"
import "../AdminPages/AdminPageStyles/AdminHomePage.css"


const AdminHomePage = () => {
    return (
        <>
            <Sidebar />
            <div className="admin-main-container">
                <div className="dashboard-main">
                    <h2 className="ml-2"><strong className="admin-page-main-headers">Home Page</strong></h2>

                    {/* //!Start Writing Code from here */}
                </div>
            </div>
        </>
    )
}
export default AdminHomePage;