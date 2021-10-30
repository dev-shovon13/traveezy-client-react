import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import aboutImg from '../../images/about.jpg'
import { Helmet } from 'react-helmet';
import './About.css'

const About = () => {
    return (
        <div className="bg">
            <Helmet>
                <title>About | Traveezy</title>
                <meta name="This is the About page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
            <div className="container">
                <Row className="align-items-center">
                    <Col xs={12} md={5} lg={6}>
                        <img src={aboutImg} alt="" className="img-fluid py-5" />
                    </Col>
                    <Col xs={12} md={7} lg={6}>
                        <div className="p-3 mt-5 ps-5 text-center">
                            <div className="text-center text-md-start ">
                                <h5 className="color">ABOUT US</h5>
                                <h1 className="">Traveezy || Travel Made Easy</h1>
                                <p className="text-secondary">Start planning your dream trip today! Traveezy is the largest independently owned travel agency headquartered in Dhaka, and consistently ranked among the top 5 largest in the Bangladesh</p>
                            </div>
                            <div className="mt-4 text-start">
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                    <h5>Cost Effective</h5>
                                </div>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                    <h5>No Hidden Charges</h5>
                                </div>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                    <h5>Quality Assurance</h5>
                                </div>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                    <h5>Hassle Free Travelling</h5>
                                </div>
                            </div>
                            <Button variant="outline-primary" className="fs-5 py-1 px-5 mt-4">More About Us</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <ScrollButton />
        </div>
    );
};

export default About;