import React from 'react';
import { Route } from 'react-router-dom';

import Login from './containers/Login';
import patientSignup from './containers/patientSignup';
import doctorSignup from './containers/doctorSignup';


const BaseRouter = () => (
    <div>
        <Route exact path='/login/' component={Login} />
        <Route exact path='/patientsignup/' component={patientSignup} />
        <Route exact path='/doctorsignup/' component={doctorSignup} />
    </div>
);

export default BaseRouter;
