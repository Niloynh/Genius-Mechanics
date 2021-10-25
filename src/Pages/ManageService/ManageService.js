import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
        .then(res =>  res.json())
        .then(data => setServices(data))
    },[])
    const handleDelete = id => {
        fetch(`http://localhost:5000/services/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully')
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            }
        })
    }
    return (
        <div>
            {
                services.map(service => <div key={service._id}>
                    <img src={service.img} alt="" />
                    <h2>{service.name}</h2>
                    <button onClick={() =>handleDelete(service._id)} className="input-btn">Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;