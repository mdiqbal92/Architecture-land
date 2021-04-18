import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { ServiceContext } from '../../../App';
import './ServiceDetails.css'

const ServiceDetail = (props) => {
    const {_id,name, price, imageURL} = props.service;
    const [service, setService] = useContext(ServiceContext)
    console.log(service);
    setService(props.service);
    const history = useHistory();

    const handleOrder = () => {
        history.push(`/checkout/${_id}`)
        setService(props.service);
    }
    return (
        <div className="col-md-4">
            <div class="card service-card" style={{width: '16rem', marginTop:'25px'}}>
                <img style= {{height: '200px'}} src={imageURL} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">${price}</p>
                    <button className="btn btn-success" onClick={handleOrder}>Order</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;