import React from "react";
import { useContext } from "react";
import { AuthContext } from "./Context";
import {Link} from "react-router-dom";
const Nav = () => {

    const {setIsLoggedIn,manipulateCart} = useContext(AuthContext);
    
    return (
        <div className="nav">
            <logo>
                <h2>Logo</h2>
            </logo>
            <div id="menu">
                
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/support">Support</Link>
                <Link to="/technologies">Technologies</Link>
                <Link to="/cart">Cart {manipulateCart.length}</Link>
            </div>
            <Link className="links" to="/">
                <button className="logoutbtn" onClick={()=>{setIsLoggedIn(false)}}>Log Out
                </button>
                </Link>
        </div>

    )
}
export default Nav;