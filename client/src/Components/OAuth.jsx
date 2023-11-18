import React, { useContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Flip, toast } from 'react-toastify';
import UserContext from '../Context/user/UserContext';

const OAuth = () => {
    const userContext = useContext(UserContext);
    const { setUser } = userContext;

    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            console.log(result);

            const resonse = await fetch("http://localhost:8000/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: result.user.displayName, email: result.user.email, photo: result.user.photoURL })
            })

            const json = await resonse.json();
            console.log(json);
            if (json.success) {
                localStorage.setItem("token", json.authToken);
                await setUser();
                toast.success(json.msg, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setTimeout(() => {
                    navigate("/");
                }, 3700);
            }else{
                toast.error("Something Went Wrong, Please Try Again Later!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.log("Could not sign in with google", error);
        }
    }

    return (
        <button onClick={handleGoogleClick} type='button' className='btn btn-outline-purple g-btn'><i className="fa-brands fa-google"></i> {"\u00A0"} Continue with Google</button>
    )
}

export default OAuth;