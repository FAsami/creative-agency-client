import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"

function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://frozen-harbor-18792.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    return (
        <div className='mt-5 pt-3'>
            <div className='text-center mt-5 py-5'>
                <h3 className="text-brand-header font-weight-bold">
                    Provide awesome
                <span className='text-brand-green'> services</span>
                </h3>
            </div>
            <div className="row">
                {services.map(service =>
                    <div className='col-sm-6 col-md-4' key={service._id}>
                        <Link className='link' to={`/dashboard/Order?id=${service._id}`}>
                            <div className="card text-center border-0 py-3 cardItem">
                                <div className='d-flex justify-content-center'>
                                    <img src={service.imageUrl}
                                        className='image-fluid' alt={service.title}
                                        style={{ maxHeight: '75px', maxWidth: '75px' }} />
                                </div>
                                <h6 className="text-brand font-weight-bold py-3">{service.title}</h6>
                                <p className='text-brand-muted'>{service.description}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Services;






// function Card() {

//   return (
//     <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
//       <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
//       <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
//       <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
//       <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
//     </div>
//   )
// }


