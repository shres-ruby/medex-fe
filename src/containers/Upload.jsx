import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';


class Upload extends Component {

    state = {
        title: '',
        image: null,
        upload_date: '',
        user: '10'
    };

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.image);
        form_data.append('title', this.state.title);
        form_data.append('upload_date', this.state.upload_date);
        form_data.append('user', this.state.user);
        let url = 'http://127.0.0.1:8000/api/prescriptions/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Token ${token}`
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
        this.props.history.go(-1);
        this.setState({
                title: '',
                image: null,
                upload_date: ''
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <p>
                    <input type="text" placeholder='Title' id='title' 
                    value={this.state.title} onChange={this.handleChange} />
                </p>
                <p>
                    <input type="text" placeholder='YYYY-MM-DD' id='upload_date' 
                    value={this.state.upload_date} onChange={this.handleChange} />
                </p>
                <p>    
                    <input type="file" id='image' accept="image/png, image/jpeg" 
                    onChange={this.handleImageChange} />
                </p>
               
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const UploadWithRouter = withRouter(Upload)
export default UploadWithRouter;
