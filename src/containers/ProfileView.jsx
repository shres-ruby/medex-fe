import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";


import {
  Button,
  Form,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";


class ProfileView extends React.Component {
    state = {
      profile : [],
      username: this.props.location.state.username,
      info: {
        user: this.props.location.state.username,
        name: "",
        height: "",
        weight: "",
        blood_pressure: "",
        health_conditions: "",
        doctor: ""
      }
    };

    viewprofile = (username) => {
      console.log(username);
      const token = localStorage.getItem('token');

        fetch(`http://127.0.0.1:8000/api/profile/${username}/`, {
          method : 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
        })
        .then( data => data.json())
        .then(
          data => {
            console.log(data);
            this.setState({profile: data, username: username});
          }
        ).catch( error => console.log(error));
        this.props.history.push({
          state: {username: this.state.username}
        });
    }


    componentDidMount(){
      this.viewprofile(this.state.username);
    }

    handleSubmit = e => {
      e.preventDefault();
      fetch('http://127.0.0.1:8000/api/edit/', {
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
      this.props.history.push({
          pathname: `/profile/${this.state.username}`
        });
    };
  
    handleChange = e => {
      const data = this.state.info;
      data[e.target.name] = e.target.value;
      this.setState({info: data});
    };
    
    render() {
      return (
          <div>
            <h1>Profile Page</h1>
            <Link to="/reset-password/">
            <button>Reset Password</button>
            </Link>
            <h3>Name : { this.state.profile.name }</h3>
            <p>Height : { this.state.profile.height }</p>
            <p>Weight : { this.state.profile.weight }</p>
            <p>Blood Pressure : { this.state.profile.blood_pressure }</p>
            <p>Health Conditions : { this.state.profile.health_conditions }</p>
            <p>Doctor : { this.state.profile.doctor }</p>


            <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Edit user health profile
            </Header>

            <React.Fragment>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    onChange={this.handleChange}
                    value={this.state.info.name}
                    name="name"
                    fluid
                    icon=""
                    iconPosition="left"
                    placeholder="Full Name"
                  />
                  <Form.Input
                    required= "false"
                    onChange={this.handleChange}
                    fluid
                    value={this.state.info.height}
                    name="height"
                    icon=""
                    iconPosition="left"
                    placeholder="Height"
                    type=""
                  />
                  <Form.Input
                    onChange={this.handleChange}
                    fluid
                    value={this.state.info.weight}
                    name="weight"
                    icon=""
                    iconPosition="left"
                    placeholder="Weight"
                    type=""
                  />
                  <Form.Input
                    onChange={this.handleChange}
                    value={this.state.info.blood_pressure}
                    name="blood_pressure"
                    fluid
                    iconPosition="left"
                    placeholder="Blood Pressure"
                  />
                  <Form.Input
                    onChange={this.handleChange}
                    value={this.state.info.health_conditions}
                    name="health_conditions"
                    fluid
                    iconPosition="left"
                    placeholder="Health Conditions"
                  />
                  <Form.Input
                    onChange={this.handleChange}
                    value={this.state.info.doctor}
                    name="doctor"
                    fluid
                    iconPosition="left"
                    placeholder="Doctor"
                  />
                  <Button
                    color="teal"
                    fluid
                    size="large"
                    onClick = {this.handleSubmit}
                  >
                    Save
                  </Button>
                </Segment>
              </Form>
            </React.Fragment>
            </Grid.Column>
            </Grid>
         </div>
      );
    }
  }
  
const ProfileWithRouter = withRouter(ProfileView);
export default ProfileWithRouter;





// import React from "react";
// import { withRouter } from "react-router";


// class ProfileView extends React.Component {
//     state = {
//       profile : [],
//       username: this.props.location.state.username
//     };

//     viewprofile = (username) => {
//       console.log(username);
//       const token = localStorage.getItem('token');

//         fetch(`http://127.0.0.1:8000/api/profile/${username}/`, {
//           method : 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Token ${token}`
//         }
//         })
//         .then( data => data.json())
//         .then(
//           data => {
//             console.log(data);
//             this.setState({profile: data});
//           }
//         ).catch( error => console.log(error));
//     }

//     componentDidMount(){
//       this.viewprofile(this.state.username);
//     }
    
//     render() {
//       return (
//           <div>
//             <h1>Profile Page</h1>
//             <h3>Name : { this.state.profile.name }</h3>
//             <p>Height : { this.state.profile.height }</p>
//             <p>Weight : { this.state.profile.weight }</p>
//             <p>Blood Pressure : { this.state.profile.blood_pressure }</p>
//             <p>Health Conditions : { this.state.profile.health_conditions }</p>
//             <p>Doctor : { this.state.profile.doctor }</p>
//          </div>
//       );
//     }
//   }
  
// const ProfileWithRouter = withRouter(ProfileView);
// export default ProfileWithRouter;
