import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails(props) {
            const {id} =useParams();

            const[state,setState]=useState({
                id:'0',
                image:'',
                title:''
            });

            useEffect(()=>{
                fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(data=>{
                    setState(data);
                })
            },[]);
    return (
        <div>
            <h1>Product Details</h1>
            <div style={{marginTop:'50px'}}>
                
            <img src={state.image} width={'200px'} height={'200px'} alt={state.title} />
            <h3>{state.title}</h3></div>
        </div>
    );
}

export default ProductDetails;