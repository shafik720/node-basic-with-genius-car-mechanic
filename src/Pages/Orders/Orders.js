import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const[orders, setOrders] = useState([]);
    const[user] = useAuthState(auth);
    useEffect(()=>{
        const getOrder = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/orderData?email=${email}`;
            const {data} = await axios.get(url);
            setOrders(data);
        }
        getOrder();
    },[user])
    return (
        <div>
            <h2>Order found : {orders.length} </h2>
        </div>
    );
};

export default Orders;