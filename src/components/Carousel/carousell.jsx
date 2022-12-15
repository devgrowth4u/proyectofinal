import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ciudaddelnino.cl/wp-content/uploads/2022/11/banner-web-2.jpg"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ciudaddelnino.cl/wp-content/uploads/2022/09/banner-web.jpg"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ciudaddelnino.cl/wp-content/uploads/2020/11/banner-web-mision_Mesa-de-trabajo-1.jpg"
          alt="Slide 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;