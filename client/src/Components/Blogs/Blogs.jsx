
import React, { useEffect, useState } from 'react'
import "./Blogs.css"
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom"

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlogs = async () => {
      const resposne = await fetch("http://localhost:8000/api/blog/getallblogs", {
        method: "Get",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await resposne.json();
      setTimeout(() => {
        setLoading(false);
      }, 2700);

      setBlogs(json.blogs)
    }
    fetchBlogs();

  }, []);

  return (
    <>
      <Menu />
      <div className="mt-5">
        <div className="blogs-page-header-hero">
          <img src="https://www.techelium.in/wp-content/uploads/2015/10/blog-banner.jpg" alt='' height={"100%"} width={"100%"} style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }} />
        </div>

        <div className="container blogs">
          <h3 className='my-3'><b>Explore Blogs to get your dream house </b></h3>
          <div className="row" >
            {
              loading === true ? <img src='https://cdn.dribbble.com/users/330915/screenshots/2311781/media/2e95edec9c2a16605982c96d1044023b.gif' alt='spinner' style={{ margin: "80px auto", display: "block" }} /> :
                blogs && blogs.map((blog) => {
                  // eslint-disable-next-line
                  const { _id, title, content, author, image } = blog;
                  return (

                    <div key={_id} className="col-lg-4 col-md-6 col-sm-12 my-3">
                      <div className="blog-card">
                        <img src={image} className='card-img-top' alt='blog' style={{ borderRadius: "17px 17px 0 0" }} />
                        <div className="card-body" style={{ height: "150px" }}>
                          <h5>{title}</h5>
                          <p className="cardtitle">{content.slice(0, 90)}...</p>
                        </div>
                        <Link to={`/blogpost/${blog._id}`} className='btn btn-purple' style={{ margin: "auto", display: "block", borderRadius: "0 0 16px 16px" }}>Read More</Link>
                      </div>
                    </div>
                  )
                })
            }
          </div>
        </div>
      </div>





      <Footer />
    </>

  )
}

