import React,{useState} from 'react'
import Menu from "../Menu//Menu"
import Footer from "../Footer/Footer"
import "./Description.css"
import BuyerBlog from "../../Data/BlogBuyer"


export default function Description() {
    const[data_01,setData] = useState(BuyerBlog);
    return(
        <>
        <div className='buying mt-5'>
            <div className="buying-page-header-hero">
                <img src="img/kitchen-2400367_1280.jpg" height={"300px"} width={"100%"} id="buy-page-header-image" alt="buy_page_header_image"></img>
                <h1 className="buying-page-header-heading-hero">Blog Description</h1>
            </div>
        </div>
        <br />
        <div>
            <img src="img/Family_01.jpg" width={250} class="rounded float-start" alt="..."/>
        </div>
        <div>
            
            <h1 className ="NameOfThePerson">Name</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A modi eos aut sint blanditiis nemo quas voluptatem veniam accusamus nostrum eaque molestiae placeat perspiciatis iure cum totam nisi dignissimos ducimus, iste, necessitatibus vel praesentium.</p>
        
        </div>
        
        
        </>
    )
}