import React, { useEffect } from 'react'
import Menu from "../Menu/Menu";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const style = {
        display: "block",
        margin: "auto",
        marginTop: "10vh",
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    
    return (
        <div>
            <Menu />
            <div className="container">
                <img style={style}
                    src='https://png.pngtree.com/png-clipart/20200401/original/pngtree-page-not-found-error-404-concept-with-people-trying-to-fix-png-image_5333349.jpg'
                    alt='404 img'
                    height={"40%"}
                    width={"40%"} />
                <Link to={"/"}
                    style={{ textDecoration: "none"}}>
                    <button style={{ display: "block",margin:"auto" }}
                        className='btn btn-purple'>
                        Back To Home
                    </button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}
export default ErrorPage;