import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <NavLink to='/' exact>
                <p>Home</p>
            </NavLink>
            <NavLink to='/phase-posts'>
                <p>Phase Posts</p>
            </NavLink>
            <NavLink to='/search-users'>
                <p>Search Users</p>
            </NavLink>
            <NavLink to='/my-profile'>
                <p>My Profile</p>
            </NavLink>
        </div>
    )

}

export default NavBar