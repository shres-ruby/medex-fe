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


class App extends Component {
  state = {
    token: '',
  }
  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }
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
        <Route exact path = '/upload/' component={Upload} />
        <Route exact path={'/profile/:email/'} token={this.token}
        render={props => <ProfileView {...props} token={this.token} />} />
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

