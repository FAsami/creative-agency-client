import React, { useContext, useState } from 'react';
import { HiOutlineCloudUpload } from 'react-icons/hi';
import { useForm } from "react-hook-form";
import './AddServices.css';
import { UserContext } from '../../../../App';


function AddServices() {
    const { user } = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const { handleSubmit, register, errors } = useForm();
    const handleBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    const onSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addService', {
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card  p-5" style={{ borderRadius: '20px' }}>
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
                            <div className="image-upload  py-1 text-center">
                                <label htmlFor="file-input">
                                    <HiOutlineCloudUpload /> Icon
                            </label>
                                <input
                                    id="file-input"
                                    type="file"
                                    name='file'
                                    onChange={handleFileChange}
                                    ref={register({ required: true })}
                                />
                            </div>
                            {errors.file && <small className='text-danger'>Please upload a file</small>}
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
