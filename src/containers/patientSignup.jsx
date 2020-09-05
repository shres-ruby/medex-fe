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
    dob: "",
    address: "",
    phone: "",
    full_name: "",
    height: "",
    weight: "",
    blood_pressure: "",
    health_conditions: "",
    doctor: ""
  }
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/patientsignup/', {
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
            User/Patient Registration
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
                  label= "Email"
                  placeholder="Email"
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={this.state.info.password}
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  label= "Password"
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
                  label= "Confirm Password"
                  placeholder="Confirm password"
                  type="password"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.first_name}
                  name="first_name"
                  fluid
                  iconPosition="left"
                  label= "First Name"
                  placeholder="First Name"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.last_name}
                  name="last_name"
                  fluid
                  iconPosition="left"
                  label= "Last Name"
                  placeholder="Last Name"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.dob}
                  name="dob"
                  fluid
                  iconPosition="left"
                  label= "Date of Birth"
                  placeholder="YYYY-MM-DD"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.address}
                  name="address"
                  fluid
                  iconPosition="left"
                  label= "Address"
                  placeholder="Address"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.phone}
                  name="phone"
                  fluid
                  iconPosition="left"
                  label="Phone"
                  placeholder="Phone"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.full_name}
                  name="full_name"
                  fluid
                  iconPosition="left"
                  label="Full Name"
                  placeholder="Full Name"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.height}
                  name="height"
                  fluid
                  iconPosition="left"
                  label="Height"
                  placeholder="Height"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.weight}
                  name="weight"
                  fluid
                  iconPosition="left"
                  label="Weight"
                  placeholder="Weight"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.blood_pressure}
                  name="blood_pressure"
                  fluid
                  iconPosition="left"
                  label= "Blood Pressure"
                  placeholder="High/Low/Normal/Not sure"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.health_conditions}
                  name="health_conditions"
                  fluid
                  iconPosition="left"
                  label="Health Conditions"
                  placeholder="Enter None if none"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.doctor}
                  name="doctor"
                  fluid
                  iconPosition="left"
                  label="Doctor"
                  placeholder="Enter None if none"
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
