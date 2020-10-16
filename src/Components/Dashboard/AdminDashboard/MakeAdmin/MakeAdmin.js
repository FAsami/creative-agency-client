import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../../App';

function MakeAdmin() {
    const { user } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('addedBy', user.email);
        formData.append('email', email);

        fetch('https://frozen-harbor-18792.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 3000);
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '90vh' }} className='py-4 px-5'>
            <div className="card  p-5" style={{ borderRadius: '20px' }}>
                {showAlert && <div className="alert alert-success">Admin Created successfully</div>}
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
