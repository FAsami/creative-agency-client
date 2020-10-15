import React from 'react'
import { Link } from 'react-router-dom';
import heroImage from '../../../image/hero.png'

function Header() {
    return (
        <div className="row m-5">
            <div className="col-sm-12 col-md-6 p-3">
                <h1 className='text-brand font-weight-bold display-4'>Let's Grow Your<br />Brand To The <br /> Next Level</h1>
                <p style={{ fontSize: "1rem" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                <Link to='/dashboard/Order'>
                    <button className="btn px-5"
                        style={{ color: "#fff", fontSize: '16px', backgroundColor: '#111430' }}>
                        Hire Us
                </button>
                </Link>
            </div>
            <div className="d-none d-md-block col-sm-0 col-md-6">
                <img src={heroImage} className='image-fluid w-100'
                    alt="Creative Agency" style={{ maxHeight: "400px" }} />
            </div>
        </div>
    )
}

export default Header;
