import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const ServiceData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://fast-lake-38919.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ServiceData)
        })
            .then(res => console.log(res))
        console.log(ServiceData)
        alert('Service Added Successfully')
    };
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '718b7053181337877648f113d54fdb9e')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className ="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3>Add a New Service here</h3>
                <form style={{ margin: '40px' }} className="container" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Service Name</label>
                    <input className="form-control" name="name" defaultValue="New Service" ref={register} /><br />
                    <label htmlFor="price">Service Cost</label>
                    <input className="form-control" name="price" ref={register} /><br />
                    <input type="file" onChange={handleImageUpload} /> <br /> <br />
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddService;