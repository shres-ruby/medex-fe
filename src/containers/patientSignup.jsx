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
    phone: ""
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
    // const { email, password1, password2, firstname, lastname, dob, address, phone } = this.state;
    // const { error, loading, token } = this.props;
    // if (token) {
    //   return <Redirect to="/" />;
    // }
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
          {/* {error && <p>{this.props.error.message}</p>} */}

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
                  value={this.state.info.dob}
                  name="dob"
                  fluid
                  iconPosition="left"
                  placeholder="YYYY-MM-DD"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.address}
                  name="address"
                  fluid
                  iconPosition="left"
                  placeholder="Address"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.phone}
                  name="phone"
                  fluid
                  iconPosition="left"
                  placeholder="Phone"
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick = {this.handleSubmit}
                  // loading={loading}
                  // disabled={loading}
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
// const mapStateToProps = state => {
//   return {
//     loading: state.loading,
//     error: state.error,
//     token: state.token
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     signup: (email, password1, password2, firstname, lastname, dob, address, phone) =>
//       dispatch(authSignup(email, password1, password2, firstname, lastname, dob, address, phone))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(RegistrationForm);
