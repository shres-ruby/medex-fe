import React, {Component} from 'react';
import axios from 'axios';
import { Message } from "semantic-ui-react";


class StartReset extends Component {
    state = {
        formError: false
    };

  handleSubmit = e =>{
    e.preventDefault();
    const data = {
      email: this.email,
    }
    axios.post('http://127.0.0.1:8000/api/password_reset/', data)
    .then(
      res => {
        console.log(res);
      }
    ).catch(
      err => {
        console.log(err);
        this.setState({formError: true})
      }
    )
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>Enter your email below to reset your password</h3>
        <label>Email</label>
        <input type="text" placeholder="Email" onChange={e => this.email = e.target.value} />
        <button>Submit</button>
        {!this.state.formError ? (
            <Message
            positive
            content= "Please check your email for password reset link"
            />
        ) : (
            <Message
            negative
            header= "Missing fields!"
            content = "Please fill all fields"
            />
        )}
      </form>
    )
  }
}

export default StartReset;