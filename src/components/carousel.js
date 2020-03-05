import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function MyCarousel() {
  return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src = "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Ocean View</h3>
            <p> This is a natural beauty view of the ocean side..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Forest View</h3>
            <p>Thi is the forest view spot of the Japan's Shirokioma mountain.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Sambia Forest Tree</h3>
            <p>A forest tour to Germany's largest tree.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default MyCarousel;
/*
<Image src="holder.js/100px250" fluid />
*/