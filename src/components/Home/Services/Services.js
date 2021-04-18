import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('https://fast-lake-38919.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    
    return (
        <div className ="container">
            <h1 className="text-center mt-5 pt-2 mb-5">Want to give work order of your dream project??</h1>
            <div className="row">
                {
                    service.length === 0 && <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                }
                {
                    service.map(service => <ServiceDetail key={service} service={service}></ServiceDetail>)
                }
            </div>
        </div>
    );
};

export default Services;