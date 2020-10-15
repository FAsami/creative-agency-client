import React from 'react'

function Topbar({ title }) {
    const name = sessionStorage.getItem('name');

    return (
        <div className='d-flex justify-content-between py-3'>
            <h4 style={{ color: '#0C0C0C' }}>{title}</h4>
            <h5 style={{ color: '#0C0C0C' }}>{name}</h5>
        </div>
    )
}

export default Topbar;
