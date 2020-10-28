import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import gif from '../../../../image/loading.gif';
import './ServiceList.css';

function ServiceList() {
    const [orderedServices, setOrderedServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {
        setLoading(true);
        fetch(`https://frozen-harbor-18792.herokuapp.com/orders/${user.email}`)
            .then(res => res.json()).then(data => {
                console.log(data.length);
                setLoading(false);
                setOrderedServices(data);
            });
    }, [user.email]);

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
    if (!loading && orderedServices.length < 1) {
        return (
            <div style={{ backgroundColor: '#E5E5E5' }} className='py-4 px-5'>
                <h5 className="text-center text-secondary">No service ordered yet! <Link className='text-primary' to='/'>Add some services</Link></h5>              </div>
        )
    }

    return (
        <div style={{ backgroundColor: '#E5E5E5' }} className='py-4 px-5'>
            {loading && <div className="d-flex justify-content-center"><img src={gif} alt="Loading" /></div>}
            {!loading && <div className="row">

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
            </div>}
        </div>
    )
}

export default ServiceList;
