import React, {Component} from 'react';
import axios from 'axios';


export class PasswordReset extends Component {

  handleSubmit = e =>{
    e.preventDefault();
    const data = {
      token: this.props.match.params.id,
      password: this.password,
      password_confirm: this.password_confirm
    }
    axios.post('http://127.0.0.1:8000/api/password_reset/confirm/', data)
    .then(
      res => {
        console.log(res);
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
    this.props.history.push('/login/');
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>Reset your password</h3>
        <label>Password</label>
        <input type="password" placeholder="Password" onChange={e => this.password = e.target.value} />
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" onChange={e => this.password_confirm = e.target.value} />
        <button>Submit</button>
      </form>
    )
  }
}

export default PasswordReset;