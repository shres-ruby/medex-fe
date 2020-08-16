import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';

import CustomLayout from './containers/Layout';
import { Switch } from 'react-router-dom';
import{ connect } from 'react-redux';
import BaseRouter from './routes';
// import UserList from './containers/UserListView';


class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  
  render() {
  return (
    <Switch>
    <div>
      <CustomLayout {...this.props}>
        <BaseRouter />
      </CustomLayout>
    </div>
    </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
