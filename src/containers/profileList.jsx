import React from "react";
import { Container, Item } from "semantic-ui-react";


class ProfileList extends React.Component {
    state = {
      profile : [],
    };

    componentDidMount() {
        const token = localStorage.getItem('token');

        fetch(`http://127.0.0.1:8000/api/profile/`, {
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
    render() {

    const { profile } = this.state;

      return (
          <div>
            <h1>Patient Profiles</h1>
            <Container>
            <Item.Group divided>
            {profile.map(data => {
              return (
                <Item key={data.id}>
                  <Item.Content>
                    <Item.Header>
                      {data.full_name}
                    </Item.Header>
                    <Item.Meta>
                      <span className="cinema">{data.user.email}</span>
                    </Item.Meta>
                    <Item.Description>Height : {data.height}</Item.Description>
                    <Item.Description>Weight : {data.weight}</Item.Description>
                    <Item.Description>Blood Pressure : {data.blood_pressure}</Item.Description>
                    <Item.Description>Health Conditions : {data.health_conditions}</Item.Description>
                  </Item.Content>
                </Item>
              );
            })}
          </Item.Group>
            </Container>
         </div>
      );
    }
  }
  
export default ProfileList;
