import React from 'react';
import axios from 'axios';



class UserList extends React.Component {
    state = {
        users: [],
    };   
    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/api/allusers/`)
            .then(res => {
                this.setState({
                    users: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <ul>
            { this.state.users.map(user => <li key={user.id}>{user.email}</li>)}
            </ul>
            )
    }
}

export default UserList;