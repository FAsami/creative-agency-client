import React, { useEffect, useState } from 'react'

function ClientFeedBack() {
    const [client, setClient] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setClient(data));
    }, []);

    return (
        <div>
            <h3 className="text-brand-header font-weight-bold text-center my-5">
                Client
                <span className='text-brand-green'> Feedback</span>
            </h3>
            <div className="row mx-3">
                {client.map(client =>
                    <div className="col-md-4 mt-5" key={client._id}>
                        <div className="card">
                            <div className="d-flex align-items-center">
                                <div className='mx-2'>
                                    <img src={client.image}
                                        className='image-fluid'
                                        alt={client.name}
                                        style={{ maxHeight: '64px', borderRadius: '50%' }}
                                    />
                                </div>
                                <div className='mx-2 pt-3'>
                                    <h6 className='font-weight-bold' >{client.name}</h6>
                                    <p className='text-brand-muted text-center'>{client.designation}</p>
                                </div>
                            </div>
                            <div className="card-body text-brand-muted">{client.description}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ClientFeedBack
