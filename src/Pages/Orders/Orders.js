import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const[orders, setOrders] = useState([]);
    const[user] = useAuthState(auth);
    // console.log(user);
    useEffect(()=>{
        const getOrder = async() =>{
            const email = user?.email;
            // console.log(email);
            const url = `http://localhost:5000/orderData?email=${email}`;
            const {data} = await axios.get(url, {
                headers : {
                    authorization : `Bearers ${localStorage.getItem('accessToken')}`
                }
            });
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