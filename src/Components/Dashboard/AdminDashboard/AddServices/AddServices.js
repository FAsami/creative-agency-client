import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';
import { UserContext } from '../../../../App';
import ImageUpload from '../../CustomerDashboard/Order/ImageUpload';


function AddServices() {
    const { user } = useContext(UserContext);
    const [info, setInfo] = useState({});
    const { handleSubmit, register, errors } = useForm();
    const [imageURL, setImageURL] = useState('');
    const [alert, setAlert] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const handleBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
    }
    const onSubmit = () => {
        const formData = new FormData()
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('title', info.title);
        formData.append('imageUrl', imageURL);
        formData.append('description', info.description);

        if (imageURL) {
            fetch('https://frozen-harbor-18792.herokuapp.com/addService', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        setAlert({ type: 'success', msg: 'Service added successfully' });
                        setShowAlert(true);
                        setTimeout(() => setShowAlert(false), 3000);
                        setInfo({});
                    }
                })
                .catch(error => {
                    setAlert({ type: 'danger', msg: 'Failed to add service, Please try again!' });
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 3000);
                    console.log(error);
                })
        }
    }

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '90vh' }} className='py-4 px-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card  p-5" style={{ borderRadius: '20px' }}>
                    {showAlert ? <div className={`alert alert-${alert.type}`}>{alert.msg}</div> : null}
                    <div className="row my-2">
                        <div className="col-md-6">
                            <p className='text-brand font-weight-bold'>Service title</p>
                            <input
                                type="text"
                                id='service-title'
                                className={errors.title ? "form-control py-3 is-invalid" : "form-control py-3"}
                                placeholder='Enter title'
                                name='title'
                                onBlur={(e) => handleBlur(e)}
                                ref={register({ required: true })}
                            />
                        </div>
                        <div className="col-md-6">
                            <p className='text-brand font-weight-bold'>Icon</p>
                            <ImageUpload label="Icon" setImageURL={setImageURL} />
                        </div>
                    </div>
                    <p className='text-brand font-weight-bold'>Description</p>
                    <textarea
                        className={errors.description ? 'form-control is-invalid' : 'form-control'}
                        cols="30"
                        rows="4"
                        placeholder='Project details'
                        name="description"
                        onBlur={(e) => handleBlur(e)}
                        ref={register({ required: true })}
                    ></textarea>
                </div>
                <div className='d-flex justify-content-end'>
                    <button type='submit' className="btn-success btn my-2 px-3 ml-auto">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddServices;
