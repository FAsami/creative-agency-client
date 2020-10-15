import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"




function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    return (
        <div className='mt-5 pt-3'>
            <div className='text-center mt-5 py-5'>
                <h3 className="text-brand-header font-weight-bold">
                    Provide awesome
                <span className='text-brand-green'> services</span>
                </h3>
            </div>
            <div className="row">
                {services.map(service =>
                    <div className='col-sm-6 col-md-4' key={service._id}>
                        <Link className='link' to={`/dashboard/Order?title=${service._id}`}>
                            <div className="card border-0 text-center service-card">
                                <div className='d-flex justify-content-center'>
                                    <img src={`data:${service.image.contentType};base64,${service.image.img}`}
                                        className='image-fluid' alt={service.title}
                                        style={{ maxHeight: '75px', maxWidth: '75px' }} />
                                </div>
                                <h6 className="text-brand font-weight-bold py-3">{service.title}</h6>
                                <p className='text-brand-muted'>{service.description}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Services;
