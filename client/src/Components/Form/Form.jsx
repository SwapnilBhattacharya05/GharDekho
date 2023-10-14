import React, { useState } from "react";
import './Form.css';
import { NavLink } from "react-router-dom";
import { useRef } from "react";



const Forms = () =>{

    const[user, setUser] = useState({
        name:'',
        email:'',
        phone:'',
        image:'',
        address:'',
        price:'',
        area:'',
        bhk:'',
        description:'',
        status:'',
        photo:'',
        target:'',
    })

    const fileData = (e) =>{
        setUser({...user, image: e.target.files[0]});
    }

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const useName = useRef(null);
    const useFather = useRef(null);

    const submitForm = async (e) =>{
        e.preventDefault();
        
        const {name,email,phone,image,address,price,area,bhk,description,status,photo,target} = user

        if(!name){
            alert("Enter Your Name");
        }else if(!email){
            alert("Enter Your Email");
        }else if(!phone){
            alert("Enter Your Phone Number");
        }else if(!image){
            alert("Upload Identification Proof");
        }else if(!address){
            alert("Enter The Address Of The Property");
        }else if(!price){
            alert("Enter The Price Of The Property");
        }else if(!area){
            alert("Enter The Area Of The Property");
        }else if(!bhk){
            alert("Enter The Number of Bedrooms In The Property");
        }else if(!description){
            alert("Enter The Description Of The Property");
        }else if(!status){
            alert("Enter The Status Of The Property");
        }else if(!photo){
            alert("Upload Image Of The Property");
        }else if(!target){
            alert("Enter Your Target");
        }else{

            const formData = new FormData();

            formData.append('image', user.image, user.image.name)
            formData.append('name', user.name)
            formData.append('email', user.email)
            formData.append('phone', user.phone)
            formData.append('address', user.address)
            formData.append('price', user.price)
            formData.append('area', user.area)
            formData.append('bhk', user.bhk)
            formData.append('description', user.description)
            formData.append('status', user.status)
            formData.append('photo', user.photo)
            formData.append('target', user.target)
            }
    }

    return(
        <>
            <div className="container-fluid mb-5">
                <form>
                    <h3 align="center" className="text-center pt-3">Add Your New Property</h3><hr></hr>

                    <div className="container form pb-4">
                        <h4 className="pt-3">Personal Details</h4><hr></hr>
                            <div className="row">
                                <div className="col-4 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name <span style={{color:'red'}}>*</span></label>
                                        <input type="text" name="name" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                        <span id="name"><i style={{color:'red'}}>Enter Your Name *</i></span>
                                    </div>
                                </div>
                                <div className="col-4 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email <span style={{color:'red'}}>*</span></label>
                                        <input type="email" name="email" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Contact Number <span style={{color:'red'}}>*</span></label>
                                        <input type="text" name="phone" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Contact Number" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Identification Proof <span style={{color:'red'}}>*</span></label>
                                        <input type="file" name="image" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Upload your file" />
                                    </div>
                                </div>

                            </div>

                            <div className="container m-0 p-0">
                                <h4 className="pt-3">Property Details</h4><hr></hr>
                            </div>

                            <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Address <span style={{color:'red'}}>*</span></label>
                                        <input type="text" name="address" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Property Address" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Price <span style={{color:'red'}}>*</span></label>
                                        <input type="text" name="price" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Property Price" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Area <span style={{color:'red'}}>*</span></label>
                                        <input type="text" name="area" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Property Area" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Number of Bedrooms <span style={{color:'red'}}>*</span></label>
                                        <input type="number" name="bhk" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the Number of Bedrooms" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Description <span style={{color:'red'}}>*</span></label>
                                        <input type="text" name="description" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Property Description" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Photos <span style={{color:'red'}}>*</span></label>
                                        <input type="file" name="photo" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Upload Photos of the Property" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Status <span style={{color:'red'}}>*</span></label>
                                        <input type="text" name="status" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Property Status" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                        <label for="exampleFormControlSelect1">Target <span style={{color:'red'}}>*</span></label>
                                        <select class="form-control" name="target" onChange={onValueChange} id="exampleFormControlSelect1">
                                            <option disabled selected value={''}>--Select Target--</option>
                                            <option value={'rent'}>On Rent</option>
                                            <option value={'sale'}>On Sale</option>
                                        </select>       
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="submit-btn">
                                        <input type="reset" value={'Reset'} className="mr-2"></input>
                                        <NavLink to={''} className={'btn-submit'} onClick={submitForm}>Submit</NavLink>
                                    </div>
                                </div>
                            </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Forms;