import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../../App';


function MakeAdmin() {
    const { user } = useContext(UserContext);
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('addedBy', user.email);
        formData.append('email', email);

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '90vh' }} className='py-4 px-5'>
            <div className="card  p-5" style={{ borderRadius: '20px' }}>
                <p className='text-brand font-weight-bold'>Email</p>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-8">
                            <input
                                type="email"
                                className="form-control py-3"
                                placeholder='john@gmail.com'
                                onBlur={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>
                        <div className="col-md-3">
                            <button type='submit' className="btn btn-success btn-block">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MakeAdmin;
