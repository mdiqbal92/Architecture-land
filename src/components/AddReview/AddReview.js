import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const ServiceData = {
            quote: data.quote,
            name: data.name,
            from: data.from,
            imageURL: imageURL
        }
        const url = `https://fast-lake-38919.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ServiceData)
        })
            .then(res => console.log(res))
        console.log(ServiceData)
        alert('Review Added Successfully')
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
                <h3>Want to review us? </h3>
                <form style={{ margin: '40px' }} className="container" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Quote</label>
                    <input className="form-control" name="quote" ref={register} /><br />
                    <label htmlFor="price">Name</label>
                    <input className="form-control" name="name" ref={register} /><br />
                    <label htmlFor="price">From</label>
                    <input className="form-control" name="from" ref={register} /><br />
                    <input type="file" onChange={handleImageUpload} /> <br /> <br />
                    <input className="btn btn-success" type="submit" />
                    
                </form>
            </div>
        </div>
    );
};

export default AddReview;