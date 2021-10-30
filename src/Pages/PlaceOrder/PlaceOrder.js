import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { id } = useParams()
    return (
        <div>
            <Helmet>
                <title>Place Order | Traveezy</title>
                <meta name="This is the Place Order page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
            <h1>place order {id}</h1>
        </div>
    );
};

export default PlaceOrder;