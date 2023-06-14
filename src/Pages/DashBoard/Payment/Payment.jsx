import React from 'react';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SectionHeader from '../../../Shared/SectionHeader/SectionHeader';
import useCart from '../../../assets/Hooks/useCart';
import { useParams } from 'react-router-dom';

//todo pk
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
    const [cart] = useCart();
    const { id } = useParams();
    const pricesss = cart?.find((data) => data._id == id);
    const price= pricesss?.price;
    console.log(price);
    return (
        <div className='w-full mx-auto'>
        <SectionHeader heading={"Payment"}></SectionHeader>
            <h1 className='text-center'>Teka poisa koydin valobasha chirodin</h1>

            <div className='max-w-screen-md mx-auto'>
            <Elements stripe={stripePromise}>
            <CheckOutForm cart={pricesss} price={price}></CheckOutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;