import { faQuoteRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Review.css'

const Review = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    const items = [
        <div className="item">
            <div className="p-4 pb-1 bg-white rounded shadow-sm h-100 review-width">
                <div className="d-flex justify-content-between">
                    <img src="https://i.ibb.co/rfRWmLd/developer-1.jpg" alt="" style={{ height: "70px", width: "70px" }} className="rounded-circle me-4" />
                    <FontAwesomeIcon icon={faQuoteRight} className="me-2 right-quote" style={{ fontSize: "55px", color: "#EEEEEE" }} />
                </div>
                <div className="">
                    <h4>ইসলাম মাহিম</h4>
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStarHalfAlt} className="me-2 text-warning" />
                </div>
                <p className="text-secondary mt-2 px-4">Great communication, timely responses and organised.</p>
            </div>
        </div>,
        <div className="item">
            <div className="p-4 pb-1 bg-white rounded shadow-sm h-100 review-width">
                <div className="d-flex justify-content-between">
                    <img src="https://i.ibb.co/7kzyfTL/developer-2.jpg" alt="" style={{ height: "70px", width: "70px" }} className="rounded-circle me-4" />
                    <FontAwesomeIcon icon={faQuoteRight} className="me-2 right-quote" style={{ fontSize: "55px", color: "#EEEEEE" }} />
                </div>
                <div className="">
                    <h4>Raiyan Ahmed</h4>
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStarHalfAlt} className="me-2 text-warning" />
                </div>
                <p className="text-secondary mt-2 px-4">Everything went smoothly and we were very happy with the whole experience.</p>
            </div>
        </div>,
        <div className="item">
            <div className="p-4 pb-1 bg-white rounded shadow-sm h-100 review-width">
                <div className="d-flex justify-content-between">
                    <img src="https://i.ibb.co/F6mwj7D/developer-6.jpg" alt="" style={{ height: "70px", width: "70px" }} className="rounded-circle me-4" />
                    <FontAwesomeIcon icon={faQuoteRight} className="me-2 right-quote" style={{ fontSize: "55px", color: "#EEEEEE" }} />
                </div>
                <div className="">
                    <h4>রাহাত আহমেদ</h4>
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                    <FontAwesomeIcon icon={faStarHalfAlt} className="me-2 text-warning" />
                </div>
                <p className="text-secondary mt-2 px-4">I found your service very good in the holiday acquisition process.</p>
            </div>
        </div>,

    ]
    return (
        <div className="my-4">
            <Helmet>
                <title>Review | Traveezy</title>
                <meta name="This is the review page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>

            <div className="pb-5 pt-3">
                <div className="container py-3 text-center text-md-start">
                    <h5 className="color">TESTIMONIAL</h5>
                    <h1 className="service-txt w-50 mx-auto mx-md-0 review-txt">What Our Happy Clients Say</h1>
                </div>

                <div className="slider2 my-5">
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        controlsStrategy="alternate"
                        autoPlay
                        autoPlayStrategy="none"
                        autoPlayInterval={1000}
                        animationDuration={5000}
                        animationType="fadeout"
                        infinite
                    />
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default Review;