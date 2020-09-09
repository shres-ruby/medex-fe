import React from "react";
import { Container, Item } from "semantic-ui-react";


class DoctorList extends React.Component {
    state = {
      docs : {results:[]},
    };

    componentDidMount() {
            
        fetch(`http://127.0.0.1:8000/api/doctors/`, {
          method : 'GET',
          headers: {
            'Content-Type': 'application/json',
        }
        })
        .then( data => data.json())
        .then(
          data => {
            console.log(data);
            this.setState({docs : data});
          }
        ).catch( error => console.log(error));
    }
    render() {

    const { docs } = this.state;

      return (
          <div>
            <h1>Doctor Profiles</h1>
            <br></br>
            <Container>
            <Item.Group divided>
            {docs.results.map(data => {
              return (
                <Item key={data.id}>
                  <Item.Content>
                    <Item.Header>
                      {data.first_name} {data.last_name}
                    </Item.Header>
                    <Item.Meta>
                      <span className="cinema">{data.user.email}</span>
                    </Item.Meta>
                    <Item.Description>Phone : {data.phone}</Item.Description>
                    <Item.Description>Specialty : {data.specialty}</Item.Description>
                    <Item.Description>Availability : {data.availability}</Item.Description>
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
  
export default DoctorList;
