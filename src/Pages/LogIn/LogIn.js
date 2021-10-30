import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../images/login.png'
import google from '../../images/google.png'
import useAuth from '../../hooks/useAuth';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import './LogIn.css'
import logo from '../../images/logo.png'

const LogIn = () => {
    // imports 
    const { signInUsingGoogle, signInUsingGithub, signInUsingTwitter, signInUsingFacebook, error, setError, handleEmail, handlePassword, handleSubmit, handleUserSignIn, setUser, setUserName, setIsLoading } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_URI = location.state?.from || '/home'

    // sign in using google
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    // sign in using github
    const handleGithubLogIn = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    // sign in using twitter
    const handleTwitterLogIn = () => {
        signInUsingTwitter()
            .then(result => {
                console.log(result);
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    // sign in using facebook
    const handleFacebookLogIn = () => {
        signInUsingFacebook()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    // sign in using email and password 
    const handleSignIn = () => {
        handleUserSignIn()
            .then(result => {
                setUser(result.user)
                setUserName(result.user.displayName)
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    return (
        <div className="log-in-bg pt-5 pb-5 text-center">
            <Helmet>
                <title>Login | Traveezy</title>
                <meta name="This is the login page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
            <div className="container mb-5">
                <div className="bg-white rounded shadow p-5 pb-2 g-4 w-75 mx-auto log-sign">
                    <NavLink to="/home" className="text-decoration-none text-info">
                        <img src={logo} alt="" className="log-sign-logo mb-3" />
                    </NavLink>                    <div className="row align-items-center">
                        <div className="login-form col-12 col-lg-6 pt-2 pt-lg-0">
                            <form className="" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email" onBlur={handleEmail} />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" onBlur={handlePassword} />
                                </div>
                                <div className="mb-3 text-start">
                                    <NavLink to="/login" className="text-decoration-none text-info">Forgot Password ?</NavLink>
                                </div>
                                <button onClick={handleSignIn} className="btn btn-primary w-100"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Log In</button>
                                <div className="text-danger fw-bold fs-6">{error}</div>
                            </form>
                            <div className="border-top mt-2">
                                <p className="my-0 text-secondary fw-bold">or</p>
                                <p className="mt-0 text-secondary">Log In with any of these Accounts</p>
                                <div className="d-flex gap-2 justify-content-center">
                                    <img onClick={handleGoogleLogIn} src={google} alt="" style={{ height: "45px" }} className="me-2 border rounded-circle p-1 shadow fs-icon" />
                                    <FontAwesomeIcon onClick={handleGithubLogIn} icon={faGithub} className="me-2 border rounded-circle p-2 shadow fs-icon" />
                                    <FontAwesomeIcon onClick={handleTwitterLogIn} icon={faTwitter} className="icon-twitter me-2 border rounded-circle p-2 shadow fs-icon" />
                                    <FontAwesomeIcon onClick={handleFacebookLogIn} icon={faFacebook} className="icon-facebook me-2 border rounded-circle p-2 shadow fs-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 login-img">
                            <img src={login} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <p className="text-secondary pt-3">New Member ? <NavLink to="/signup" className="text-decoration-none"><span className="text-info fw-bold">Register</span></NavLink></p>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default LogIn;