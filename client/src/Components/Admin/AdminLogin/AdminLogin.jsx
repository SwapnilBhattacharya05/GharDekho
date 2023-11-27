import React, { useState } from "react";
import "./AdminLogin.css";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { ToastContainer, toast } from "react-toastify";

// !Import required for the toast to work
import "react-toastify/dist/ReactToastify.css";




const AdminLogin = () => {
    const [admin, setAdmin] = useState({
        adminUserName: "",
        adminPassword: "",
    });

    const onValueChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
        console.log(admin);
    }

    const authentication = (e) => {
        e.preventDefault();
        if (admin.adminUserName === process.env.REACT_APP_ADMIN_USERNAME && admin.adminPassword === process.env.REACT_APP_ADMIN_PASSWORD) {
            sessionStorage.setItem("isAdmin", "true");
            toast.success("Login Successful", {
                position: "top-center",
                autoClose: 900,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                window.location.href="/adminhome";
            }, 1500);

        } else {
            toast.error("Enter valid username and password", {
                position: "top-center",
                autoClose: 900,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                setAdmin({ adminUserName: "", adminPassword: "" });
            }, 2000);
        }
    }


    return (
        <>
            <div className="admin-login-background-color">
                <div className="admin-login-background-image">
                    <ToastContainer />

                    <form className="admin-login-card">

                        <img src="img/admin_icon.jpg"
                            alt="img/admin_icon.jpg"
                            id="admin-login-card-photo"
                        />

                        <label className="admin-login-card-header">
                            Log in to access your admin panel
                        </label>

                        <div className="admin-input-container">
                            <PersonIcon className="admin-login-page-icons" />
                            <input
                                type="text"
                                id="admin-user-input-fields"
                                placeholder="User ID"
                                name="adminUserName"
                                onChange={onValueChange}
                            />
                        </div>


                        <div className="admin-input-container">
                            <LockIcon className="admin-login-page-icons" />
                            <input
                                type="password"
                                id="admin-user-input-fields"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                placeholder="Password"
                                name="adminPassword"
                                onChange={onValueChange}

                            />
                        </div>
                        <input
                            onClick={authentication}
                            type="submit"
                            id="admin-signup-submit-button"
                            value="Login" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;