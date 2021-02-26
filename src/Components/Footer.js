import React, {useState, useEffect} from 'react';
import './CSS/Footer.css';
import {Link} from 'react-router-dom';

const Desktop = () => {
    return(
        <div className='insidefooter'>
            <div className='firstrectangle'>
                <Link to='/New-Aashirwad/About'><h3 className='titlenames'>About Us</h3></Link>
                <Link to='/New-Aashirwad/About'><h3 className='titlenames'>PATHOLOGICAL EQUIPMENTS</h3></Link>
                {/* <Link to='/New-Aashirwad/About'><h3 className='titlenames'>CONTACT US</h3></Link> */}
                <a href='#msheet' className='titlenames'>CONTACT US</a>
                <Link to='/New-Aashirwad/About'><h3 className='titlenames'>PRIVACY POLICY</h3></Link>
                <Link to='/New-Aashirwad/About'><h3 className='titlenames'>TERMS & CONDITIONS</h3></Link>
            </div>
            <div className="midline"></div>
            <div className='secondrectangle'>
                <div className='innerrectangle'>
                <Link to='/New-Aashirwad/About'><i className="big facebook icon"></i></Link>
                <Link to='/New-Aashirwad/About'><i className="big instagram icon"></i></Link>
                <Link to='/New-Aashirwad/About'><i className="big linkedin icon"></i></Link>
                </div>
            </div>
            <div className='lastrectangle'>
                <h3 className='lineatthelast'>copyright   <i className="copyright outline icon"></i>  2020 All Rights reserved </h3>
            </div>
        </div>
    )
}

const Mobile = () => {
    return(
        <div className='insidefooter'>
            <div className='firstmobrectangle'>
            <Link to='/New-Aashirwad/About'><h3 className='titlenames'>About Us</h3></Link>
            {/* <Link to='/New-Aashirwad/About'> */}
                <a href='#msheet' className='titlenames'>PATHOLOGICAL EQUIPMENTS</a>
            {/* </Link> */}
            {/* <Link to='/New-Aashirwad/About'> */}
                <a href='#msheet' className='titlenames'>CONTACT US</a>
                {/* </Link> */}
            </div>
            <div className='secondrectangle'>
                <div className='innerrectangle'>
                <Link to='/New-Aashirwad/About'><i className="big facebook icon"></i></Link>
                <Link to='/New-Aashirwad/About'><i className="big instagram icon"></i></Link>
                <Link to='/New-Aashirwad/About'><i className="big linkedin icon"></i></Link>
                </div>
            </div>
            <div className='lastrectangle'>
                <h3 className='lineatthelast'>copyright   <i className="copyright outline icon"></i>  2020 All Rights reserved </h3>
            </div>
        </div>
    )
}


const Footer = () => {

    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })

    return (
        <div className='footerbox'>
            {isMobile ? <Mobile /> : <Desktop />}
        </div>
    )
}


export default Footer;