import { Link } from "react-router-dom";

export function NotFound(){
    return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",flexDirection:"column"}}>
    <img src="https://img.lovepik.com/element/40021/7866.png_1200.png"  style={{borderRadius:"50%", width:"600px", height:"400px"}} alt="" />
    <h1>Page Not Found</h1>  
    <Link style={{textDecoration:"none"}} to={"/"}>Back to home page</Link>
    </div>
    );
}

