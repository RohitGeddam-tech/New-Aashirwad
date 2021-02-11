import React, { useEffect, useState } from 'react';
import './CSS/Offers.css';
import line from './Photos/Line2.jpg';
import scrn from './Photos/offers2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Button, CardDeck } from 'react-bootstrap';
import MultiCarouselPage from './MultiCarosel';
import heart from './Photos/heart1.jpg';
import SlickSlide from './Slickslide'; 

const Scrollmob = () => {
  return(
    <div className='offersdisp'>
            <div className='offersdispscroll'>
                <div className='offersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnread'>Book Now</a>
                </div>
                <div className='offersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnread'>Book Now</a>
                </div>
                <div className='offersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnread'>Book Now</a>
                </div>
                <div className='offersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnread'>Book Now</a>
                </div>
            </div>
        </div>
  )
}


const Mobile = () => {
  return (
    <Carousel className='carouselsize'>
        <Carousel.Item className='mobcarouselflow'>
        {/* <Card className='mobcardsize'>
          <Card.Img className='imgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card>  */}
        <Scrollmob />

        </Carousel.Item>
  
        {/* <Carousel.Item className='mobcarouselflow'>
        <Card className='mobcardsize'>
          <Card.Img className='imgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card>  
        </Carousel.Item> */}
      </Carousel>
  )
}

const Intro = () => {
  return (
    <div className='intr'>
      <h2>Offers</h2>
      <img src={line} alt='...' />
    </div>
  )
}



const Offers = () => {

  const [isMobile, setMobile] = useState(
    window.matchMedia('(max-width:800px)').matches
  );
  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile(window.matchMedia('(max-width:800px)').matches)
    })
  })

  return (
    <div className='sizpage'>
      {isMobile ? <Intro /> : <Intro />}
      {/* {isMobile ? <Mobile /> : <MultiCarouselPage />} */}
      <SlickSlide />
    </div>
  )
}

export default Offers;