import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form, CImage} from 'react-bootstrap';

const SearchUsers = ({userInfo, setSearchedProfile, setProfileClicked}) => {

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
        setProfileClicked(prev => !prev)
    }
    
    
    return (
      //
        <div className=" height"> 
        <h1 className="text-center text-white ">Search for Users</h1>
        <div className="seach-bar">
        <Form className="d-flex" value={searchValue} style={{ width: '25rem' }}>
         <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
            onChange={handleChange}
        />
        </Form>
        </div>
        {
          userInfo.filter((p) => {
            return p.name.toLowerCase().includes(searchValue)
          }).map((user, i) => {
            return (
              <>
        {[
          'Dark',
        ].map((variant, i) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '25rem' }}
            className="mb-2"
          >
            <Card.Header key={i}> Header</Card.Header>
            {/* <Image rounded thumbnail src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2021/03/4-lob-haircut-for-square-face-CSe6zHeKYT_.jpg?resize=1028%2C1196&ssl=1" width={20} height={20} className="rounded-circle w-25 "/>Header  */}
            <Card.Body>
              <Link onClick={handleClick} to='/searched-profile' className="text-white-50">{user.name}</Link>
            </Card.Body>
          </Card>
        ))}
      </>
        //     <div key={i}>
        //     <p style={{color: 'white'}} key={user.id}><Link onClick={handleClick} to='/searched-profile'>{user.name}</Link></p>
        // </div>
        )
          })
        }
        </div>
        
    )

}

export default SearchUsers