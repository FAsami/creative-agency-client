import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../image/logo.png'
import './Navbar.css';
import 'bootstrap/js/src/collapse.js';
import { useContext } from 'react';
import { UserContext } from '../../../App';

function Navbar() {
    const navClasses = 'nav-item nav-link px-4';
    const { user } = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className='logo' alt="Creative agency" />
                </Link>
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-nav ml-auto">
                        <Link className={navClasses} to="/">
                            Home<span className="sr-only">(current)</span>
                        </Link>
                        <a href='#portfolio' className={navClasses} to="/">Our Portfolio</a>
                        <Link className={navClasses} to="/">Our Team</Link>
                        <Link className={navClasses} to="/dashboard/admin/ServiceList">Admin</Link>
                        {user.name && <Link className={`${navClasses} disabled`} to="/">{user.name}</Link>}
                        {!user.name && <Link className={navClasses}
                            to="/login">
                            <button className="btn px-5"
                                style={{ color: "#fff", fontSize: '16px', backgroundColor: '#111430' }}>
                                Login
                            </button>
                        </Link>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
