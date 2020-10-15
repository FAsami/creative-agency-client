import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../image/logo.png'
import './Navbar.css';

function Navbar() {
    const navClasses = 'nav-item nav-link px-4';
    const token = sessionStorage.getItem('token');
    const name = sessionStorage.getItem('name');
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
                        <Link className={navClasses} to="/">Our Portfolio</Link>
                        <Link className={navClasses} to="/">Our Team</Link>
                        <Link className={navClasses} to="/">Contact us</Link>
                        <Link className={!token ? navClasses : 'd-none'}
                            to="/login">
                            <button className="btn px-5"
                                style={{ color: "#fff", fontSize: '16px', backgroundColor: '#111430' }}>
                                Login
                            </button>
                        </Link>
                        <Link className={`${navClasses} disabled font-weight-bold text-dark`} to='/' disabled>{token ? name : null}</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
