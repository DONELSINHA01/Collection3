import React from "react";
import { useContext } from "react";
import { AuthContext } from "./Context";
import {Link} from "react-router-dom";
const Nav = () => {

    const {setIsLoggedIn} = useContext(AuthContext);
    return (
        <div className="nav">
            <logo>
                <h2>Logo</h2>
            </logo>
            <div id="menu">
                <Link to="/profile">Profile</Link>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/support">Support</Link>
                <Link to="/cart">Cart</Link>
            </div>
            <button onClick={()=>{setIsLoggedIn(false)}} style={{color:'orange',background:'black',border:'none'}}>Log Out</button>
        </div>

    )
}
export default Nav;