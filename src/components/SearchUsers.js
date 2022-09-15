import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchUsers = ({userInfo, setSearchedProfile}) => {
    console.log(userInfo)

    const [searchedNames, setSearchedNames] = useState([])
    const [searchValue, setSearchValue] = useState('')

    
    const handleChange = (e) => {
        setSearchValue(e.target.value.toLowerCase())
        let newArr = userInfo.filter((user) => {
            return user.name.toLowerCase().includes(searchValue)
        })
        setSearchedNames([...newArr])
    }
    
    const handleClick = (e) => {
        setSearchedProfile(e.target.text)
    }
    
    
    return (
        <div>
        <h1>Search for Users</h1>
        <form value={searchValue}>
          <input  onChange={handleChange} />
        </form>
        {
          userInfo.filter((p) => {
            return p.name.toLowerCase().includes(searchValue)
          }).map((user, i) => {
            return (
            <div key={i}>
            <p style={{color: 'white'}} key={user.id}><Link onClick={handleClick} to='/searched-profile'>{user.name}</Link></p>
        </div>
        )
          })
        }
        </div>
    )

}

export default SearchUsers