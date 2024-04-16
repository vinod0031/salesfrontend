import React ,{useState,useEffect}from "react";
import "./index.css";
import axios from "axios";


const KidsBags =()=>{


    const [menbags ,setMenbags]=useState([]);

    useEffect(()=>{
        fetchdata()

    },[])

    const fetchdata= async()=>{

        try{
        const response=await axios.get("http://localhost:7000/api/kids", { port: 3000 })
        setMenbags(response.data);
    }   catch (error){
        console.error(error)
    }
    }





    return (<div>
        <h1 style={{color:"#383542" ,fontFamily:"cursive"}}>Kid's Bags</h1>
        
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

export default KidsBags;