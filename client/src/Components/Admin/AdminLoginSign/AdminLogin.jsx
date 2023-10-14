import React from "react";
import "./AdminLogin.css";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';




const AdminLogin = () => {
    return (
        <>
            <div className="admin-login-background-color">
                <div className="admin-login-background-image">
                    <form className="admin-login-card">
                        <img src="img/admin_icon.jpg" alt="img/admin_icon.jpg" id="admin-login-card-photo" />
                        <label className="admin-login-card-header">Log in to access your admin panel</label>

                        <div className="admin-input-container">
                            <PersonIcon className="admin-login-page-icons" />
                            <input type="text" id="admin-user-input-fields" placeholder="User ID" />
                        </div>

                        <div className="admin-input-container">
                            <LockIcon className="admin-login-page-icons" />
                            <input type="password" id="admin-user-input-fields" placeholder="Password" />
                        </div>
                        <input type="button" id="admin-signup-submit-button" value="Login" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;