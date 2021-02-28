import React, {useState, useEffect} from 'react';
import './CSS/Footer.css';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'

const Desktop = () => {
    return(
        <div className='insidefooter'>
            <div className='firstrectangle'>
                <HashLink to='/New-Aashirwad/About/#top'><h3 className='titlenames'>About Us</h3></HashLink>
                <HashLink to='/New-Aashirwad/About/#top'><h3 className='titlenames'>PATHOLOGICAL EQUIPMENTS</h3></HashLink>
                <HashLink to='/New-Aashirwad/#msheet'><h3 className='titlenames'>CONTACT US</h3></HashLink>
                <HashLink to='/New-Aashirwad/About#top'><h3 className='titlenames'>PRIVACY POLICY</h3></HashLink>
                <HashLink to='/New-Aashirwad/About#top'><h3 className='titlenames'>TERMS & CONDITIONS</h3></HashLink>
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
            <HashLink to='/New-Aashirwad/About/#top'><h3 className='titlenames'>About Us</h3></HashLink>
            <HashLink to='/New-Aashirwad/About/#top'><h3 className='titlenames'>PATHOLOGICAL EQUIPMENTS</h3></HashLink>
            <HashLink to='/New-Aashirwad/#msheet'><h3 className='titlenames'>CONTACT US</h3></HashLink>
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