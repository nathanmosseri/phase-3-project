import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = ({setIsLoggedIn}) => {

    const history = useHistory()
    const [phaseInfo, setPhaseInfo] = useState([])
    const [signUpForm, setSignUpForm] = useState({
        name: '',
        password: '',
        bio: '',
        email: '',
        links: '',
        phase_id: null
    })

    useEffect(() => {
        fetch('http://localhost:9292/phases').then(res => res.json())
        .then((phases) => {
            setPhaseInfo(phases)
        })
    }, [])

    
    const handleChange = (e) => {
        setSignUpForm({
            ...signUpForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoggedIn(true)
        history.push('/')
        fetch('http://localhost:9292/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpForm),
        }).then(res => res.json())
        .then((data) => {

        })

    }
    
    const makePhaseDropdown = phaseInfo.map((phase, i) => {
        return (
            <option key={i} value={phase.id} name='phase_id'>{phase.phase}</option>
        )
    })
    
    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Enter full name" onChange={handleChange}/>
                <input name="password" placeholder="Create a password" onChange={handleChange}/>
                <input name="bio" placeholder="Create a bio" onChange={handleChange}/>
                <input name='email' placeholder="Enter your email address" onChange={handleChange}/>
                <input name="links" placeholder="Enter a link to your portfolio" onChange={handleChange}/>
                <select onChange={handleChange} name="phase_id">
                    {makePhaseDropdown}
                </select>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )

}

export default SignUp