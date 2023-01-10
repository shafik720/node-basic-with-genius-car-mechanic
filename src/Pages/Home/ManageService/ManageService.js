
import React from 'react';
import useServices from '../../Hooks/useService';

const ManageService = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <h2>Manage your service here </h2>
            {
                services.map(index=><h3 className='text-center' index={index}>{index.name}
                    <button className='fs-6 mx-4'>Delete</button>
                </h3>)
            }
        </div>
    );
};

export default ManageService;