import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import { useForm } from "react-hook-form";

function Review() {
    const { user } = useContext(UserContext);
    const [info, setInfo] = useState({});
    const { handleSubmit, register, errors } = useForm();
    const [showAlert, setShowAlert] = useState(false);
    const handleBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
    }

    const onSubmit = () => {
        const formData = new FormData()
        formData.append('name', info.name);
        formData.append('email', user.email);
        formData.append('image', user.image);
        formData.append('designation', info.designation);
        formData.append('description', info.description);

        fetch('https://frozen-harbor-18792.herokuapp.com/addReview', {
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

    const inputClasses = "form-control bg-light py-4 my-2";
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '90vh' }} className='py-4 px-5'>
            <div className='row'>
                <div className="col-sm-12 col-md-9">
                    {showAlert && <div className="alert alert-success">Review addedd successfully</div>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            onBlur={handleBlur}
                            name='name'
                            placeholder='Name'
                            ref={register({ required: true })}
                            className={errors.name ? `${inputClasses} is-invalid` : inputClasses}
                        />
                        <input
                            type="text"
                            onBlur={handleBlur}
                            className={errors.name ? `${inputClasses} is-invalid` : inputClasses}
                            placeholder='Company name, designation'
                            ref={register({ required: true })}
                            name='designation'
                        />
                        <textarea
                            className={errors.description ? 'form-control is-invalid' : 'form-control'}
                            cols="30"
                            rows="4"
                            name='description'
                            onBlur={handleBlur}
                            ref={register({ required: true })}
                            placeholder='Description'>
                        </textarea>
                        <button
                            className="btn px-5 my-2"
                            type='submit'
                            style={
                                {
                                    color: "#fff",
                                    fontSize: '16px',
                                    backgroundColor: '#111430'
                                }
                            }>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Review;
