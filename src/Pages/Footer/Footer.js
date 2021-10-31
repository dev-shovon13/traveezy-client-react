import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

// this is the footer page
const Footer = () => {
    return (
        <div className="footer pt-md-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-start px-3 text-white d-none d-md-flex pb-2">
                    <div className="col mb-3 mb-md-0">
                        <h5>CONTACT INFO</h5>
                        <p className="">Traveezy || Travel Made Easy</p>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faHome} className="f-icon" />
                            <p className="ms-3 mb-0 f-text">Wari, Dhaka-1203, Bangladesh</p>
                        </div>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faPhoneAlt} className="f-icon" />
                            <p className="ms-3 mb-0 f-text">+88 017 123429847</p>
                        </div>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faEnvelope} className="f-icon" />
                            <p className="ms-3 mb-0 f-text">Traveezy@example.com</p>
                        </div>
                    </div>
                    <div className="col mb-3 mb-md-0">
                        <h5>OUR Services</h5>
                        <p className="mb-2">Flight Ticket</p>
                        <p className="mb-2">Travel Guide</p>
                        <p className="mb-2">Hotel</p>
                    </div>
                    <div className="col">
                        <h5>Quick Links</h5>
                        <Link to="/home" className="text-decoration-none text-white q-link d-block">
                            Home
                        </Link>
                        <Link to="/about" className="text-decoration-none text-white q-link d-block">
                            About
                        </Link>
                        <Link to="/services" className="text-decoration-none text-white q-link d-block">
                            Services
                        </Link>
                        <Link to="/review" className="text-decoration-none text-white q-link d-block">
                            Reviews
                        </Link>
                        <Link to="/blogs" className="text-decoration-none text-white q-link d-block">
                            Blogs
                        </Link>
                    </div>
                    <div className="col mt-3 mt-md-0">
                        <h5>News Letter</h5>
                        <p>We love reviews and testimonials! Here's your chance to be a part of this website</p>
                        <div className="d-flex align-items-center">
                            <input type="text" className="form-control py-2 pe-5" placeholder="Enter Your Email" />
                            <div className="news-letter bg-warning rounded">
                                <FontAwesomeIcon icon={faPaperPlane} className="mx-2 " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top border-2 bg-gradiant">
                <div className="d-md-flex justify-content-between align-items-center container">
                    <p className="p-3 mb-0 text-white ">© 2021 devShovon13. All rights reserved.</p>
                    <div className="d-flex justify-content-center pb-3 pb-md-0 text-white">
                        <FontAwesomeIcon icon={faTwitter} className="fa-social-icon icon-1 fs-3 me-3" />
                        <FontAwesomeIcon icon={faFacebook} className="fa-social-icon icon-2 fs-3 me-3" />
                        <FontAwesomeIcon icon={faInstagram} className="fa-social-icon icon-3 fs-3 me-3" />
                        <FontAwesomeIcon icon={faLinkedin} className="fa-social-icon icon-4 fs-3 me-3" />
                        <FontAwesomeIcon icon={faYoutube} className="fa-social-icon icon-5 fs-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;