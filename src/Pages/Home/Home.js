import React from 'react';
import Slider from '../Carousel/Slider';
import About from '../About/About';
import Services from '../Services/Services';
import Review from '../Review/Review';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import './Home.css'
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Services />
            <Review />
            <Blogs />
            <ScrollButton />
            <Helmet>
                <title>Traveezy</title>
                <meta name="This is the Home page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
        </>
    );
};

export default Home;