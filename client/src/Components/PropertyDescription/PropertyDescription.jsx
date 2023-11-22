import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import ChairIcon from '@mui/icons-material/Chair';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmailIcon from '@mui/icons-material/Email';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HouseIcon from '@mui/icons-material/House';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import PersonIcon from '@mui/icons-material/Person';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';
import React, { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import UserContext from '../../Context/user/UserContext';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import 'react-loading-skeleton/dist/skeleton.css';
import './PropertyDescription.css';

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

                if (userPhoto.success === false) {
                    json.property.ownerPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
                }else{
                    json.property.ownerPhoto = userPhoto.photo;
                }
                setLoading(false);
                setPropertData(json.property);

            } catch (error) {
                console.log("Error While Fetching Property Data", error.message);
            }
        }
        fetchPropertyData();
        // eslint-disable-next-line
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
                        {(propertyData.street && propertyData.street.concat(
                            `, ${propertyData.state && propertyData.state.concat(`, ${propertyData.country && propertyData.country}`)}`))
                            ||
                            <Skeleton />}
                    </h6>

                    {/* //?Property Images for description page */}
                    <div className='property-description-album d-flex'>
                        <div className='property-description-album-left'>
                            <img src={(propertyData.imageUrls && propertyData.imageUrls[0])
                                ||
                                "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}
                                alt='elysia.jpg'
                                height="100%"
                                width="100%"
                                id='pic-catalogue-meain'
                                style={{ border: loading ? "none" : "2px solid #7a4bcf" }}
                            />
                        </div>
                        <div className='property-description-album-right'>
                            <img src={(propertyData.imageUrls && propertyData.imageUrls[1])
                                ||
                                "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}
                                alt='tiru_elysia_room.jpg'
                                id='pic-catalogue'
                                style={{ border: loading ? "none" : "2px solid #7a4bcf" }}
                            />
                            <img src={(propertyData.imageUrls && propertyData.imageUrls[2])
                                ||
                                "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}
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
                                        <div className='icons-blacktext-description'>Type:
                                            <span className='icons-description-blacktext-status'>
                                            </span>
                                        </div>
                                        <span id='icons-in-description'>{(propertyData.propertyType)}</span>
                                    </div>
                                    <div className='icon-text-container'>
                                        <div className='icons-blacktext-description'>Construction:
                                            <span className='icons-description-blacktext-status'>
                                            </span>
                                        </div>
                                        {
                                            (propertyData.availability === 'ready') ?
                                                <CheckCircleOutlineIcon
                                                    id='icons-in-description'
                                                />
                                                :
                                                <EngineeringIcon
                                                    id='icons-in-description-under-construction'
                                                />
                                        }
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

                                <label><PersonIcon /><span> Name</span>
                                    <input type='text'
                                        placeholder='Name'
                                        name='name'
                                        value={contactDetails.name}
                                        onChange={handleOnChange}
                                        id='namepropertyform'
                                    /></label>
                                <label><PhoneEnabledIcon /><span> Phone</span>
                                    <input type='number'
                                        placeholder='123-456-7891'
                                        value={contactDetails.phn}
                                        onChange={handleOnChange}
                                        name='phn'
                                        id='phnpropertyform'
                                    />
                                </label>

                                <label><EmailIcon /><span> Email</span>
                                    <input type='email'
                                        placeholder='demo@gmail.com'
                                        onChange={handleOnChange}
                                        value={contactDetails.email}
                                        name='email'
                                        id='emailpropertyform'
                                    />
                                </label>
                                <label><HouseIcon /><span> Available for</span>
                                    <input type='text'
                                        onChange={handleOnChange}
                                        value={(propertyData.advertisementType)}
                                        name='advertisementType'
                                        id='advertisementType'
                                        readOnly
                                    />
                                </label>

                                <div className="propertyData-of-property-sell-rent-all-wrapper d-flex ml-4">
                                    <div className='propertyData-of-property-sell-rent'>Parking: </div>
                                    <p
                                        onChange={handleOnChange}
                                        name='parking'
                                        id='parkingpropertyData'
                                    >

                                        {
                                            (propertyData.parking) ? <NoCrashIcon
                                                className='availability-icon-contact-owner'
                                                style={{ color: "#9ADE7B" }}
                                            />
                                                :
                                                <TaxiAlertIcon
                                                    className='availability-icon-contact-owner'
                                                    style={{ color: "#BE3144" }}
                                                />
                                        }
                                    </p>
                                    <div className='propertyData-of-property-sell-rent'>Furnished: </div>
                                    <p
                                        onChange={handleOnChange}
                                        name='furnished'
                                        id='furnished'
                                    >

                                        {
                                            (propertyData.furnished) ? <ChairIcon
                                                className='availability-icon-contact-owner'
                                                style={{ color: "#9ADE7B" }}
                                            />
                                                :
                                                <ChairIcon
                                                    className='availability-icon-contact-owner'
                                                    style={{ color: "#BE3144" }}
                                                />
                                        }
                                    </p>
                                </div>

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
