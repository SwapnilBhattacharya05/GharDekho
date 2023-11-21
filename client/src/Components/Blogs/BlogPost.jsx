import React, { useState, useEffect } from 'react';
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import "./BlogPost.css";
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BlogPost() {
    const [blogData, setBlogData] = useState({});
    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchBlogData = async () => {
            const resposne = await fetch(`http://localhost:8000/api/blog/getblog/${params.blogid}`, {
                method: "Get",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await resposne.json();
            console.log(json.blog);
            setBlogData(json.blog)
        }
        fetchBlogData();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <>
                <Menu />

                <div className="container blog-post-container">
                    <h3 className='blogs-description-header text-center pt-4'>
                        <b>{blogData.title || <Skeleton />}</b>
                    </h3>
                    <div className="blog-photo-wrapper pt-4">
                        <img className='blogs-hero-photo' style={{ margin: "auto", display: "block" }} src={blogData.image || "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"} alt={"img"} />
                    </div>
                    <hr />
                    <p>BY {blogData.author || <Skeleton />} | {blogData.createdAt && blogData.createdAt.slice(0, 10)}</p>
                    <hr />
                    <div className="blog-description-text d-flex justify-content-center align-items-center my-3">
                        <p>{blogData.content || <Skeleton count={100} />}</p>
                    </div>
                    <hr />
                    <ul className='d-flex align-items-center'>
                        <li style={{ listStyle: "none" }} className='mx-2'>
                            <p>Share:</p>
                        </li>
                        <li style={{ listStyle: "none" }} className='mx-2'>
                            <p>
                                <Link className="social-media-icons" to={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&t=TITLE_HERE`}
                                    target="_blank">
                                    <i className="fa-brands fa-square-facebook"></i>
                                </Link>
                            </p>
                        </li>
                        <li style={{ listStyle: "none" }} className='mx-2'>
                            <p>
                                <Link className="social-media-icons" to={`https://www.instagram.com/?url=${window.location.href}`}
                                    target="_blank">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </p>
                        </li>
                        <li style={{ listStyle: "none" }} className='mx-2'>
                            <p>
                                <Link className="social-media-icons" to={`https://www.twitter.com/intent/tweet?url=${window.location.href}&via=GharDekho&text=BestRealEstateBlog`} target="_blank">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </Link>
                            </p>
                        </li>
                    </ul>
                    <hr className='pb-4' />
                </div>
            </>
            <Footer />
        </>
    );
}
export default BlogPost;