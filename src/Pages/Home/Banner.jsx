import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderData from '../../Data/sliderData';


function Banner() {
  return (
    <>
    <div className='col-lg-9'>
    <Carousel>
      {sliderData.map((a)=>(
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={a.url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      
    </Carousel>
    </div>
    </>
  )
}

export default Banner