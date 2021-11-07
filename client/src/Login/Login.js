import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const handelChange = e =>{
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const LogIn = ()=>{
        // const { email, password } = user
        axios.post('http://localhost:1350/app/login', user)
        .then(res=> alert(res.data.message))
        
    }

    return (

        <div>
            {console.log(user)}
            <Navbar />
            <div className="main-container">
                <form  className="input-container">
                    <input className="input-field" name="email" value={user.email} type="email" onChange={handelChange} placeholder="Email" />
                    <input className="input-field" name="password" value={user.password} type="password" onChange={handelChange} placeholder="Password" />
                    {/* <input type="date" placeholder="date" /> */}

                    <input type="submit" className="form-btn" value="LogIn" />
                    <p className="or">Or</p>
                    <input type="submit" className="form-btn form-btn-1" value="SignUp" onClick={()=>navigate("/signup")} />

                </form >
            </div>
        </div>

    )
}

export default Login
