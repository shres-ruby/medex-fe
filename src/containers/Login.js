import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";


class LoginForm extends React.Component {
  state = {
    credentials: {username: '', password: ''},
  };

  login = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/login/', {
      method : 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
      }
    ).catch( error => console.log(error));

    console.log(this.state.credentials.username);

    this.props.history.push({
      pathname: `/profile/${this.state.credentials.username}`,
      state : {username: this.state.credentials.username}
    });
  };

  handleChange = e => {
    const cred = this.state.credentials;
    cred[e.target.name] = e.target.value;
    this.setState({credentials: cred});
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
            Log-in to your account
          </Header>

          <React.Fragment>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.credentials.username}
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email"
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={this.state.credentials.password}
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick = {this.login}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;
