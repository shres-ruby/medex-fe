import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";


class Appointment extends React.Component {
  state = {
    info: {
    date: "",
    time: "",
    purpose: "",
    user: "",
    doctor: "",
  }
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/appointments/', {
      method : 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.info)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data);
      }
    ).catch( error => console.log(error));
    this.props.history.push('/scheduled/');
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
            Schedule an appointment
          </Header>

          <React.Fragment>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.date}
                  name="date"
                  fluid
                  icon="user"
                  iconPosition="left"
                  label= "Date"
                  placeholder="YYYY-MM-DD"
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={this.state.info.time}
                  name="time"
                  icon=""
                  iconPosition="left"
                  label= "Time"
                  placeholder=""
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={this.state.info.purpose}
                  name="purpose"
                  icon=""
                  iconPosition="left"
                  label= "Purpose"
                  placeholder="Purpose of visit"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.user}
                  name="user"
                  fluid
                  iconPosition="left"
                  label= "User"
                  placeholder="Your email address"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={this.state.info.doctor}
                  name="doctor"
                  fluid
                  iconPosition="left"
                  label= "Doctor"
                  placeholder="Full name of doctor"
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick = {this.handleSubmit}
                >
                  Submit
                </Button>
              </Segment>
            </Form>
          </React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Appointment;
