import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <NavLink to='/' exact>
                <p>Home</p>
            </NavLink>
            <NavLink to='/account-settings'>
                <p>Account Settings</p>
            </NavLink>
        </div>
    )

}

export default NavBar