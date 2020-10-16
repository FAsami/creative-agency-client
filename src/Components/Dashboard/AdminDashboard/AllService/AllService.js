import React, { useEffect } from 'react';
import { useState } from 'react';

function AllServices() {
    const [showAlert, setShowAlert] = useState(false);
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-harbor-18792.herokuapp.com/orders`)
            .then(res => res.json()).then(data => {
                setAllServices(data);
            });
    }, []);




    const handleChange = (e, serviceId) => {
        const status = e.target.value;
        fetch(`https://frozen-harbor-18792.herokuapp.com/updateServiceStatus/${serviceId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        }).then(res => res.json()).then(data => {
            if (data) {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
            }
        })
    }

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '90vh' }} className='py-4 px-2'>
            <div className="card  p-5" style={{ borderRadius: '20px' }}>
                {showAlert && <div className="alert alert-success">Status changed successfully</div>}
                <table className="table table-borderless">
                    <thead>
                        <tr style={{ color: "#686868", backgroundColor: "#F5F6FA", borderRadius: "13px" }}>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Services</th>
                            <th>Project details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allServices.map(service =>
                            <tr key={service._id}>
                                <td>{service.name} </td>
                                <td>{service.email}</td>
                                <td>{service.subject}</td>
                                <td >{service.details}</td>
                                <td>
                                    <select className='border-0' name='status' onChange={(e) => handleChange(e, service._id)} defaultValue={service.status}>
                                        <option value="Pending" className='text-danger'>Pending</option>
                                        <option value="Done" className='text-success'>Done</option>
                                        <option value="On Going" className='text-warning'>OnGoing</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllServices;
