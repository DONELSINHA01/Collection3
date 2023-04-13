import React, {createContext, useState } from "react";

const AuthContext = createContext();

const MainComponent=({children})=>{
    const [isloggedin,setIsLoggedIn] = useState(false);
    // const [cartData,setCartData]=useState([]); // CartDataStorage //
    const [manipulateCart,setManipulateCart]=useState([]);
    // const [id,setId]=useState();
    
    function addToCart(obj){
        ///   OLD_CODE
        // const setterCartData = cartData;
        // setterCartData.push(obj)
        //  setCartData(setterCartData);
        //  console.log("setterCartData",setterCartData);
        //  setManipulateCart(setterCartData)
        //  setId(obj.id);

        // NEW CODE
        const setterCartData = manipulateCart;
        setterCartData.push(obj)
         setManipulateCart(setterCartData)
        //  setId(obj.id);
/*
const data = [{name:"sdf"}]
CART_COmponent
*/}

     function onDelete(id){
        // filter returns an ARRAY 
    //    const setterCartData =manipulateCart.filter(ele=>ele.id!==id)
// const arr= [1,2,3,4,5]
// const myArr = arr.filter(e=>e!==4) // [1,2,3,5]
        setManipulateCart(manipulateCart.filter(ele=>ele.id!==id))
     }

    return(
        <AuthContext.Provider value={{isloggedin,setIsLoggedIn,addToCart,manipulateCart,onDelete}}>
            {children}
        </AuthContext.Provider>
    )
}

export default MainComponent;
export {AuthContext};