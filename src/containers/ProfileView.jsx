import React from "react";
import { withRouter } from "react-router";


class ProfileView extends React.Component {
    state = {
      profile : [],
      username: this.props.location.state.username
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
            this.setState({profile: data});
          }
        ).catch( error => console.log(error));
    }

    componentDidMount(){
      this.viewprofile(this.state.username);
    }
    
    render() {
      return (
          <div>
            <h1>Profile Page</h1>
            <h3>Name : { this.state.profile.name }</h3>
            <p>Height : { this.state.profile.height }</p>
            <p>Weight : { this.state.profile.weight }</p>
            <p>Blood Pressure : { this.state.profile.blood_pressure }</p>
            <p>Health Conditions : { this.state.profile.health_conditions }</p>
            <p>Doctor : { this.state.profile.doctor }</p>
         </div>
      );
    }
  }
  
const ProfileWithRouter = withRouter(ProfileView);
export default ProfileWithRouter;
