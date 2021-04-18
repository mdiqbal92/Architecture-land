import React from 'react';
import archi from '../../../images/archiBG1.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-6">
                <img src={archi} alt="" className="img-fluid" />
            </div>
            <div className="col-md-4">
            
                <h1 style={{ color: 'black' }}>Want to discuss?</h1>
                <p className="text-secondary">Select a date to fix an appointment with our experts.</p>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
        </main>
    );
};

export default AppointmentHeader;