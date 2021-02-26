import React, { useState, useEffect } from 'react';
import './CSS/Header.css';
import { BsX } from 'react-icons/bs';
import logo from './Photos/logo.svg';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import Hamburger from 'hamburger-react';
import Collapse from '@material-ui/core/Collapse';


// ReactModal.setAppElement('#main');
// const Contact = () => {
//     if(Link != (to='/New-Aashirwad')){
//     alert('this funtions only on the homepage so plase go to the homepage.')
//     }
// }

const List = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-height:550px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-height:550px)').matches)
        })
    })
    
    return (
        // <div style={style}>
        <div className="ui secondary  menu">
            <Link style={{ marginTop: '10px' }} to='/New-Aashirwad/About'>
                <button href='/New-Aashirwad/About' className="ui button item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    About Us
                    </button>
            </Link>
            <Link style={{ marginTop: '10px' }} to='/New-Aashirwad/Pathology'>
                <button href='/New-Aashirwad/Pathology' className="ui button item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    Pathological Equipments
                    </button>
            </Link>
            {/* <Link style={{ marginTop: '10px' }} to='/New-Aashirwad/Contacts'> */}
                <a href='#msheet' className="item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)', marginTop: '3.5px' }}>
                    Contact Us
                </a>
            {/* </Link> */}
                { isMobile ? <div className="item mobbtn"> <Link to='/New-Aashirwad/Form'> <button className="ui button">
                    BOOK AN APPOINTMENT
                </button> </Link> </div> : 
                   <div className="item mobbtn">  <Popup /> </div>
                }
        
        </div>
    )
}

const MobileList = () => {
    const [isActive, setActive] = useState(false);
    const [Tab, setTab] = useState(
        window.matchMedia('(max-width:400px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setTab(window.matchMedia('(max-width:400px)').matches)
        })
    })

    return (
        <>
            <a
                className='big bars icon'
                onClick={() => {
                    setActive(!isActive);
                }}
            >
                {/* {isActive ? <BsX size='35px' /> : <i className='large bars icon'></i>} */}
                <Hamburger direction='left' className='ham' duration={0.2} color='black' toggled={isActive} toggle={setActive} />
            </a>
            <Collapse className='colapse' in={isActive}> 
            <div className='navbtn'>
                <Link to='/New-Aashirwad/About' style={{ marginTop: '25px' }}>
                    <button onClick={()=>{setActive(!isActive)}} className='ui button item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> About Us</button>
                </Link>
                <Link style={{ marginTop: '25px' }} to='/New-Aashirwad/Pathology'>
                    <button onClick={()=>{setActive(!isActive)}} className='ui button item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> Pathological Equipments</button>
                </Link>
                {/* <Link style={{ marginTop: '25px' }} to='/New-Aashirwad/Contacts'>
                    <a onClick={()=>{setActive(!isActive)}} className='item itemname' style={{ color: 'rgba(123, 127, 140, 0.5)' }}> Contact Us</a>
                </Link> */}
                 <a href='#msheet' onClick={()=>{setActive(!isActive)}} className="ui item itemname" style={{ color: 'rgba(123, 127, 140, 0.5)' }}>
                    Contact Us
                </a>
                <div className="itembtn"> {Tab ? <Link style={{ marginTop: '25px' }} to='/New-Aashirwad/Form'>
                        <button onClick={()=>{setActive(!isActive)}} className="ui button">BOOK AN APPOINTMENT</button>
                    </Link> : <Popup />}
                </div>
            </div>
            </Collapse>
        </>
    )
}

const Intro = () => {
    return (
        <div className='brand-name'>
            <Link to='/New-Aashirwad'><img src={logo} /></Link>
        </div>
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

    return (
        <header>
            <nav className='navbar navbar-secondary' style={{ width: '100%' }}>
                {isMobile ? <div className='Mobbrand-name'>
                    <Link to='/New-Aashirwad'><img src={logo} /></Link>
                </div> : <Intro />}
                {isMobile ? <MobileList /> : <List />}
            </nav>
        </header>
    )
}

export default Header;

