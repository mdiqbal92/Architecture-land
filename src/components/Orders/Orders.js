import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Orders = () => {
    const [allService, setAllService] = useState([])
    console.log(allService)
    useEffect(()=>{
        fetch('https://fast-lake-38919.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setAllService(data))
    },[allService])
    
    const deleteItem= (id) => {
        
        fetch(`https://rhubarb-cupcake-36196.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                // event.target.parentNode.style.display = 'none';
            }
        })
    }

    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            </table>
            {allService.map(Service => 
            <table className="table">
            <tbody>
            <tr>
            <td style={{textAlign: 'left'}}>{Service.name}</td>
            <td style={{textAlign: 'right'}}>{Service.price}</td>
            <td style={{textAlign: 'right'}}><button className="btn btn-danger" onClick={()=>deleteItem(Service._id)}>Delete</button> 
            <button className="btn btn-success">Update</button></td>
            </tr>
            </tbody>
            </table>
            )}
            </div>
            
        </div>
    );
};

export default Orders;