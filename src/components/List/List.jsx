
import { Item } from "../Item";
import { Hreff } from "../Hreff";
import { Link } from "react-router-dom";

export function List({userData}){
    return(
        <ul style={{ fontSize:"25px"}}>
            <h1 style={{textDecoration:"none", width:"650px", height:"80px",margin:"20px", display:"inline-block",background:"#324fe1",color:"white",textAlign:"center", padding:"10px" ,borderRadius:"40px"}}>Group Leaders</h1>
            {userData && userData.map((user, index) => (
            
            <Item key={index}>
                
                <p> {user.id}</p>
                <Link style={{textDecoration:"none"}} to={`/user/${user.id}`}>{user.first_name}</Link>
            </Item>
            ))}
        </ul>
    );
}