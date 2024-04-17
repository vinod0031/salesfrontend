import React ,{useState,useEffect}from "react";
import "./index.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const WomenBags =()=>{


    const [menbags ,setMenbags]=useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(()=>{
        fetchdata()

    },[])

    const fetchdata= async()=>{

        try{
        const response=await axios.get("https://salesbackend-9m1v.onrender.com/api/womens")
        setSpinner(false);
        setMenbags(response.data);
    }   catch (error){
        console.error(error)
    }
    }





    return (<div>
        <h1 style={{color:"#383542" ,fontFamily:"cursive"}}>Women's Bags</h1>
        
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <ClipLoader
                size={100} // Adjust size as needed
                color={"#123abc"} // Adjust color as needed
                loading={spinner}
                css={{ // Add custom styles here
                    margin: "0 auto", // Center the spinner horizontally
                    display: spinner ? "block" : "none" // Show spinner only when loading
                }}
            /></div>
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