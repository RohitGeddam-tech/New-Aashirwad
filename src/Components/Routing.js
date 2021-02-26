import React,{useEffect, useState} from 'react';
import Header from './Header';
import App from '../App';
import FullPage from '../AboutUs/FullPage';
import Contacts from './Contacts';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from './Form';

const Routing = () => {
    return(<Router>
            <div className='App'>
                <Header />
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/New-Aashirwad' exact component={App}/>
                    <Route path='/New-Aashirwad/About' component={FullPage}/>
                    <Route path='/New-Aashirwad/Contacts' component={Contacts}/>
                    <Route path='/New-Aashirwad/Form' component={Form}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Routing;
