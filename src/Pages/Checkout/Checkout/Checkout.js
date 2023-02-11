import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useSingleService from '../../Hooks/useSingleService';
import './Checkout.css';

const Checkout = () => {
    const { id } = useParams();
    const [service] = useSingleService(id);
    const [user] = useAuthState(auth);
    function handleSubmit(e){
        e.preventDefault();
        const user = {
            userName : e.target.name.value,
            email : e.target.email.value,
            serviceName : e.target.service.value,
            address: e.target.address.value
        }

       axios.post('http://localhost:5000/addOrder', user)
       .then(response=>{
        if(response.data.insertedId){
            toast('Order Added !');
            console.log('added')
        }
       })
    }
    return (
        <div>
            <h2>Please Checkout your booking : {service.name} </h2>
            <div className="order-form">
                <form action="" onSubmit={handleSubmit}>
                    <input readOnly value={user?.displayName} type="text" name="name" id="" />
                    <input readOnly value={user?.email}  type="email" name="email" id="" />
                    <input readOnly value={service.name} type="text" name="service" id="" />
                    <input type="text" name="address" placeholder='Your address' id="" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;