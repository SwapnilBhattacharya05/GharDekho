import express from "express";
import { body, validationResult } from "express-validator";
import fetchUser from "../middleware/fetchUser.js";
import Property from "../schema/propertySchema.js";
import { deleteProperty, getMyProperty, updateProperty, getProperty, getOwnerAvatar, getAllRents, getAllSells } from "../controller/property.controller.js";
const router = express.Router();

//ROUTE 1:POST request to post a property. Login required
router.post("/postproperty", fetchUser, [
    body('ownerEmail', "Enter a valid email").isEmail(),
    body('ownerPhn', 'Enter a valid Phone number').isLength({ min: 10 }),
    body('propertyName', "Property Name Can't Be Empty").exists(),
    body('propertyAge').custom((value)=>{
        if(value<0){
            throw new Error("Property Age Can't be Negative");
        }
        return true;
    }),
    body('imageUrls', "Please upload 3 images").isArray({ min: 3, max: 3 }),
    body('street', "Street field Can't Be Empty").exists(),
    body('city', "City Field Can't Be Empty").exists(),
    body('state', "State Field Can't Be Empty").exists(),
    body('country', "Country Field Can't Be Empty").exists(),
    body('pincode', "Pincode should be of 6 digits").isLength({ min: 6, max: 6 }),
    body('price', "Price Field can't be empty").isNumeric(),
    body('description', "Description Field can't be empty").notEmpty(),
    body('bathrooms', "No. of Bathrooms can only be Integer Value").isInt(),
    body('bedrooms', "No. of Bedrooms can only be Integer Value").isInt(),
    body('parking', "Parking Field can only contain Boolean Value").isBoolean(),
    body('furnished', "Furnished Field can only contain Boolean Value").isBoolean(),
    body('advertisementType', "Advertisement Type Can't be Empty").notEmpty(),
    body('availability', "Availability Can't be Blank").notEmpty(),
    body('propertyType', "Property Type Can't be Blank").notEmpty(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    try {
        const property = await Property.create({
            userRef: req.user.id,
            ownerName: req.body.ownerName,
            ownerEmail: req.body.ownerEmail,
            ownerPhn: req.body.ownerPhn,
            propertyName: req.body.propertyName,
            propertyAge: req.body.propertyAge,
            imageUrls: req.body.imageUrls,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            pincode: req.body.pincode,
            price: req.body.price,
            description: req.body.description,
            bathrooms: req.body.bathrooms,
            bedrooms: req.body.bedrooms,
            parking: req.body.parking,
            furnished: req.body.furnished,
            advertisementType: req.body.advertisementType,
            availability: req.body.availability,
            propertyType: req.body.propertyType
        });
        return res.status(200).json({ success: true, property, msg: "Property posted successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});

//ROUTE 2:GET request to get posted properties of a user. Login required
router.get("/getmyproperty/:id", fetchUser, getMyProperty);

//ROUTE 3:GET request to get posted properties. Login Not required
router.get("/getproperty/:id", getProperty);

//ROUTE 4:GET request to get owner avatar of an existing property. Login Not required
router.get("/getowneravatar/:id", getOwnerAvatar);

//ROUTE 5:DELETE request to delete an existing property. Login required
router.delete("/deleteproperty/:id", fetchUser, deleteProperty);

//ROUTE 5:PUT request to update an existing property. Login required
router.put("/updateproperty/:id", fetchUser, updateProperty);

//ROUTE 6:GET request to get all Rent properties. Login Not required
router.get("/getallrents", getAllRents);

//ROUTE 6:GET request to get all Rent properties. Login Not required
router.get("/getallsells", getAllSells);


export default router;