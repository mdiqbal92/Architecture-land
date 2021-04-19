import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('https://fast-lake-38919.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Reviews</h5>
                   <h1>What Our Clients <br/> Say </h1>
                   <hr/>
               </div>
               <div className="card-deck mt-5">
                    {
                        review.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
                <hr/>
           </div>
       </section>
    );
};

export default Testimonials;