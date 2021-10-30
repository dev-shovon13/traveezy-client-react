import { faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';


const Service = (props) => {
    const { user } = useAuth()
    const { id, img, name, info, price, duration } = props.service

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
        <Col xs={12} md={6} lg={4}>
            <div className="bg-white rounded h-100 service-item">
                <div className="service-img-box">
                    <img src={img} alt="" className="img-fluid service-img" />
                    <p className="service-price text-white fw-bold py-1 px-2"><FontAwesomeIcon icon={faDollarSign} className="me-2 text-warning" />{price}</p>
                    <p className="service-duration text-white fw-bold py-1 px-2">{duration} Days</p>
                </div>
                <div className="p-4 pt-0">
                    <h5 className="fw-bold my-2">{name}</h5>
                    <p className="text-secondary text-start">{info}</p>
                    <Link to={"/placeOrder/" + id}>
                        <div className="btn btn-outline-primary" onClick={notify}><FontAwesomeIcon icon={faShoppingCart} className="me-2" />Book Now</div>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;