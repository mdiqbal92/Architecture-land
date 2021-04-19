import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IhtclFcvz2DLvJNICoSbgUqUWUZT1AZSwyPcYXiS8eLHIOB22FSg8KfsEbSZ6ZFjnrX1uytnRNvow7QY1FCpJ3h002HT5Vxx6');

const ProcessPayment = ({handlePayment}) => {

    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePaymentSuccess={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;