import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import moment from 'moment';

const MyOrders = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://traveezy.herokuapp.com/userServices")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const userServices = []
    services.filter(service => (service.currentUser === user.uid) && userServices.push(service))

    // delete a service 
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconClass: "custom-icon",
            showCancelButton: true,
            confirmButtonClass: "swal-button",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonClass: "swal-button",
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://traveezy.herokuapp.com/userServices/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.error("Deleted Order Successfully")
                            const remainingServices = services.filter(service => service._id !== id)
                            setServices(remainingServices)
                        }
                    })
            }
        })
    }
    return (
        <div className="bg-srv pb-5">
            <ScrollButton />
            <Helmet>
                <title>My Orders | Traveezy</title>
                <meta name="This is the My Orders page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-lg-2 g-4">
                    {
                        userServices.length === 0 ? <h2 className="text-center text-success w-75 mx-auto">You Have No Orders</h2>
                            :
                            userServices.map(service => {
                                return <div className="col" key={service._id}>
                                    <div className="bg-white radius p-3 d-md-flex service-body">
                                        <div className="text-center mb-2 mb-md-0">
                                            <img src={service.img} alt="" className="img-fluid srv-img radius me-3" />
                                        </div>
                                        <div>
                                            <h5>Name: {service.name}</h5>
                                            <p className="mb-0"><span className="fw-light">Email: </span> {service.email ? service.email : "Not Available"}</p>
                                            <p className="mb-0"><span className="fw-light">Travel Destination: </span>{service.title}</p>
                                            <p className="mb-0"><span className="fw-light">Total Members: </span>{service.member}</p>
                                            <p className="mb-0"><span className="fw-light">Date: </span> {moment(service.date).format('DD-MM-YY')}</p>
                                            <p className="status">{service.status}</p>
                                            <div className="service-btn">
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(service._id)}>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;