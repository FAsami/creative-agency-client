import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import './Order.css';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import { useEffect } from 'react';
import ImageUpload from './ImageUpload';
import queryString from 'query-string';

function Order() {
    const { user } = useContext(UserContext);
    const [info, setInfo] = useState({});
    const { register, errors, handleSubmit } = useForm();
    const [service, setService] = useState([]);
    const [imageURL, setImageURL] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const { id } = queryString.parse(useLocation().search);

    useEffect(() => {
        fetch(`https://frozen-harbor-18792.herokuapp.com/service/${id || '5f8871acffbe351bf0973c9c'}`)
            .then(res => res.json()).then(data => {
                setService(data);
            });
    }, [id]);

    const handleBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
    }

    const onSubmit = () => {
        let formData = new FormData();
        formData.append('project_image', imageURL);
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('subject', service.title);
        formData.append('details', info.description);
        formData.append('price', info.price);
        formData.append('status', 'pending');
        formData.append('service_id', service._id);
        formData.append('service_image', service.imageUrl);

        if (imageURL) {
            fetch('https://frozen-harbor-18792.herokuapp.com/placeOrder', {
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

    }

    const inputClasses = 'form-control bg-light my-2 py-4';
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '90vh' }} className='py-4 px-5'>

            <div className='row'>
                <div className="col-sm-12 col-md-9">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {showAlert && <div className="alert alert-success">Order placed successfully</div>}
                        <input
                            type="text"
                            className={errors.name ? `${inputClasses} is-invalid` : inputClasses}
                            placeholder='Your name/Company name'
                            name='name'
                            defaultValue={user.name}
                            onBlur={(e) => handleBlur(e)}
                            ref={register({ required: true })}
                        />
                        {errors.name && <small className='text-danger'>This field is required</small>}

                        <input
                            type="email"
                            className={errors.email ? `${inputClasses} is-invalid` : inputClasses}
                            placeholder='Your email address'
                            name='email'
                            defaultValue={user.email}
                            onBlur={(e) => handleBlur(e)}
                            ref={register({ required: true })}
                        />
                        {errors.email && <small className='text-danger'>This field is required</small>}

                        <input
                            type="text"
                            className={errors.subject ? `${inputClasses} is-invalid` : inputClasses}
                            defaultValue={service.title}
                            name='subject'
                            onBlur={(e) => handleBlur(e)}
                            ref={register({ required: true })}
                        />
                        {errors.subject && <small className='text-danger'>This field is required</small>}

                        <textarea
                            className={errors.description ? 'form-control is-invalid' : 'form-control'}
                            cols="30"
                            rows="4"
                            placeholder='Project details'
                            name='description'
                            onBlur={(e) => handleBlur(e)}
                            ref={register({ required: true })}
                        ></textarea>
                        {errors.description && <small className='text-danger'>Please provide some description</small>}

                        <div className="row my-2">
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    className={errors.price ? `${inputClasses} is-invalid` : inputClasses}
                                    placeholder='Price'
                                    onBlur={(e) => handleBlur(e)}
                                    name='price'
                                    ref={register({ required: true })}
                                />
                                {errors.price && <small className='text-danger'>Price is not valid </small>}
                            </div>

                            <div className="col-md-6">
                                <ImageUpload label='Upload project Image' setImageURL={setImageURL} />
                            </div>
                        </div>
                        <button
                            className="btn px-5"
                            type='submit'
                            style={{ color: "#fff", fontSize: '16px', backgroundColor: '#111430' }}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order;
