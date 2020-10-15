import React, { useState } from 'react';
import { HiOutlineCloudUpload } from 'react-icons/hi';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import './Order.css';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import { useEffect } from 'react';


function Order() {
    const { user } = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const { register, errors, handleSubmit } = useForm();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service/${title}`)
            .then(res => res.json()).then(data => {
                setService(data);
            });
    }, []);


    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    const handleBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
    }


    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const title = query.get('title');


    const onSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('subject', info.subject);
        formData.append('details', info.description);
        formData.append('price', info.price);
        formData.append('status', 'pending');
        formData.append('service_id', service._id);
        formData.append('service_image', service.image.img);
        formData.append('service_image_type', service.image.contentType);



        fetch('http://localhost:5000/placeOrder', {
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

    const inputClasses = 'form-control bg-light my-2 py-4';
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '90vh' }} className='py-4 px-5'>

            <div className='row'>
                <div className="col-sm-12 col-md-9">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <div className="image-upload py-1 my-2 text-center">
                                    <label
                                        htmlFor="file-input">
                                        <HiOutlineCloudUpload /> Upload project image
                                    </label>
                                    <input
                                        id="file-input"
                                        type="file"
                                        name='file'
                                        onChange={(e) => handleFileChange(e)}
                                        ref={register({ required: false })}
                                    />
                                </div>
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
