import React from 'react';
import { Carousel } from 'react-bootstrap';
import banners from "./sliderdata"
import './Slider.css'

const Slider = () => {
    return (
        <Carousel>
            {
                banners.map(banner => {
                    return <Carousel.Item key={banner.id}>
                        <img
                            className="d-block w-100 slider-img"
                            src={banner.img}
                            alt="Slider"
                        />
                        <Carousel.Caption>
                            <h3>{banner.title}</h3>
                            <p>{banner.info}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })
            }
        </Carousel>
    );
};

export default Slider;