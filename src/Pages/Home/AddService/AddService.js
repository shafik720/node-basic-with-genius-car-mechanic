import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2>Add your service here</h2>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Your Name' {...register("name")} />
                <textarea className='mb-3' placeholder='Description' {...register("description",)} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Img url'  {...register("img")} />
                <input className='mb-3' type="submit" />
            </form>
        </div >
    );
};

export default AddService;