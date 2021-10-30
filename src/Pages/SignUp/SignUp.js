import React from 'react';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import signup from '../../images/signup.png'
import google from '../../images/google.png'
import './SignUp.css'
import logo from '../../images/logo.png'


const SignUp = () => {
    // imports 
    const { signInUsingGoogle, signInUsingGithub, signInUsingTwitter, signInUsingFacebook, error, setError, handleName, handleEmail, handlePassword, handleUserSignUp, handleSubmit, setUser, setUserName, setIsLoading } = useAuth()

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
    // sign up using email and password 
    const handleSignUp = () => {
        handleUserSignUp()
            .then(result => {
                console.log('user', result.user);
                console.log('userName', result.user.displayName);
                console.log('userEmail', result.user.email);
                setUser(result.user)
                setUserName(result.user.displayName)
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    return (
        <div className="sign-up-bg text-center">
            <Helmet>
                <title>Sign Up | Traveezy</title>
                <meta name="This is the signup page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
            <div className="container py-5">
                <div className="bg-white rounded shadow p-4 g-4 w-75 mx-auto log-sign">
                    <NavLink to="/home" className="text-decoration-none text-info">
                        <img src={logo} alt="" className="log-sign-logo mb-3" />
                    </NavLink>
                    <div className="row  align-items-center">
                        <div className="col-12 col-lg-6">
                            <img src={signup} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 d-flex ">
                                    <input type="text" className="form-control" placeholder="Name" onBlur={handleName} required />
                                    {/* <input type="text" className="form-control" placeholder="Last Name" onBlur={lastName} /> */}
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email" onBlur={handleEmail} required />
                                </div>
                                {/* <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="User ID" />
                                </div> */}
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" onBlur={handlePassword} required />
                                </div>
                                {/* <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                </div> */}
                                <div className="mb-3 form-check text-start">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label text-secondary">I accept the <NavLink to="/signup" className="text-decoration-none text-info">Terms of Use</NavLink> & <NavLink to="/signup" className="text-decoration-none text-info">Privacy Policy</NavLink></label>
                                </div>
                                <button onClick={handleSignUp} className="btn btn-primary w-100"><FontAwesomeIcon icon={faFingerprint} className="me-2" />Submit</button>
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
                    </div>
                    <p className="text-secondary pt-2 mb-0">Already have an Account ? <NavLink to="/login" className="text-decoration-none"><span className="text-info fw-bold">Log In</span></NavLink></p>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default SignUp;