
import React, { useState, useEffect } from 'react';
import './CSS/Home.css';
import cover from './Photos/cover1.jpg';
import cover2 from './Photos/cover2.jpg';
import Carousel from 'react-bootstrap/Carousel';



const List = () => {
    return (
        <div className='det'>
            <h1 className='h'>Banner Title</h1>
            <div className='tir'>
                <p className="lead p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                </p>
                <div className='item vb'>
                    <a className="ui button">BOOK AN APPOINTMENT</a>
                </div>
            </div>
        </div>
    )
}


const MobList = () => {
    return (
        <div className='backimg'>
            <img className='firstimg' src={cover} />
        </div>
    )
}

const Mobile = () => {
    return (
        <Carousel className='homecarousel'>
            <Carousel.Item className='itemsize'>
            <div className='mobdet'>
                <h3 className='mobh'>Banner Title</h3>
                <div className='mobdata'>
                    <p className='lead mobp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                    </p>
                    <div className='item mobbutton'>
                        <a className='ui button'>BOOK AN APPOINTMENT</a>
                    </div>
                </div>
            </div> 
            </Carousel.Item>
            
        </Carousel>    
    )
}

const Home = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })
    return (
        <div className='firstpage'>
            
                {isMobile ? <div className='backimg'>
                    <img className='firstimg' src={cover2} />
                    </div>
                    : <MobList />}
                {isMobile ? <Mobile /> : <List />}
            
        </div>
    )
}

export default Home;
