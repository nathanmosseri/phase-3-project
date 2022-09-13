import React from "react";
import { Redirect } from "react-router-dom";

const MainPage = ({isLoggedIn}) => {

    if (!isLoggedIn) return <Redirect to='/sign-in'/>

    return (
        <h1>Main Page</h1>
    )

}

export default MainPage