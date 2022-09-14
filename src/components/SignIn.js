import React, { useState, useEffect  } from "react";
import { useHistory } from "react-router-dom";





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
                console.log(idUserName)
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
        <div className="full-screen-container">
            <div className="login-container">
                <h1 className="login-title">Welcome</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group success">
                        <label className="username">Enter email address</label>
                        <input type="text" name="email" value={userEmail} onChange={handleChange}/> 
                        {/* <input type="text" name="username" value={userName} onChange={handleChange} /> */}
                        <span className="msg"> Type Valid username</span>
                    </div>

                    <div className="input-group success">
                        <label className="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={handleChange} />
                        {/* <input id="password"  type="password" name="password" value={password} onChange={handleChange} /> */}
                        {/* <span className="msg">Incorrect password</span> */}
                    </div>

                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>


    )
}


export default SignIn