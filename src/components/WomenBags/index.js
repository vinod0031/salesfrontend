import React ,{useState,useEffect}from "react";
import "./index.css";
import axios from "axios";


const WomenBags =()=>{


    const [menbags ,setMenbags]=useState([]);

    useEffect(()=>{
        fetchdata()

    },[])

    const fetchdata= async()=>{

        try{
        const response=await axios.get("https://salesbackend-9m1v.onrender.com/api/womens")
        setMenbags(response.data);
    }   catch (error){
        console.error(error)
    }
    }





    return (<div>
        <h1 style={{color:"#383542" ,fontFamily:"cursive"}}>Women's Bags</h1>
        
        <ul className="container">
            {menbags.map(bag=>(
                <li key={bag._id} className="liststyles">
                    <img src={bag.images} className="bagsize" alt="error-image"/>
                    <p className="mrp">MRP : <span className="price">{bag.mrp}</span></p>
                    <p className="mrp">Discount Price :<span className="dprice">{bag.discount}</span></p>
                </li>
            ))}
        </ul>
    </div>)
}

export default WomenBags;