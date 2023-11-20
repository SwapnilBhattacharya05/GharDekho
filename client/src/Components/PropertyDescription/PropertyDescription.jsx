import React, { useContext, useEffect, useState } from 'react'
import './PropertyDescription.css'
import Menu from '../Menu/Menu';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ElevatorIcon from '@mui/icons-material/Elevator';
import Footer from '../Footer/Footer';
import UserContext from '../../Context/user/UserContext';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PropertyDescription = () => {
    const userContext = useContext(UserContext);
    const { userData } = userContext;

    const [contactDetails, setContactDetails] = useState({ name: "", email: "", phn: "" });
    const [propertyData, setPropertData] = useState({});
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        setContactDetails({ name: userData.username, email: userData.email, phn: userData.phone });
    }, [userData]);

    useEffect(() => {

        const fetchPropertyData = async () => {
            try {
                const propertyResponse = await fetch(`http://localhost:8000/api/property/getproperty/${params.propertyid}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const userResponse = await fetch(`http://localhost:8000/api/property/getowneravatar/${params.propertyid}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const json = await propertyResponse.json();
                const userPhoto = await userResponse.json();
                json.property.ownerPhoto = userPhoto.photo;
                setLoading(false);
                setPropertData(json.property);

            } catch (error) {
                console.log("Error While Fetching Property Data", error.message);
            }
        }
        fetchPropertyData();
    }, []);

    useEffect(() => {
        console.log(propertyData);
    }, [propertyData]);

    const handleOnChange = (e) => {
        setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
    }

    return (
        <>

            <div>
                <Menu />
                <div className='container'>
                    {/* //?Property Header / Name */}
                    <h3 h3 className='property-description-header'>
                        {propertyData.propertyName || <Skeleton />}
                    </h3>

                    {/* //?Property sub heading / location */}
                    <h6 className='property-description-sub-header'>
                        {(propertyData.street && propertyData.street.concat(`, ${propertyData.state && propertyData.state.concat(`, ${propertyData.country && propertyData.country}`)}`)) || <Skeleton />}
                    </h6>

                    {/* //?Property Images for description page */}
                    <div className='property-description-album d-flex'>
                        <div className='property-description-album-left'>
                            <img src={(propertyData.imageUrls && propertyData.imageUrls[0]) || "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}
                                alt='elysia.jpg'
                                height="100%"
                                width="100%"
                                id='pic-catalogue-meain'
                                style={{ border: loading ? "none" : "2px solid #7a4bcf" }}
                            />
                        </div>
                        <div className='property-description-album-right'>
                            <img src={(propertyData.imageUrls && propertyData.imageUrls[1]) || "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}
                                alt='tiru_elysia_room.jpg'
                                id='pic-catalogue'
                                style={{ border: loading ? "none" : "2px solid #7a4bcf" }}
                            />
                            <img src={(propertyData.imageUrls && propertyData.imageUrls[2]) || "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}
                                alt='tiru_elysia_room2.jpg'
                                id='pic-catalogue'
                                style={{ border: loading ? "none" : "2px solid #7a4bcf" }}
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
                                                {propertyData.bedrooms || <Skeleton />}
                                            </span>
                                        </div>
                                        <BedIcon id='icons-in-description' />
                                    </div>
                                    <div className='icon-text-container'>
                                        <div className='icons-blacktext-description'>Bathrooms:
                                            <span className='icons-description-blacktext-status'>
                                                {propertyData.bathrooms || <Skeleton />}
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
                                    {propertyData.description}
                                </div>
                            </div>

                            <div className='listed-property-owner-card d-flex'>
                                <div className='listed-property-owner-card-left'>
                                    <h6 className='listed-property-owner-header'>
                                        Listed By Property Owner
                                    </h6>
                                    <div className='owner-image-and-name-wrapper d-flex'>
                                        <img
                                            src={propertyData.ownerPhoto}
                                            id='property-owner-image-description'
                                            alt='owner was here'
                                        />
                                        <div className='owner-details-property-description'>
                                            <h6 className='owner-name-property-description'>
                                                {propertyData.ownerName}
                                            </h6>
                                        </div>
                                    </div>
                                </div>

                                <div className='listed-property-owner-card-right'>
                                    <div className='listed-property-owner-email-main'>
                                        Email: -
                                    </div>
                                    <div className='listed-property-owner-email-address'>
                                        {propertyData.ownerEmail || "email"}
                                    </div>
                                    <div className='listed-property-owner-phone-main'>
                                        Phone: -
                                    </div>
                                    <div className='listed-property-owner-call-number'>
                                        {propertyData.ownerPhn || "phone"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* //*Wrapper for the right side of the description part */}
                        <div className='complete-property-description-wrapper-right'>
                            <form className='contact-property-agent-form' method='post'>
                                <h4 className='contact-property-agent-form-header'>
                                    Contact Owner
                                </h4>
                                <div className='contact-property-agent-form-sub-header'>
                                    Enter the Details below...
                                </div>

                                <input type='text'
                                    placeholder='Name'
                                    name='name'
                                    value={contactDetails.name}
                                    onChange={handleOnChange}
                                    id='name'
                                />

                                <input type='number'
                                    placeholder='123-456-7891'
                                    value={contactDetails.phn}
                                    onChange={handleOnChange}
                                    name='phn'
                                    id='phn'
                                />

                                <input type='email'
                                    placeholder='demo@gmail.com'
                                    onChange={handleOnChange}
                                    value={contactDetails.email}
                                    name='email'
                                    id='email'
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
