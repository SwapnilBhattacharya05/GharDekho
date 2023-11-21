import React, { useState, useEffect, useContext } from "react";
import './Form.css';
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../Context/user/UserContext";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";
import AttachEmailTwoToneIcon from '@mui/icons-material/AttachEmailTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import AddRoadTwoToneIcon from '@mui/icons-material/AddRoadTwoTone';
import ApartmentTwoToneIcon from '@mui/icons-material/ApartmentTwoTone';
import LocationCityTwoToneIcon from '@mui/icons-material/LocationCityTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import BedTwoToneIcon from '@mui/icons-material/BedTwoTone';
import BathtubTwoToneIcon from '@mui/icons-material/BathtubTwoTone';
import DirectionsCarFilledTwoToneIcon from '@mui/icons-material/DirectionsCarFilledTwoTone';
import WeekendTwoToneIcon from '@mui/icons-material/WeekendTwoTone';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';


const Form = () => {
    const userContext = useContext(UserContext);
    const { userData } = userContext;

    const [files, setFiles] = useState([]);
    const [imageUploadError, setImageUploadError] = useState(false);
    const [imageUploading, setImageUploading] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        ownerName: '',
        ownerEmail: '',
        ownerPhn: '',
        propertyName: "",
        propertyAge: "",
        imageUrls: [],
        street: "",
        city: "",
        state: '',
        country: "",
        pincode: "",
        price: '',
        description: '',
        bathrooms: "",
        bedrooms: "",
        parking: "",
        furnished: "",
        advertisementType: "sale",
        availability: "",
        propertyType: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        setFormData({ ownerName: userData.username, ownerEmail: userData.email, ownerPhn: userData.phone });
    }, [userData]);

    useEffect(() => {
        console.log(formData);
    }, [formData, imageUploadError])

    const onValueChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    }

    const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress);
                }, (error) => {
                    console.log(error);
                    reject(error);
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    })
                }
            )
        })
    }

    const handleDeleteImage = (index) => {
        setFormData({ ...formData, imageUrls: formData.imageUrls.filter((_, i) => i !== index) });
    }

    const handleImageSubmit = async (e) => {
        e.preventDefault();

        if (files && files.length > 0 && files.length + (formData.imageUrls || []).length < 7) {
            setImageUploading(true);
            setImageUploadError(false);

            const allPromises = [];
            for (let i = 0; i < files.length; i++) {
                allPromises.push(storeImage(files[i]));
            }

            Promise.all(allPromises).then((urls) => {
                setFormData((prevData) => ({ ...prevData, imageUrls: (prevData.imageUrls || []).concat(urls) }));
                setImageUploadError(false);
                setImageUploading(false);
            }).catch((error) => {
                setImageUploadError("Failed to upload the images, (max 2MB each allowed)");
                setImageUploading(false);
            });
        } else {
            setImageUploadError("You can only upload 3 images");
            setImageUploading(false);
        }
    }

    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch("http://localhost:8000/api/property/postproperty", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify(formData)
            });
            const json = await response.json();
            setLoading(false);
            if (json.success) {
                toast.success(json.msg, {
                    position: "top-center",
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
                    navigate(`/propertydescription/${json.property._id}`);
                }, 3700);
            } else {
                toast.error(json.error[0].msg, {
                    position: "top-center",
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
            console.log("Error While property posting", error.message);
        }
    }


    return (
        <>
            <Menu />

            <div className="container-fluid"
                style={{ margin: "70px 0px 0px 0px" }}
                id="posting-property-all-wrapper"
            >
                <form method="post"
                    onSubmit={submitForm}
                >
                    <h3 align="center"
                        className="text-center pt-3">Tell Us About Your Property</h3><hr />

                    <div className="container form pb-4">
                        <h4 className="pt-3">Personal Details</h4><hr></hr>
                        <div className="row">
                            <div className="col-6 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="ownerName"><AccountCircleTwoToneIcon /> Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text"
                                        required name="ownerName"
                                        value={formData.ownerName}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="ownerName"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                            </div>
                            <div className="col-6 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="ownerEmail"><AttachEmailTwoToneIcon /> Email <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email"
                                        required name="ownerEmail"
                                        value={formData.ownerEmail}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="ownerEmail"
                                        placeholder="Enter Your Email"
                                    />
                                </div>
                            </div>
                            <div className="col-6 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="ownerPhn"><LocalPhoneTwoToneIcon /> Contact Number <span style={{ color: 'red' }}>*</span></label>
                                    <input type="number"
                                        required name="ownerPhn"
                                        value={formData.ownerPhn}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="ownerPhn"
                                        placeholder="Enter Your Contact Number"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="container m-0 p-0">
                            <h4 className="pt-3">Property Details</h4><hr />
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="advertisementType "><HomeTwoToneIcon /> Advertisement Type <span style={{ color: 'red' }}>*</span></label>
                                    <select required className="form-control"
                                        name="advertisementType"
                                        onChange={onValueChange}
                                        id="advertisementType"
                                    >
                                        <option disabled selected value={''}>--Select Advertisement Type--</option>
                                        <option value={'rent'}>On Rent</option>
                                        <option value={'sale'}>On Sale</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="propertyName"><DriveFileRenameOutlineTwoToneIcon /> Property Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text"
                                        required name="propertyName"
                                        value={formData.propertyName}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="propertyName"
                                        placeholder="Enter Property Name"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="street"><AddRoadTwoToneIcon /> Street Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text"
                                        required name="street" value={formData.street}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="street"
                                        placeholder="Enter Street Name"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="city"><ApartmentTwoToneIcon />City <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text"
                                        required name="city"
                                        value={formData.city}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="city"
                                        placeholder="Enter City Name"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="state">State <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text"
                                        required name="state"
                                        value={formData.state}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="state"
                                        placeholder="Enter State Name"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="country"><PublicTwoToneIcon />Country <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text"
                                        required name="country"
                                        value={formData.country}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="country"
                                        placeholder="Enter Country Name"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="pincode">Pincode <span style={{ color: 'red' }}>*</span></label>
                                    <input type="number"
                                        required value={formData.pincode}
                                        name="pincode"
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="pincode"
                                        placeholder="Enter Pincode"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="price">{formData.advertisementType === "sale" ? "Price(₹)" : "Rent/month(₹)"}<span style={{ color: 'red' }}>*</span></label>
                                    <input type="number"
                                        required name="price"
                                        value={formData.price}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="price"
                                        placeholder={`Enter Property `.concat(formData.advertisementType === "sale" ? "Price" : "Rent Per Month")}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="imageUrls"><AddAPhotoTwoToneIcon />Property Photos <span id="form-property-roads-uploading">(upload 3 images and 2MB each)</span><span style={{ color: 'red' }}>*</span></label>
                                    <div className="d-flex">
                                        <input onChange={(e) => setFiles(e.target.files)}
                                            accept="image/*"
                                            multiple type="file"
                                            name="imageUrls[]"
                                            className="form-control"
                                            id="imageUrls"
                                        />
                                        <button onClick={handleImageSubmit}
                                            type="button"
                                            className="btn btn-outline-success mx-3"
                                            disabled={imageUploading}>{imageUploading ? "Uploading..." : "Upload"}
                                        </button>
                                    </div>
                                    <p className="text-danger">{imageUploadError && imageUploadError}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                (formData.imageUrls || []).length > 0 &&
                                formData.imageUrls.map((url, index) => {
                                    return (
                                        <div key={url} className="col-12 col-md-4 form-filed">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <img src={url}
                                                    alt="Property img"
                                                    style={{ width: "200px", borderRadius: "10px" }}
                                                />
                                                <button type="button"
                                                    onClick={() => handleDeleteImage(index)}
                                                    className="btn btn-danger">Delete
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="col-12 form-filed">
                            <div className="form-group">
                                <label htmlFor="description">Description <span style={{ color: 'red' }}>*</span></label>
                                <textarea
                                    required name="description"
                                    rows={5}
                                    cols={5}
                                    onChange={onValueChange}
                                    value={formData.description}
                                    className="form-control"
                                    id="description"
                                    placeholder="Enter Property Description"
                                />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="bedrooms"><BedTwoToneIcon />Number of Bedrooms <span style={{ color: 'red' }}>*</span></label><br />
                                    <input
                                        required type="number"
                                        name="bedrooms"
                                        onChange={onValueChange}
                                        value={formData.bedrooms}
                                        className="form-control"
                                        id="bedrooms"
                                        placeholder="Enter the number of bedrooms"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="bathrooms"><BathtubTwoToneIcon />Number of Bathrooms <span style={{ color: 'red' }}>*</span></label><br />
                                    <input
                                        required type="number"
                                        name="bathrooms"
                                        value={formData.bathrooms}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="bathrooms"
                                        placeholder="Enter the number of bathrooms"
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="parking"><DirectionsCarFilledTwoToneIcon />Parking <span style={{ color: 'red' }}>*</span></label><br />
                                    <select required className="form-control"
                                        name="parking"
                                        onChange={onValueChange}
                                        id="parking"
                                    >
                                        <option disabled selected value={''}>--Select Parking--</option>
                                        <option value={true}>Available</option>
                                        <option value={false}>Not Available</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="propertyAge">Age of the Property <span style={{ color: 'red' }}>*</span></label><br />
                                    <input
                                        required type="number"
                                        name="propertyAge"
                                        value={formData.propertyAge}
                                        onChange={onValueChange}
                                        className="form-control"
                                        id="propertyAge"
                                        placeholder="Enter the age of the property"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="furnished"><WeekendTwoToneIcon /> Furnished <span style={{ color: 'red' }}>*</span></label>
                                    <select
                                        required className="form-control"
                                        name="furnished"
                                        onChange={onValueChange}
                                        id="furnished"
                                    >
                                        <option disabled selected value={''}>--Select Furnishing--</option>
                                        <option value={true}>Furnished</option>
                                        <option value={false}>Not Furnished</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="availability"><CheckCircleOutlineTwoToneIcon /> Availability <span style={{ color: 'red' }}>*</span></label>
                                    <select required className="form-control"
                                        name="availability"
                                        onChange={onValueChange}
                                        id="availability"
                                    >
                                        <option disabled selected value={''}>--Select Availability--</option>
                                        <option value={'ready'}>Ready To Move</option>
                                        <option value={'notready'}>Under Construction</option>
                                    </select>
                                </div>
                            </div>

                            {/* Add Another field : PropertyType like------- flat,personal property,bungalow etc. */}
                            <div className="col-12 col-md-4 form-filed">
                                <div className="form-group">
                                    <label htmlFor="propertyType"><LocationCityTwoToneIcon />Property Type <span style={{ color: 'red' }}>*</span></label>
                                    <select
                                        required className="form-control"
                                        name="propertyType"
                                        onChange={onValueChange}
                                        id="propertyType"
                                    >
                                        <option disabled selected value={''}>--Select Property Type--</option>
                                        <option value={'flat'}>Flat</option>
                                        <option value={'personal'}>Personal property</option>
                                        <option value={'bungalow'}>Bungalow</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-12">
                                <div className="d-flex submit-posting-property-buy-sell-wrapper">
                                    <button type="submit"
                                        id="submit-posting-property-buy-sell"
                                        className="btn btn-purple"
                                        disabled={loading || imageUploading}>{loading ? "Loading..." : "Submit"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
            <Footer />
        </>
    )
}
export default Form;