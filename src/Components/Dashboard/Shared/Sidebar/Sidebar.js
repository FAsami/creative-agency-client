import React from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../../../../image/logo.png'
import './Sidebar.css'

function Sidebar({ data, page }) {
    const { title: activePage } = useParams();
    return (
        <div>
            <div className='my-3'>
                <Link to='/'>
                    <img className='image-fluid'
                        src={logo} alt="Creative Agency"
                        style={{ height: "50px", width: '150px' }} />
                </Link>
            </div>
            <div>
                {data.map(({ title, icon, id }) =>
                    <div className='my-2' key={id}>
                        <Link className={title === activePage ? 'link active' : 'link'}
                            to={page === 'admin' ? `/dashboard/admin/${title}` : `/dashboard/${title}`}>
                            <span className='mx-2'>{icon}</span>{title}</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar;
