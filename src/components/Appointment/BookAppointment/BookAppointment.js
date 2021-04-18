import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Design Concept',
        visitingHour: '8:00 AM - 9:00 AM',
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Drawing',
        visitingHour: '10:50 AM - 11:30 AM',
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: '3D Modeling',
        visitingHour: '5:00 PM - 6:00 PM',
    }
]
const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Our Experts are ready to discuss on {date.toDateString()}</h2>
            <div style={{marginLeft:'95px'}} className="container row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;