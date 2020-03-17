import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function CarouselContainer(props) {
    const { images } = props;

    const makeCarousel = images.map(({ img, alt }) =>
        <div>
            <img src={img} />
            <p className="legend">{alt}</p>
        </div>)

    return (
        <Carousel infiniteLoop emulateTouch showThumbs={false}>
            {makeCarousel}
        </Carousel>
    );
}

export default CarouselContainer;