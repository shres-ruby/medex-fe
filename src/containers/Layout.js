import React from "react";
import {
  Container,
  Menu,
} from "semantic-ui-react";
import { Link } from "react-router-dom";


class CustomLayout extends React.Component {
  
    render() {
  
      return (
        <div>
          <Menu inverted>
            <Container>
              <Link to="/">
                <Menu.Item header>Home</Menu.Item>
              </Link>
              <Link to="/login">
                <Menu.Item header>Login</Menu.Item>
              </Link>
              <Link to="/patientsignup">
                <Menu.Item header>Register as User/Patient</Menu.Item>
              </Link>
              <Link to="/doctorsignup">
                <Menu.Item header>Register as doctor</Menu.Item>
              </Link>
              <Link to="/doctor-profiles/">
                <Menu.Item header>Our doctors</Menu.Item>
              </Link>
            </Container>
          </Menu>
  
          {this.props.children}
  
        </div>
      );
    }
  }

  export default CustomLayout;

