import axios from "axios";

const URL = "https://localhost:8000";

//api for property-owners
export const setOwner = async () => {
    try {
        return await axios.post(`${URL}setowner`);
    } catch (error) {
        console.log("Error while calling setOwner API");
    }
}
export const getOwner = async () => {
    try {
        return await axios.get(`${URL}allowners`);
    } catch (error) {
        console.log("Error while fetching all owners data");
    }
}
export const getOwnerDetails = async () => {
    try {
        return await axios.get(`${URL}getownerdetails`);
    } catch (error) {
        console.log("Error while fetching individual owner's details");
    }
}

//api for property-seekers
export const setSeeker = async () => {
    try {
        return await axios.post(`${URL}setseeker`);
    } catch (error) {
        console.log("Error while calling setSeeker API");
    }
}
export const getSeeker = async () => {
    try {
        return await axios.get(`${URL}allseekers`);
    } catch (error) {
        console.log("Error while fetching all seekers data");
    }
}
export const getSeekerDetails = async () => {
    try {
        return await axios.get(`${URL}getseekerdetails`);
    } catch (error) {
        console.log("Error while fetching individual seeker's details");
    }
}

//api for buy property
export const setBuyProperty = async () => {
    try {
        return await axios.post(`${URL}setbuyproperty`);
    } catch (error) {
        console.log("Error while calling setBuyProperty API");
    }
}
export const getBuyProperty = async () => {
    try {
        return await axios.get(`${URL}allbuyproperties`);
    } catch (error) {
        console.log("Error while fetching all buy properties");
    }
}
export const getBuyPropertyDetails = async () => {
    try {
        return await axios.get(`${URL}getbuypropertydetails`);
    } catch (error) {
        console.log("Error while fetching individual buy property's detials");
    }
}

//api for rent property
export const setRentProperty = async () => {
    try {
        return await axios.post(`${URL}setrentproperty`);
    } catch (error) {
        console.log("Error while calling setRentProperty API");
    }
}
export const getRentProperty = async () => {
    try {
        return await axios.get(`${URL}allrentproperties`);
    } catch (error) {
        console.log("Error while fetching all rent properties");
    }
}
export const getRentPropertyDetails = async () => {
    try {
        return await axios.get(`${URL}getrentpropertydetails`);
    } catch (error) {
        console.log("Error while fetching individual rent property's detials");
    }
}

//api for support
export const setSupport = async () => {
    try {
        return await axios.post(`${URL}setsupport`);
    } catch (error) {
        console.log("Error while calling setSupport API");
    }
}
export const getSupport = async () => {
    try {
        return await axios.get(`${URL}getsupport`);
    } catch (error) {
        console.log("Error while fetching all supports");
    }
}

//api for property enquiry
export const setPropertyEnquiry = async () => {
    try {
        return await axios.post(`${URL}setpropertyenquiry`);
    } catch (error) {
        console.log("Error while calling setPropertyEnquiry API");
    }
}
export const getPropertyEnquiry = async () => {
    try {
        return await axios.get(`${URL}getpropertyenquiry`);
    } catch (error) {
        console.log("Error while fetching all property enquiries");
    }
}

const user = [
    {
        name: "a",
        phn: 95445544,
        email: "demo@gmail.com",
        buy: [
            {

            },
            {

            }
        ],
        sell: [
            {
                name: "",
                price: "x",
                interested: [
                    {

                    },
                    {

                    }
                ]
            },
            {

            }
        ],
        rent: [
            {
                name: "",
                price: "x",
                interested: [
                    {

                    },
                    {

                    }
                ]
            },
            {

            }
        ],
    }
]