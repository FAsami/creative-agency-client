import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
function NotFound() {
    return (
        <div className='container-fluid text-center'>
            <h1 className="py-5 display-3">
                <span className='text-danger'>404</span> page not found!
            </h1>
            <h4>Go back to
                <Link to='/'>
                    <button className="btn btn-outline-success px-5 mx-3 font-weight-bold"><FaHome />   Home</button>
                </Link>
            </h4>
        </div>
    )
}

export default NotFound
