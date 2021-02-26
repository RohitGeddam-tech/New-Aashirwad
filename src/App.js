import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Offers from './Components/Offers';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

const View = () => {
  return(
    <div className='App'>
      <Home />
      <section>
      <AboutUs />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Offers />
      </section>
      <section>
        <Contacts />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

const App=() => {
  return (
    <div className="App">
     <View />
    </div>
  );
}

export default App;
