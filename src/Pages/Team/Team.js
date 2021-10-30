import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
import './Team.css'


const Team = () => {
    const { user } = useAuth()
    // rendering data into UI 
    const [doctors, setDoctors] = useState([])

    // loading data from local json file 
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const notify = () => {
        if (!user.uid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Log In to Continue!',
            })
        }
    }

    return (
        <Container className="pb-5 text-center">
            <div className="text-center pb-5">
                <h5 className="text-primary pt-3">OUR TEAM</h5>
                <h1 className="service-txt">Our Expert Doctors</h1>
                <p className="border-bottom shadow-sm mt-3 mb-0"></p>
            </div>
            <Row className="g-4">
                {
                    doctors.map(doctor => {
                        return <Col key={doctor.id} xs={12} md={6} lg={3}>
                            <div className="border rounded h-100">
                                <div className="doctor-img">
                                    <img src={doctor.img} alt="" className="img-fluid" />
                                    <div className="socialIcons text-center w-100">
                                        <FontAwesomeIcon icon={faFacebook} className="fa-social-icon icon-trans icon-2 fs-3 me-3" />
                                        <FontAwesomeIcon icon={faTwitter} className="fa-social-icon icon-trans icon-1 fs-3 me-3" />
                                        <FontAwesomeIcon icon={faInstagram} className="fa-social-icon icon-trans icon-3 fs-3 me-3" />
                                        <FontAwesomeIcon icon={faLinkedin} className="fa-social-icon icon-trans icon-4 fs-3" />
                                    </div>
                                </div>
                                <div className="p-2 pb-3">
                                    <h5 className="mt-3 fw-light">{doctor.name}</h5>
                                    <p className="text-secondary fs-5 fw-light">Speciality: <span className="text-success fw-normal">{doctor.department}</span></p>
                                    <Link to={`/appointment/${doctor.id}`}>
                                        <button className="btn btn-outline-success btn-sm"
                                            onClick={notify}>Get Appointment</button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    })
                }
            </Row>
            <Button variant="primary" className="fs-5 py-1 px-5 mt-5">More Doctors</Button>
            <ScrollButton />
            <Helmet>
                <title>Doctors | Traveezy</title>
                <meta name="This is the Doctors page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
        </Container>
    );
};

export default Team;