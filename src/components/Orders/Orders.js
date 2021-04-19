import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Orders = () => {
    const [allOrder, setAllOrder] = useState([])
    useEffect(()=>{
        fetch('https://fast-lake-38919.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    },[])
    
    const deleteItem= (_id) => {
        console.log(_id);
        fetch(`https://rhubarb-cupcake-36196.herokuapp.com/delete/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                console.log('Delete clicked');
                // event.target.parentNode.style.display = 'none';
            }
        })
    };

    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            </table>

            {
                allOrder.map(Order => 
                <table className="table">
                <tbody>
                <tr>
                <td style={{textAlign: 'left'}}>{Order.name}</td>
                <td style={{textAlign: 'right'}}>{Order.price}</td>
                <td style={{textAlign: 'right'}}>Credit Card</td>
                <td style={{textAlign: 'right'}}>Pending</td>
                <td style={{textAlign: 'right'}}><button className="btn btn-danger" onClick={()=>deleteItem(Order._id)}>Delete</button> 
                <button className="btn btn-success">Update</button></td>
                </tr>
                </tbody>
                </table>
                )
            }
            </div>
            
        </div>
    );
};

export default Orders;