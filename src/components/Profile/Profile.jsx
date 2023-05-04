import { Hreff } from "../Hreff";
import { useParams, Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { hover } from "@testing-library/user-event/dist/hover";

export function Profile({}){

    let[loading,setLoading] = useState(true);
let [foundUser, setFoundUser] = useState(undefined);



    let {userId} = useParams();

useEffect(() => {
    axios.get(`https://reqres.in/api/users/${userId}`)
    .then ((json) =>{
        setLoading(false);
        setFoundUser(json.data.data);
    });
})   
    
    console.log(foundUser);
    
    return (
        <>
        {loading && <h1>Loading...</h1>}
        {foundUser && <section>
       <Link style={{textDecoration:"none", width:"150px", height:"20px",margin:"20px", display:"inline-block",background:"#324fe1",color:"white",textAlign:"center", padding:"10px" ,borderRadius:"40px"}} to={"/"}>Back to Home page</Link>
       <div style={{width:'300px',height:"300px", margin:"50px auto", boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2)", textAlign:"center", }}>
       <img src={foundUser.avatar} style={{borderRadius:"50%", width:"80px", height:"80px",margin:"20px"}} alt=""  />
       <h1>{foundUser.first_name}</h1>
       <h2>{foundUser.last_name}</h2>
       <Link style={{textDecoration:"none", width:"150px", height:"20px", display:"inline-block",background:"#324fe1",color:"white",textAlign:"center", padding:"10px" ,borderRadius:"40px"}} to={`mailto:${foundUser.email}`}>{foundUser.email}</Link>
       </div>'
   </section>
        }
        </>
        
    )
}