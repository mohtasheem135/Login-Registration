import React, { Component } from 'react';
import "./signup.css";
import axios from "axios";

export class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }

    changeUserName(event) {
        this.setState({
            username: event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:1350/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            username: '',
            email: '',
            password: ''
        })
    }


    render() {
        return (
            <div>

                <div className="main-container">
                    <form onSubmit={this.onSubmit} className="input-container">
                        <input type="text" placeholder="Full Name" onChange={this.changeFullName} value={this.state.fullName} />
                        <input type="text" placeholder="username" onChange={this.changeUserName} value={this.state.username} />
                        <input type="email" placeholder="Email" onChange={this.changeEmail} value={this.state.email} />
                        <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} />
                        {/* <input type="date" placeholder="date" /> */}

                        <input type="submit" className="form-btn" value="Submit" />

                    </form >
                </div>

            </div>
        )
    }
}

export default SignUp
