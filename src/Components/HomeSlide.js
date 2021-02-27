import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Popup from './Popup';


export default class SimpleSlider extends Component {

  state={Mobile: window.matchMedia('(max-width:400px)').matches};
  componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({Mobile: window.matchMedia('(max-width:400px)').matches})
    })
  }

  state={small : window.matchMedia('(max-height:570px)').matches};
  componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({small: window.matchMedia('(max-height:570px)').matches})
    })
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{width:'80%', position:'absolute', marginTop:'100px', marginLeft:'10%'}}>
        <Slider {...settings}>
          <div>
            <div className='mobdet'>
                <div className='mobdata'>
                <h3 className='mobh'>Banner Title</h3>
                    <p className='lead mobilep'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                    </p>
                    {this.state.small ? <div className='item mobbutton'>
                    <Link to='/New-Aashirwad/Form'> 
                        <button className="ui button">
                          BOOK AN APPOINTMENT
                        </button> 
                      </Link>
                    </div> : <div className='item mobbutton'>
                      {this.state.Mobile ? <Link to='/New-Aashirwad/Form'> 
                        <button className="ui button">
                          BOOK AN APPOINTMENT
                        </button> 
                      </Link> : <Popup />} </div>}
                </div>
            </div> 
          </div>
          <div>
            <div className='mobdet'>
                <div className='mobdata'>
                <h3 className='mobh'>Banner Title</h3>
                    <p className='lead mobilep'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                    </p>
                    {this.state.small ? <div className='item mobbutton'>
                    <Link to='/New-Aashirwad/Form'> 
                        <button className="ui button">
                          BOOK AN APPOINTMENT
                        </button> 
                      </Link>
                    </div> : <div className='item mobbutton'>
                      {this.state.Mobile ? <Link to='/New-Aashirwad/Form'> 
                        <button className="ui button">
                          BOOK AN APPOINTMENT
                        </button> 
                      </Link> : <Popup />} </div>}
                </div>
            </div> 
          </div>
          <div>
            <div className='mobdet'>
                <div className='mobdata'>
                <h3 className='mobh'>Banner Title</h3>
                    <p className='lead mobilep'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                    </p>
                    {this.state.small ? <div className='item mobbutton'>
                    <Link to='/New-Aashirwad/Form'> 
                        <button className="ui button">
                          BOOK AN APPOINTMENT
                        </button> 
                      </Link>
                    </div> : <div className='item mobbutton'>
                      {this.state.Mobile ? <Link to='/New-Aashirwad/Form'> 
                        <button className="ui button">
                          BOOK AN APPOINTMENT
                        </button> 
                      </Link> : <Popup />} </div>}
                </div>
            </div> 
          </div>
        </Slider>
      </div>
    );
  }
}