import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
import "semantic-ui-css/semantic.min.css";
import CustomLayout from "./containers/Layout";
import ProductList from "./containers/ProductList";
import Login from "./containers/Login";
import patientSignup from "./containers/patientSignup";
import doctorSignup from './containers/doctorSignup';
import Upload from './containers/Upload';
import ProfileView from "./containers/ProfileView";
import StartReset from "./containers/startReset";
import PasswordReset from "./containers/passwordReset";
import Logout from "./containers/Logout";
import Appointment from "./containers/Appointment";
import Scheduled from "./containers/Scheduled";
import ProfileList from "./containers/profileList";
import DoctorList from "./containers/doctorList";


class App extends Component {
  state = {
    token: '',
  }
 
  userLogin =(token) => {
    localStorage.setItem('token',token);   
    console.log(token);     
}
  
  render() {
    return (
      <Router>
        <CustomLayout {...this.props}>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/login/' userLogin={this.userLogin} render={props => <Login {...props}
        userLogin={this.userLogin} />} />
        <Route exact path='/patientsignup/' component={patientSignup} />
        <Route exact path='/doctorsignup/' component={doctorSignup} />
        <Route exact path = '/upload/' token={this.token}
        render={props => <Upload {...props} token={this.token} />} />
        <Route exact path='/patient-profiles/' token={this.token}
        render={props => <ProfileList {...props} token={this.token} />} />
        <Route exact path='/doctor-profiles/' component={DoctorList} />
        <Route exact path={'/profile/:email/'} token={this.token}
        render={props => <ProfileView {...props} token={this.token} />} />
        <Route exact path='/reset-password/' component={StartReset} />
        <Route exact path='/api/password_reset/:id' render={props => <PasswordReset {...this.props} {...props}/>} />
        <Route exact path='/logout/' component={Logout} />
        <Route exact path='/appointment/' component={Appointment} />
        <Route exact path='/scheduled/' component={Scheduled} />
        </CustomLayout>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

