import React, { useEffect, useState } from 'react'
import './PropertyDescription.css'
import Menu from '../Menu/Menu';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ElevatorIcon from '@mui/icons-material/Elevator';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import HomeIcon from '@mui/icons-material/Home';

// import BuyCategories from '../../Data/BuyingPageCategories';
import Footer from '../Footer/Footer';

const PropertyDescription = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     setData(BuyCategories);
    // }, []);


    return (
        <>
            <div>
                <Menu />

                <div className='container'>

                    {/* //?Property Header / Name */}
                    <h3 className='property-description-header'>
                        Tiru Elysia
                    </h3>

                    {/* //?Property sub heading / location */}
                    <h6 className='property-description-sub-header'>
                        Mahatma Gandhi Rd, Purbasan, Thakurpukur
                    </h6>

                    {/* //?Property Images for description page */}
                    <div className='property-description-album d-flex'>
                        <div className='property-description-album-left'>
                            <img src='img/elysia.jpg'
                                alt='elysia.jpg'
                                height="100%"
                                width="100%"
                                id='pic-catalogue-meain'
                            />
                        </div>
                        <div className='property-description-album-right'>
                            <img src='img/tiru_elysia_room.jpg'
                                alt='tiru_elysia_room.jpg'
                                id='pic-catalogue'
                            />
                            <img src='img/tiru_elysia_room2.jpg'
                                alt='tiru_elysia_room2.jpg'
                                id='pic-catalogue'
                            />
                        </div>
                    </div>

                    {/* //!Complete wrapper for the property description part */}
                    <div className='complete-property-description-wrapper d-flex'>

                        {/* //*Wrapper for the left side of the description part */}
                        <div className='complete-property-description-wrapper-left'>

                            {/* //?Description of the home: - Beds, Bathrooms, etc  */}
                            <div className='icons-and-text-wrapper'>
                                <div className='icon-description-pair'>
                                    <div className='icon-text-container'>
                                        <div className='icons-blacktext-description'>Bedrooms:
                                            <span className='icons-description-blacktext-status'>
                                                3
                                            </span>
                                        </div>
                                        <BedIcon id='icons-in-description' />
                                    </div>
                                    <div className='icon-text-container'>
                                        <div className='icons-blacktext-description'>Bathroom:
                                            <span className='icons-description-blacktext-status'>
                                                2
                                            </span>
                                        </div>
                                        <BathtubIcon id='icons-in-description' />
                                    </div>
                                    <div className='icon-text-container'>
                                        <div className='icons-blacktext-description'>Power Backup:
                                            <span className='icons-description-blacktext-status'>
                                                yes
                                            </span>
                                        </div>
                                        <LightbulbIcon id='icons-in-description' />
                                    </div>
                                    <div className='icon-text-container'>
                                        <div className='icons-blacktext-description'>Lift:
                                            <span className='icons-description-blacktext-status'>
                                                2
                                            </span>
                                        </div>
                                        <ElevatorIcon id='icons-in-description' />
                                    </div>
                                </div>
                            </div>
                            <div className='about-text-description-page-wrapper'>
                                <h3 className='about-text-description-page-header'>
                                    About This Home
                                </h3>
                                <div className='about-text-description-blacktexts'>
                                    The Tiru Elysia is a luxurious residential project that is built with two towers,
                                    Aria and Luma, which stands tall and beautiful. Offering a perfect balance of natural air and sunlight
                                    to all the residents, the Tiru Elysia in Thakur Pukur, Kolkata features modern, spacious and well-ventilated
                                    residential flats. If you live here, you will get to enjoy the beautiful view around as all the flats in Tiru
                                    Elysia are open from 3 sides. Designed to offer affordable housing in Thakur Pukur, Kolkata, these 2BHK and
                                    3BHK residential apartments are available for sale at prices starting from Rs. 48.2 lac. There are 2 towers
                                    and 48 residential flats in the society.
                                </div>
                            </div>

                            <div className='listed-property-owner-card d-flex'>
                                <div className='listed-property-owner-card-left'>
                                    <h6 className='listed-property-owner-header'>
                                        Listed By Property Owner
                                    </h6>
                                    <div className='owner-image-and-name-wrapper d-flex'>
                                        <img
                                            src='img/shreyan_banerjee.jpg'
                                            id='property-owner-image-description'
                                            alt='owner was here'
                                        />
                                        <div className='owner-details-property-description'>
                                            <h6 className='owner-name-property-description'>
                                                Shreyan Banerjee
                                            </h6>
                                            <span className='owner-profession-description'>
                                                Jaro Education Sales Head
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='listed-property-owner-card-right'>
                                    <div className='listed-property-owner-email-main'>
                                        Email: -
                                    </div>
                                    <div className='listed-property-owner-email-address'>
                                        shreyaanbanerjee@gmail.com
                                    </div>
                                    <div className='listed-property-owner-phone-main'>
                                        Phone: -
                                    </div>
                                    <div className='listed-property-owner-call-number'>
                                        93302037451
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* //*Wrapper for the right side of the description part */}
                        <div className='complete-property-description-wrapper-right'>
                            <form className='contact-property-agent-form'>
                                <h4 className='contact-property-agent-form-header'>
                                    Contact Owner
                                </h4>
                                <div className='contact-property-agent-form-sub-header'>
                                    Enter the Details below...
                                </div>

                                <input type='text'
                                    placeholder='First Name'
                                    id='tenant-property-details'
                                />

                                <input type='text'
                                    placeholder='Last Name'
                                    id='tenant-property-details'
                                />

                                <input type='number'
                                    placeholder='123-456-7891'
                                    id='tenant-property-details'
                                />

                                <input type='email'
                                    placeholder='demo@gmail.com'
                                    id='tenant-property-details'
                                />
                                <input type='submit'
                                    value="Contact Owner"
                                    id='owner-contact-button'
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </>
    )
}

export default PropertyDescription;
