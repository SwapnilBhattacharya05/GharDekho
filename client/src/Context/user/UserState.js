import { useState } from "react";
import UserContext from "./UserContext.js";

const UserState = (props) => {
    const [userData, setUserData] = useState({ id: "", username: "", email: "", phone: "", photo: "" });

    const setUser = async () => {
        const response = await fetch("http://localhost:8000/api/user/getuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });

        const json = await response.json();
        setUserData({ id: json._id, username: json.username, email: json.email, phone: json.phone, photo: json.photo });
    }

    return (
        <UserContext.Provider value={{ setUser, userData, setUserData }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;