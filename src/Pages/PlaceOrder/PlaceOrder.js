import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlaceOrder = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth()
    const history = useHistory()
    const { id } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://traveezy.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const nameRef = useRef()
    const emailRef = useRef()
    const dateRef = useRef()
    const memberRef = useRef()
    const titleRef = useRef()
    const currentUser = user.uid

    const submitHandler = (e) => {
        e.preventDefault()
        const title = titleRef.current.value
        const name = nameRef.current.value
        const email = emailRef.current.value
        const member = memberRef.current.value
        const date = startDate.toLocaleDateString()
        const img = service.img
        const status = "Pending"

        const newService = { currentUser, name, email, title, member, date, img, status }

        axios.post('https://traveezy.herokuapp.com/userServices', newService)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success("Placed Order Successfully")
                    e.target.reset()
                    // setUserEvent({})
                    setTimeout(() => history.push(`/myOrders`), 2000);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <Container className="my-5">
            <ToastContainer theme="colored" />
            <Helmet>
                <title>Place Order | Traveezy</title>
                <meta name="This is the Place Order page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="rounded h-100">
                    <div className="service-img-box">
                        <img src={service.img} alt="" className="img-fluid" />
                        <p className="service-price text-white fw-bold py-1 px-2"><FontAwesomeIcon icon={faDollarSign} className="me-2 text-warning" />{service.price}</p>
                        <p className="service-duration text-white fw-bold py-1 px-2">{service.duration} Days</p>
                    </div>
                    <div className="p-4 pt-0">
                        <h5 className="fw-bold my-2">{service.name}</h5>
                        <p className="text-secondary text-start">{service.info}</p>
                    </div>
                </div>
                <div className="col">
                    <h5 className="text-center text-success border-bottom pb-2 mb-3">Order Details</h5>
                    <form action="" onSubmit={submitHandler}>
                        <div className="mb-4">
                            <input type="text" className="form-control w-100 border-bottom" placeholder="Full Name" value={user.displayName || ""} ref={nameRef} />
                        </div>
                        <div className="mb-4">
                            <input required type="text" className="form-control w-100 border-bottom" placeholder="UserName or Email" value={user.email} ref={emailRef} />
                        </div>
                        <div className="mb-4 d-flex">
                            <DatePicker className="w-100 form-control" selected={startDate || ""} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" ref={dateRef} />
                            <p className="text-start text-secondary w-50 ms-2">( Pick a Date )</p>
                        </div>
                        <div className="mb-4">
                            <input required type="text" className="form-control w-100 border-bottom" placeholder="Total Members" ref={memberRef} />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control w-100 border-bottom" placeholder="Event Name" value={service.name || ""} ref={titleRef} />
                        </div>
                        <button className="btn btn-primary w-100 text-white" type='submit'>Confirm Order</button>
                    </form>

                </div>
            </div>
        </Container>
    );
};

export default PlaceOrder;