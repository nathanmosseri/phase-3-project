import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignIn = ({setIsLoggedIn, userInfo}) => {

    const history = useHistory()
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoggedIn(true)

        history.push('/')
    }

    return (
        <div>
            <h1>SignIn</h1>
            <div>
                <form onSubmit={handleSubmit}>
                <input placeholder="Enter email address" name="email" value={loginFormData.email} onChange={handleChange}/>
                <input placeholder="Enter password" name="password" value={loginFormData.password} onChange={handleChange}/>
                <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
        

    
    )

}

export default SignIn