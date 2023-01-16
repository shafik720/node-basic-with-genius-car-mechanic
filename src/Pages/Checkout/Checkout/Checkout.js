import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useSingleService from '../../Hooks/useSingleService';
import './Checkout.css';

const Checkout = () => {
    const { id } = useParams();
    const [service] = useSingleService(id);
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Please Checkout your booking : {service.name} </h2>
            <div className="order-form">
                <form action="">
                    <input value={user.displayName} type="text" name="name" id="" />
                    <input value={user.email}  type="email" name="email" id="" />
                    <input value={service.name} type="text" name="" id="" />
                    <input type="text" name="address" id="" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;