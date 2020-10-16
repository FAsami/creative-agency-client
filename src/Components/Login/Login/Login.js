import React, { useContext, useState } from 'react';
import logo from "../../../image/logo.png";
import { FcGoogle } from "react-icons/fc";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseApp } from '../../../Configs/firebaseConfig';
import { UserContext } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';


function Login() {
    const { setUser } = useContext(UserContext);
    const [loginError, setLoginError] = useState("");

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebaseApp.auth().signInWithPopup(provider).then((result) => {
            const user = { name: result.user.displayName, email: result.user.email, image: result.user.photoURL }
            setUser(user);
            history.replace(from);
        }).catch((error) => {
            const errorMessage = error.message;
            setLoginError(errorMessage);
        });
    }

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <div className='py-3'>
                <Link to='/'>
                    <img className='image-flex w-100' src={logo} alt="Creative agency"
                        style={{ height: "50px", maxWidth: "200px" }} />
                </Link>
            </div>
            <div className='card p-5'>
                <h3 className='text-center'>Login with</h3>
                <button className='btn btn-light border border-secondary my-3' onClick={handleSignIn} style={{ borderRadius: "30px" }}>
                    <FcGoogle /> Continue with Google
                </button>
                <small className='text-danger'>{loginError}</small>
                <p>Don't have an account ? <span className="text-primary"> Create an account</span> </p>
            </div>
        </div>
    )
}

export default Login;
