import { useEffect, useState } from "react";

const CountryCard = ({name,flag})=>{

    return(
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
            border:"2px solid grey",
            borderRadius:"10px",
            height:"200px",
            width:"200px",
            gap:"5px"
            
        }}>
            <img src={flag} alt={`flag of ${name}`} height={"50px"} width={"50px"}/>
            <h2>{name}</h2>
        </div>
    )
}



export default function Countries(){
    const url = "https://xcountries-backend.azurewebsites.net/all";

    const [data, setData] = useState([]);
   
    useEffect(()=>{
        fetch(url).then(response=>response.json()).then(data=>{
            setData(data)
        }).catch((error)=>console.error("Error fetching data: ",error));
        
    },[])
         
    return(
            <div 
            style={{
                display:"flex",
                flexWrap:"wrap",
                gap:"20px",
                margin:"10px"
            }}
            >
             {data.map(({name,flag,abbr})=>(
                <CountryCard key={abbr} name={name} flag={flag}/>
             ))}
            </div>
         )
}