import React from 'react';
import portfolio from '../../../images/archiPortfolio.jpg'
import planing from '../../../images/archiPlaning.jpg'
import design from '../../../images/archiDesign.jpg'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <h1 className="text-center mb-5">What will you get from us?</h1>
            <hr/>
            <div className="container mb-5 mt-5">
                <div className="row mb-5">
                    <div className="col-md-6 mb-4 align-self-center">
                        <img style={{height:'400px'}} className="img-fluid" src={portfolio} alt=""/>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h1>Architecture Portfolio</h1>
                        <hr/>
                        <p className="text-secondary my-5">
                        There are many variations of passages of Lorem is as Ipsum available but the majority have suffered alteration in that some injected humour or slightly believable. If you are the Lorem Ipsum you need to be sure there dummy dummy text here the embarrassing.
                        </p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6 align-self-center">
                        <h1>Planning Process</h1>
                        <hr/>
                        <p className="text-secondary my-5">
                        There are many variations of passages of Lorem is as Ipsum available but the majority have suffered alteration in that some injected humour or slightly believable. If you are the Lorem Ipsum you need to be sure there dummy dummy text here the embarrassing.
                        </p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                    <div className="col-md-6 mb-4 align-self-center">
                        <img style={{height:'400px'}} className="img-fluid" src={planing} alt=""/>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6 mb-4 align-self-center">
                        <img style={{height:'400px'}} className="img-fluid" src={design} alt=""/>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h1>Interior Design</h1>
                        <hr/>
                        <p className="text-secondary my-5">
                        There are many variations of passages of Lorem is as Ipsum available but the majority have suffered alteration in that some injected humour or slightly believable. If you are the Lorem Ipsum you need to be sure there dummy dummy text here the embarrassing.
                        </p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;