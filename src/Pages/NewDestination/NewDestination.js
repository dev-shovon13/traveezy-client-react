import axios from 'axios';
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import './NewDestination.css'

const NewDestination = () => {
    const history = useHistory()

    const nameRef = useRef()
    const infoRef = useRef()
    const imageRef = useRef()
    const priceRef = useRef()
    const durationRef = useRef()

    // ADD an Destination
    const submitHandler = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const info = infoRef.current.value
        const img = imageRef.current.value
        const price = priceRef.current.value
        const duration = durationRef.current.value

        const newDestination = { img, name, info, price, duration }

        axios.post('https://traveezy.herokuapp.com/services', newDestination)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success("Added Destination Successfully")
                    e.target.reset()
                    setTimeout(() => history.push(`/services`), 2000);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className="container py-4">
            <ScrollButton />
            <Helmet>
                <title>New Destination | Traveezy</title>
                <meta name="This is the New Destination page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <form onSubmit={submitHandler} className="addnew w-50 mx-auto">
                <div className="fw-bold">
                    <div className="mb-3">
                        <label className="form-label">Destination Title</label>
                        <input required ref={nameRef} type="text" className="form-control" placeholder="Destination Title" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Destination Description</label>
                        <textarea ref={infoRef} className="form-control" placeholder="Details" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input required ref={priceRef} type="number" className="form-control" placeholder="Price" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Duration</label>
                        <input required ref={durationRef} type="number" className="form-control" placeholder="Duration" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Banner</label><br />
                        <input required ref={imageRef} type="text" className="form-control" placeholder="Please Give Valid Image Link" />
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-3">Add Destination</button>
                </div>
            </form>
        </div>
    );
};

export default NewDestination;