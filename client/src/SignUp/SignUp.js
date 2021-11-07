import React, { Component } from 'react';
import "./signup.css";
import axios from "axios";
import Navbar from '../Navbar/Navbar';

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
                <Navbar/>
                <div className="main-container">
                    {/* <h1>SignUp here....</h1> */}
                    <form onSubmit={this.onSubmit} className="input-container">
                        <input className="input-field" type="text" placeholder="Full Name" onChange={this.changeFullName} value={this.state.fullName} />
                        <input className="input-field" type="text" placeholder="username" onChange={this.changeUserName} value={this.state.username} />
                        <input className="input-field" type="email" placeholder="Email" onChange={this.changeEmail} value={this.state.email} />
                        <input className="input-field" type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} />
                        {/* <input type="date" placeholder="date" /> */}

                        <input type="submit" className="form-btn" value="Submit" />
                        <p className="or">Or</p>
                        <input type="submit" className="form-btn form-btn-1" value="Login" />

                    </form >
                </div>

            </div>
        )
    }
}

export default SignUp
