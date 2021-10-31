import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Service from './Service/Service';
import { Helmet } from 'react-helmet';
import './Services.css'
import useAuth from '../../hooks/useAuth';

const Services = () => {
    const { isLoading } = useAuth()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://traveezy.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (isLoading) {
        return <div className="text-center pt-5 w-75 mx-auto"><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <div className="bg-service pb-5">
            <Helmet>
                <title>Services | Traveezy</title>
                <meta name="This is the services page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
            <Container>
                <div className="text-center py-3">
                    <h5 className="color">Best offers trips from us</h5>
                    <h1 className="service-txt w-75 mx-auto">Best Value Trips</h1>
                </div>
                <Row className="text-center g-4">
                    {
                        services.map(service => <Service key={service._id} service={service} />)
                    }
                </Row>
            </Container>
            <ScrollButton />
        </div>
    )
};

export default Services;