import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form , Button} from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const SignUp = ({setIsLoggedIn, setSignUpSubmited, setOneUserData}) => {

    const history = useHistory()
    const [phaseInfo, setPhaseInfo] = useState([])


    const initialState = {
        name: '',
        password: '',
        bio: '',
        email: '',
        links: '',
        phase_id: ''
    }
    const [signUpForm, setSignUpForm] = useState(initialState)
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        fetch('http://localhost:9292/phases').then(res => res.json())
        .then((phases) => {
            setPhaseInfo(phases)
        })
    }, [])

//array with all userNames 
const [userNames, setUserNames] = useState([])



    useEffect(() => {
        fetch("http://localhost:9292/users")
          .then(r => r.json())
          .then(d => setUserNames(d));
      }, [])

    
    const handleChange = (e) => {
        setSignUpForm({
            ...signUpForm,
            [e.target.name]: e.target.value
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setIsLoggedIn(true)
    //     history.push('/')
    //     fetch('http://localhost:9292/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(signUpForm),
    //     }).then(res => res.json())
    //     .then((data) => {

    //     })

    // }
    
    const makePhaseDropdown = phaseInfo.map((phase, i) => {
        return (
            <option key={i} value={phase.id} name='phase_id'>{phase.phase}</option>
        )
    })

    let arrayAllUserNames = userNames.map((user) => {
        return user.email
    
        
    })



    // const handleChange = function (e) {
    //     let { name, value } = e.target
    //     if (name === "password") {
    //         setPassword((password) => password = value)
    //         setNewUser({ ...newUser, [name]: value })
    //     }
    //     else { setNewUser({ ...newUser, [name]: value }) }
    // }


    const handleChangeTwo = function (e) {
        setConfirmPassword((confirmPassword) => confirmPassword = e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (signUpForm.password === confirmPassword && !arrayAllUserNames.includes(`${signUpForm.email}`)) {
            fetch("http://localhost:9292/users", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signUpForm)
            })
                .then((response) => response.json())
                .then(data => console.log(data));
            setIsLoggedIn(true)
            // setPassword("");
            setConfirmPassword("");
            setSignUpForm(initialState);
            setSignUpSubmited(prev=> !prev)
            setOneUserData(signUpForm)
            history.push('/')
            alert('Successfully created an account! Please log in!')
        } else {
            // setPassword("");
            setConfirmPassword("");
            setSignUpForm(initialState);
            alert('Your passwords do not match. Please try again.')
        }
        // setNewUser(initialState);
    }





    return (
        <div className="login-signup">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Enter full name</Form.Label>
            <Form.Control type="text" name="name" value={signUpForm.name} placeholder="Full name" onChange={handleChange}/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" name="password" value={signUpForm.password} placeholder="Your password" onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Repeat Password</Form.Label>
            <Form.Control type="password" name="confirmPassword"  value={confirmPassword} placeholder="Type here" onChange={handleChangeTwo}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Create a bio</Form.Label>
            <Form.Control type="text" name="bio" value={signUpForm.bio} placeholder="Bio" onChange={handleChange}/>
          </Form.Group>
          <Form.Text className="text-muted text-white-50" >
             We'll never share your email with anyone else.
            </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Enter your email address</Form.Label>
            <Form.Control type="email" name='email' value={signUpForm.email} placeholder="Your email" onChange={handleChange}/>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Enter a link to your portfolio</Form.Label>
            <Form.Control type="text" name="links" value={signUpForm.links} placeholder="Link here" onChange={handleChange}/>
          </Form.Group>
          <Form.Select aria-label="Default select example" onChange={handleChange} name="phase_id" >
          {makePhaseDropdown}
            </Form.Select>
          <div className="col-md-12 text-center btn-group">
          <Button variant="dark" type="submit" >
          Sign Up
          </Button>{' '}
          <Button variant="dark" type="click" className="centered-button">
          <Link to="/sign-in"  className="text-white-50">Sign In</Link>
          </Button>
          </div>
          
        </Form>
        </div>
      );
    // return (
    //     <div>
    //         <h1>SignUp</h1>
    //         <form onSubmit={handleSubmit}>
    //             <input name="name" placeholder="Enter full name" onChange={handleChange}/>
    //             <input name="password" placeholder="Create a password" onChange={handleChange}/>
    //             <input name="bio" placeholder="Create a bio" onChange={handleChange}/>
    //             <input name='email' placeholder="Enter your email address" onChange={handleChange}/>
    //             <input name="links" placeholder="Enter a link to your portfolio" onChange={handleChange}/>
    //             <select onChange={handleChange} name="phase_id">
    //                 {makePhaseDropdown}
    //             </select>
    //             <button type="submit">Sign Up</button>
    //         </form>
    //     </div>
    // )

}

export default SignUp