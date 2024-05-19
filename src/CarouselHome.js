import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import imagen1 from './imagenes/Notly.png';
import imagen2 from './imagenes/Notly 2.png';
import imagen3 from './imagenes/Notly 3.png'; 

function CarouselHome() {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={imagen1} alt="Slide 1" />
      </div>
      <div>
        <img src={imagen2} alt="Slide 2" />
      </div>
      <div>
        <img src={imagen3} alt="Slide 3" />
      </div>
    </Carousel>
  );
}

export default CarouselHome;
