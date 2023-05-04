import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { json,  Route,  Routes } from "react-router-dom";
import { List } from "./components/List/List";
import { NotFound } from "./components/NotFound/NotFound";
import { Profile } from "./components/Profile";


function App() {
  let [userData, setUserData] = useState([]);

  useEffect(() => {

    axios.get("https://reqres.in/api/users").then((json) => setUserData(json.data.data));

  }, []);

  return (

    <Routes>
      
      <Route path="/" element={<List userData={userData}/>}/>
      <Route path="/user/:userId" element={<Profile userData={userData}/>}/>
      <Route path="*" element={<NotFound/>}/>
        
    </Routes>
  );
}

export default App;
