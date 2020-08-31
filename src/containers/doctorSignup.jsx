import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";


class RegistrationForm extends React.Component {
  state = {
    info: {
    email: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    phone: "",
    specialty: "",
    availability: ""
  }
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/doctorsignup/', {
      method : 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.info)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
      }
    ).catch( error => console.log(error));
    this.props.history.push('login/')
  };

  handleChange = e => {
    const data = this.state.info;
    data[e.target.name] = e.target.value;
    this.setState({info: data});
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Doctor Registration
          </Header>
          <React.Fragment>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.email}
                  name="email"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email"
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={this.state.info.password}
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={this.state.info.password2}
                  name="password2"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm password"
                  type="password"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.first_name}
                  name="first_name"
                  fluid
                  iconPosition="left"
                  placeholder="First Name"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.last_name}
                  name="last_name"
                  fluid
                  iconPosition="left"
                  placeholder="Last Name"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.phone}
                  name="phone"
                  fluid
                  iconPosition="left"
                  placeholder="Phone"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.specialty}
                  name="specialty"
                  fluid
                  iconPosition="left"
                  placeholder="Specialty"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.availability}
                  name="availability"
                  fluid
                  iconPosition="left"
                  placeholder="Availability"
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick = {this.handleSubmit}
                >
                  Signup
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </Message>
          </React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RegistrationForm;
