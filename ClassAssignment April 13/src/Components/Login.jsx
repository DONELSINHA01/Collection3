import React from "react";
import { useState,useContext } from "react";
import { AuthContext } from "./Context";

const Login = (props) => {
    const {setIsLoggedIn}=useContext(AuthContext);
    const [user,setUser] = useState({
        name:'',
        password:''
    })

    const handleClick =()=>{
        if(user.name==="donel" && user.password==="donel@123"){
            setIsLoggedIn(true);
        }
        else{
            alert('alert proper credentials');
        }
    }

    return (
        <div className="form" style={{display:'flex',justifyContent:'center'}}>
            <div className="login">
                <h1>login</h1>
                <label >User-Name</label>
                <input type="text" placeholder="user name" onChange={(e)=>{
                    setUser({...user,name:e.target.value})
                }}/>
                <br />
                <label>Password</label>
                <input type="password" onChange={(e)=>{
                    setUser({...user,password:e.target.value})
                }}/>
                <br />
                <button onClick={handleClick}>login</button>
            </div>
            
        </div>
    )
}

export default Login;