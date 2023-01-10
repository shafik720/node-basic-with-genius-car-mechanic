
import React from 'react';
import useServices from '../../Hooks/useService';

const ManageService = () => {
    const [services, setServices] = useServices();
    function handleDelete(id) {
        const proceed = window.confirm('Are you sure you want to delete the item ? ');
        if (proceed) {
            fetch(`http://localhost:5000/manage/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert('Successfully deleted !');
                })
        }
    }
    return (
        <div>
            <h2>Manage your service here </h2>
            {
                services.map(index => <h3 className='text-center' index={index}>{index.name}
                    <button className='fs-6 mx-4' onClick={() => handleDelete(index._id)}>Delete</button>
                </h3>)
            }
        </div>
    );
};

export default ManageService;