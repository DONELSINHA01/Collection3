import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/Context';

const API = 'https://fakestoreapi.com/products';
function Products(props) {

    const [products,setProducts] = useState([]);
    const{addToCart} =useContext(AuthContext);
    

    useEffect(()=>{
        fetch(API)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProducts(data);

        })
        
    },[]);

   

    return (
        <div style={{textAlign:'center'}}>
            <h1>Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos hic ea est delectus quis voluptatem, necessitatibus debitis fuga reiciendis sunt rem laboriosam, a praesentium excepturi? Eum exercitationem perferendis vero perspiciatis nobis, at commodi deserunt odit porro, iusto enim accusamus sed natus aliquid! Fuga fugiat exercitationem dolorum blanditiis maiores esse similique id accusamus, labore ex aliquid voluptatem laudantium dolorem, expedita delectus molestias, consequatur dolor minus. Architecto maxime eum harum. Doloribus blanditiis ducimus animi laboriosam, totam doloremque quia ratione dicta, in rerum delectus? Porro voluptate, neque exercitationem dicta non dolorem! Quia enim officiis eum quam fugiat vitae iure vel, consectetur facere?</p>

            {
                products.length>0?<div className='productSection'>
                    {products.map((item)=>{
                        
                        const obj={
                            id:item.id,
                            name:item.title,
                            image:item.image,
                            price:item.price

                        }

                       return(
                       <div className='card'>
                        <img width={'100px'} height={'100px'} src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    
                        <h4 className='price' style={{color:"orange"}}>Price : {item.price} $</h4>
                        <Link to ={`/details/${item.id}`}><button>Product details</button></Link><br />
                        <button onClick={()=>addToCart(obj)}>Add to Cart</button>
                        
                        </div>
                        )
                    })}
                </div>:<h1>no Items</h1> 
            }
        </div>
    );
}

export default Products;