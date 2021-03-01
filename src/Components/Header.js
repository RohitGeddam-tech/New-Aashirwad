import React, { useState, useEffect } from 'react';
import './CSS/Header.css';
import { BsX } from 'react-icons/bs';
import logo from './Photos/logo.svg';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import Hamburger from 'hamburger-react';
import Collapse from '@material-ui/core/Collapse';
import {NavHashLink ,HashLink} from 'react-router-hash-link'

const List = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-height:550px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-height:550px)').matches)
        })
    })
    
    return (<>
        <div className='brand-name'>
            <NavHashLink to='/New-Aashirwad#top'><img src={logo} /></NavHashLink>
            </div>
        <div className="ui secondary  menu">
            <NavHashLink 
                activeClassName='active ui button item itemname' 
                style={{ color: 'rgba(123, 127, 140, 0.5)'  }} 
                className="ui button item itemname"
                to='/New-Aashirwad/About#top'>
                    About Us
            </NavHashLink>
            <NavHashLink 
                activeClassName='active ui button item itemname' 
                style={{ color: 'rgba(123, 127, 140, 0.5)'  }} 
                className="ui button item itemname"
                to='/New-Aashirwad/Pathology#top'>
                    Pathological Equipments
            </NavHashLink>
            <NavHashLink 
                activeClassName='active ui button item itemname' 
                style={{ color: 'rgba(123, 127, 140, 0.5)'  }} 
                className="ui button item itemname"
                to='/New-Aashirwad/#Contact'>
                    Contact Us
            </NavHashLink>
                { isMobile ? <div className="item mobbtn"> <Link to='/New-Aashirwad/Form'> <button className="ui button">
                    BOOK AN APPOINTMENT
                </button> </Link> </div> : 
                   <div className="item mobbtn">  <Popup /> </div>
                }
        </div>
        </>
    )
}


const MobileList = () => {
    const [isActive, setActive] = useState(false);
    const [Tab, setTab] = useState(
        window.matchMedia('(max-width:470px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setTab(window.matchMedia('(max-width:470px)').matches)
        })
    })

    return (
        <>
        <div className='Mobbrand-name'>
                    <HashLink to='/New-Aashirwad#top' onClick={()=>{setActive(false)}}><img src={logo} /></HashLink>
                </div> 
            <a
                className='big bars icon'
                onClick={() => {
                    setActive(!isActive);
                }}
            >
                <Hamburger direction='left' className='ham' duration={0.2} color='black' toggled={isActive} toggle={setActive} />
            </a>
            <Collapse className='colapse' in={isActive}> 
            <div className='navbtn'>
                <NavHashLink 
                    activeClassName='active ui button item itemname' 
                    style={{ color: 'rgba(123, 127, 140, 0.5)'  }} 
                    className="ui button item itemname"
                    onClick={()=>{setActive(!isActive)}}
                    to='/New-Aashirwad/About#top'>
                        About Us
                </NavHashLink>
                <NavHashLink 
                    activeClassName='active ui button item itemname' 
                    style={{ color: 'rgba(123, 127, 140, 0.5)'  }} 
                    className="ui button item itemname"
                    onClick={()=>{setActive(!isActive)}}
                    to='/New-Aashirwad/Pathology#top'>
                        Pathological Equipments
                </NavHashLink>
                <NavHashLink 
                    activeClassName='active ui button item itemname' 
                    style={{ color: 'rgba(123, 127, 140, 0.5)'  }} 
                    className="ui button item itemname"
                    onClick={()=>{setActive(!isActive)}}
                    to='/New-Aashirwad/#msheet'>
                        Contact Us
                </NavHashLink>
                <div className="itembtn"> {Tab ? <Link style={{ marginTop: '25px' }} to='/New-Aashirwad/Form'>
                        <button onClick={()=>{setActive(!isActive)}} className="ui button">BOOK AN APPOINTMENT</button>
                    </Link> : <Popup />}</div>
            </div>
            </Collapse>
        </>
    )
}


const Header = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-width:850px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-width:850px)').matches)
        })
    })
    // const [isActive, setActive] = useState(false);

    return (
        <header>
            <nav className='navbar navbar-secondary' style={{ width: '100%' }}>
                {isMobile ? <MobileList /> : <List />}
            </nav>
        </header>
    )
}

export default Header;

