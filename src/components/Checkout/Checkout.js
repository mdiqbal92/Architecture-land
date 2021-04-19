import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const Checkout = () => {
    const {_id} = useParams();
    const [checkout, setCheckout] = useState({})
    useEffect(()=>{
        fetch(`https://fast-lake-38919.herokuapp.com/services/${_id}`)
        .then(res=>res.json())
        .then(data=>setCheckout(data))
    },[_id])
    
    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            name: checkout.name,
            price: checkout.price,
            paymentId,
            image: checkout.imageURL,
            time: new Date()
          }
        fetch('https://fast-lake-38919.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                alert('Order Placed Successfully!')
            }
        })
    }
    return (
        <div className="container mt-5">
            <div className ="row">
                <div className ="col-md-6">
                <img width="300px" src={checkout.imageURL} alt=""/>
                </div>
                <div style={{borderLeft:'1px solid lightGray'}} className="col-md-6">
                <h3>Name: {checkout.name}</h3>
                <h3>Price: {checkout.price} BDT</h3>
                <hr/>
                <h3>Pay via Credit card</h3>
                <ProcessPayment handlePayment ={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default Checkout;