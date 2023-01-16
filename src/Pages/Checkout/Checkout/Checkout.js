import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleService from '../../Hooks/useSingleService';

const Checkout = () => {
    const {id} = useParams();
    const[service] = useSingleService(id);
    return (
        <div>
            <h2>Please Checkout your booking : {service.name} </h2>
        </div>
    );
};

export default Checkout;