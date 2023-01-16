import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useSingleService from '../Hooks/useSingleService';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    // const [service, setService] = useState([]);
    // useEffect(()=>{
    //     const url = `http://localhost:5000/service/${serviceId}`;
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
    // },[])
    const[service] = useSingleService(serviceId);
    return (
        <div>
            <h2>You are about to Book for : {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;