import React, { useState, useEffect  } from "react";
import { useHistory } from "react-router-dom";
import { Form , Button} from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";


const SignIn = ({setIsLoggedIn, setOneUserData}) => {


    const [userDataBase, setUserDataBase] = useState("None");

    const history = useHistory()

    useEffect(() => {
        fetch("http://localhost:9292/users")
            .then((response) => response.json())
            .then(data => { setUserDataBase(data) })
    }, []);

    //states for userName and password
    const [userEmail, setNewUser] = useState("");
    const [password, setPassword] = useState("");

    //function to update values of userName and password
    const handleChange = function (e) {
        let { name, value } = e.target
        console.log(e)
        console.log(userEmail)
        console.log(password)
        if (name === "password") { setPassword((password) => password = value) }
        else { setNewUser((userEmail) => userEmail = value) }
    }

    // log in button
    function handleSubmit(e) {
        e.preventDefault();

        // id of userEmail and id of password
        let idUserName = 'None';
        let idPassword = [];


        //  1) Get the info from data base  it is userDataBase
        //get the id of user name
        userDataBase.forEach((oneObj) => {
            if (oneObj.email === userEmail) {
                idUserName = oneObj.id;
                // console.log(idUserName)
            } else {
                console.log('not match')
            }
        })

        //get the id of password
        userDataBase.forEach((oneObj) => {
            if (oneObj.password === password) {
                idPassword.push(oneObj.id);
                console.log(idPassword)
            } else {
                console.log('not match')
            }
        })
        // idUserName === idPassword

        // match id of userName and id of password
        if (idPassword.includes(idUserName) && idUserName !== 'None' && idPassword !== 'None') {
            alert('you are logged in')
            fetch(`http://localhost:9292/users/${idUserName}`)
                .then((response) => response.json())
                .then(data => {
                    console.log(data)
                    setOneUserData(data)
                    setIsLoggedIn(true)
                    setNewUser("")
                    setPassword("")
                    idPassword = []
                    history.push('/')
                })
        } else { alert('Your username or password is incorrect. Please try again.') }
    }
    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={userEmail} onChange={handleChange}/>
            <Form.Text className="text-muted text-white-50" >
             We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"  value={password} onChange={handleChange}/>
          </Form.Group>
          <div className="col-md-12 text-center btn-group">
          <Button variant="dark" type="submit" >
            Submit
          </Button>{' '}
          <Button variant="dark" type="click" className="centered-button">
          <Link to="/sign-up"  className="text-white-50">Sign Up</Link>
          </Button>
          </div>
          
        </Form>
      );
}


export default SignIn