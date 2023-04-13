import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Components/Context';
function Cart(props) {

    const {manipulateCart,onDelete}=useContext(AuthContext);
    console.log("manipulateCarts",manipulateCart)
    
    return (
        
        
        <div className='myCart' style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:"column"}}>
            {manipulateCart.map(e=>{return (
                
    <div className="shop"  style={{width:'100vw' ,marginLeft:'20px',marginRight:'20px',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <img src={e.image} width={'30px'} height={'30px'} alt="" />
                <p>{e.name}</p>
                <small>{e.price}</small>
                <button onClick={()=>{onDelete(e.id)}}>Delete</button>
            </div>
            )})
            }
        </div>
        
    );
}

export default Cart;