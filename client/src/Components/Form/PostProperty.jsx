import React, { useEffect } from 'react'
import "./PostProperty.css"
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const PostProperty = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Menu />
            <div className='container'>


                <div className='rent-sell-property-main-body d-flex'>
                    <div className='rent-sell-property-left-side'>
                        <h3 className='rent-sell-property-left-side-text'>
                            Sell or Rent Your Property Faster with
                            <span className='text-ghar-post-property'>Ghar</span>
                            <span className='text-dekho-post-property'>Dekho</span>.com
                        </h3>

                        <ul className='rent-sell-property-lists-main'>
                            <li className='rent-sell-property-lists-options'>
                                Advertise for free
                            </li>
                            <li className='rent-sell-property-lists-options'>
                                Get unlimited enquiries
                            </li>
                            <li className='rent-sell-property-lists-options'>
                                Get shortisted buyers and tenants
                                <span className='options-asterix-color'>*</span>
                            </li>
                            <li className='rent-sell-property-lists-options'>
                                Assistance in co-ordinating site visits
                                <span className='options-asterix-color'>*</span>
                            </li>
                        </ul>
                        <p className='last-footer-left-post-property'>
                            <span className='options-asterix-color'>*</span>
                            Available with Owner Assist plans
                        </p>
                    </div>

                    <div className='rent-sell-property-right-side'>
                        <h4 className='heading-rent-sell-property-right'>
                            Start posting your property, it's free
                        </h4>
                        <p className='rent-sell-property-sub-heading'>
                            Add Basic Details
                        </p>
                        <p className='rent-sell-property-sub-sub-heading'>
                            You're looking to...
                        </p>
                        <form className='rent-sell-property-form'>
                            <div className="btn-group btn-group-toggle"
                                id='rent-sell-option-selector'
                                data-toggle="buttons"
                            >
                                <label className="btn btn-outline-light option-selected-by-user-rent-sell">
                                    <input type="radio"
                                        name="option_selection"
                                        id="option_sell"
                                    /> Sell
                                </label>
                                <label className="btn btn-outline-light option-selected-by-user-rent-sell">
                                    <input type="radio"
                                        name="option_selection"
                                        id="option_rent"
                                    /> Rent/Lease
                                </label>
                                <label className="btn btn-outline-light option-selected-by-user-rent-sell">
                                    <input type="radio"
                                        name="option_selection"
                                        id="option_PG"
                                    /> PG
                                </label>
                            </div>
                            <p className='rent-sell-property-what-is-it-heading'>
                                And it's a...
                            </p>
                            <div className='options-for-rent-sell-is-it-main-body'>
                                <label className='option-for-rent-sell-what-is-it'>
                                    <input type='radio'
                                        name='option_what_is_it'
                                        id='option_residential'
                                    /> Residential
                                </label>

                                <label className='option-for-rent-sell-what-is-it'>
                                    <input type='radio'
                                        name='option_what_is_it'
                                        id='option_commercial'
                                    /> Commercial
                                </label>

                            </div>

                            <p className='rent-sell-property-owner-contact-details-heading'>
                                Your Contact Details for buyer to reach you
                            </p>

                            <input type='number'
                                id='rent-sell-property-owner-number'
                                placeholder='Enter your Number'
                            />

                            <p className='registered-user-text'>
                                Are you a registered user?
                                <Link className='registered-user-login-link'
                                    to='/login'
                                >
                                    Login
                                </Link>
                            </p>
                            <Link to="/listproperty">
                                <input type='submit'
                                    value="Start Now"
                                    className='rent-sell-property-start-button'
                                />
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default PostProperty
