import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../../App';
import './ServiceList.css';

function ServiceList() {
    const [orderedServices, setOrderedServices] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`https://frozen-harbor-18792.herokuapp.com/orders/${user.email}`)
            .then(res => res.json()).then(data => {
                setOrderedServices(data);
            });
    }, []);

    const statusClass = (status) => {
        let statusClasses = '';
        if (status === 'On Going') {
            statusClasses = 'btn btn-sm btn-ongoing'
        } else if (status === 'pending') {
            statusClasses = 'btn btn-sm btn-pending'
        } else {
            statusClasses = 'btn btn-sm btn-done'
        }
        return statusClasses;
    }

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '90vh' }} className='py-4 px-5'>
            <div className="row">
                {orderedServices.map(order =>
                    <div className="col-md-6 mb-3" key={order._id}>
                        <div className="card service-card p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <img
                                        className='image-fluid'
                                        style={{ height: '50px' }}
                                        src={order.service_image}
                                        alt={order.subject} />
                                </div>
                                <div>
                                    <button className={statusClass(order.status)}>{order.status}</button>
                                </div>
                            </div>
                            <div>
                                <h5 className='text-brand py-2'>{order.subject}</h5>
                                <p className='text-brand-muted'>{order.details}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ServiceList;
