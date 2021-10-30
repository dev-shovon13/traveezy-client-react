import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
    return (
        <div className="top-bar py-2 mb-0">
            <Container className="d-flex justify-content-between align-items-center">
                <div className="d-flex text-white align-items-center">
                    <div className="d-flex me-3">
                        <FontAwesomeIcon icon={faClock} className="fa-social-icon text-info fs-4 me-1 " />
                        <p className=" mb-0">24/7 We are Open</p>
                    </div>
                    <div className="d-flex me-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-social-icon text-danger fs-4 me-1 " />
                        <p className=" mb-0">62 B.C.C Road, Dhaka</p>
                    </div>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-social-icon text-white fs-4 me-1 " />
                        <p className=" mb-0">Traveezy@example.com</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center pb-3 pb-md-0">
                    <div className="bg-light top-opacity rounded p-1 me-2">
                        <FontAwesomeIcon icon={faTwitter} className="top-icon-1 fs-3" />
                    </div>
                    <div className="bg-light top-opacity rounded p-1 me-2">
                        <FontAwesomeIcon icon={faFacebook} className="top-icon-2 fs-3" />
                    </div>
                    <div className="bg-light top-opacity rounded p-1 me-2">
                        <FontAwesomeIcon icon={faInstagram} className="top-icon-3 fs-3" />
                    </div>
                    <div className="bg-light top-opacity rounded p-1">
                        <FontAwesomeIcon icon={faLinkedin} className="top-icon-4 fs-3" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopBar;