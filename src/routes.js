import React from 'react';
import { Route } from 'react-router-dom';

// import Home from './containers/Home';
import Login from './containers/Login';
import patientSignup from './containers/patientSignup';
import doctorSignup from './containers/doctorSignup';
import ProductList from './containers/ProductList';
import Upload from './containers/Upload';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/patientsignup/' component={patientSignup} />
        <Route exact path='/doctorsignup/' component={doctorSignup} />
        <Route exact path = '/upload/' component={Upload} />
    </div>
);

export default BaseRouter;
