import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        axios.post('./services.json', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully')
                reset();
            }
            
        })
    
    
    }

    
  
    return (
        <div className="handleForm">
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
            <input {...register("description")} placeholder="Description"/>
            <input type="number" {...register("price")} placeholder="Price"/>
            <input {...register("img")} placeholder="Image URL"/>
            <input className="input-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddService;