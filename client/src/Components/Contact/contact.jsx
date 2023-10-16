import React from "react";
import './contact.css';
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

const Contact = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <Menu />
                <div className='contact-page container d-flex'>
                    <div className='contactpage-leftside'>
                        <div className='contactpage-header'>
                            <h1 >Contact Us</h1>
                            <div className='contactpage-texts mb-5'>
                                <h6>We're open for any suggestion or just to have a chat</h6>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className='contactpage-content'>
                                        <form className='contact-form'>
                                            <label htmlFor="name-contact">Name:</label><br />
                                            <input name='name'
                                                type="text"
                                                id="name-contact"
                                                placeholder="Your Name"
                                            /><br /><br />

                                            <label htmlFor="email-contact">Email:</label><br />
                                            <input name='email'
                                                type="email"
                                                id="email-contact"
                                                placeholder="demo@gmail.com"
                                            /><br /><br />

                                            <label htmlFor="phoneno-contact">Phone No.:</label><br />
                                            <input name='phone'
                                                type="text"
                                                inputMode="number"
                                                id="phoneno-contact"
                                                placeholder="000-111-000"
                                            /><br /><br />

                                            <label htmlFor="message-contact" id="message-text-area">Message:</label><br />
                                            <textarea name='msg'
                                                id="message-contact"
                                                maxLength={350}
                                                style={{ height: '167px', resize: 'none' }}
                                            />
                                            <br /><br />
                                            <button type="submit" id="contact-submit" onClick={backToTop}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactpage-rightside">
                        <img src="img/contactpage.jpg" alt="there is some pic" height={"100%"} width={"100%"} style={{ objectFit: "cover" }} />
                    </div>
                </div>
                <div className="contact-page-map mt-5 mb-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.01617668658!2d88.39828517483606!3d22.503576235497516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271265112e173%3A0x4894f02e6e87fa8!2sKalikapur%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1695796076798!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ width: "100%" }}
                        allowfullscreen=""
                        loading="lazy"
                        title="demo map"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Footer />

        </>
    )
}

export default Contact;