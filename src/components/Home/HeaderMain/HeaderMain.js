import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{height:'600px', textAlign: 'center', marginTop:'150px'}}>
            <div>
                <h1 style={{color: 'black'}}>Let Your Dream <br/> Come True</h1>
                <p className="text-secondary">We will design your dream</p>
                <Link to="/appointment" className="btn btn-brand">Discuss with us</Link>
            </div>
            
        </main>
    );
};

export default HeaderMain;