import React, { Component } from 'react'
import { Link } from "react-router-dom";



export default class Logout extends Component {
    render() {
        return (
            <div>
                <h1>You have been successfully logged out</h1>
                <Link to='/login/'>Log in again</Link>
            </div>
        )
    }
}
