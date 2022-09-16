import React, { useEffect, useState } from "react";
import { Card, Button, Image, CImage, Nav} from 'react-bootstrap';

const SearchedProfile = ({ searchedProfileData, setProfileLike }) => {

    const [profileLikeClicked, setProfileLikeClicked] = useState([])

    const handleLike = (e) => {
      setProfileLikeClicked(e.target.value)
      const updateLikes = {
        likes:  1
      }
      fetch(`http://localhost:9292/posts/${profileLikeClicked}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateLikes)
      }).then(res => res.json())
      .then((data) => {
        setProfileLike(prev => !prev)
      })
    }


   let postsArr = []

    const profile = searchedProfileData.map((user, i) => {
        postsArr = user.posts
        return (
        <div key={i}>
            <h1 key={user.name}>{user.name}</h1>
            <h3 key={user.bio}>{user.bio}</h3>
            <h3 key={user.email}>{user.email}</h3>
            <h3 key={user.links}>{user.links}</h3>
        </div>
        )
    })
    
    const profilePosts = postsArr.map((post, i) => {
        return (
            <div key={i}>
                <p>{post.body}</p>
                <a>{post.link}</a>
                <p>{post.likes}</p>
                <Nav className="justify-content-end">
                    <p>{post.likes}</p>
                    <Button variant="dark" type="click" className="" onClick={handleLike} value={post.id}>
                    Like
                    </Button>
                </Nav>  
            </div>
        )
    })



    // const profilePosts = searchedProfileData.map((post, i) => {
    //     return (
    //         <div key={i}>
    //         <p >{searchedProfileData.name}</p>
    //         {/* <p key={post.id}>{post.body}</p>
    //         <a>{post.link}</a>
    //         <p>{post.likes}</p> */}
    //     </div>
    //     )
    // })

    return (
        <>
            {profile}
            {profilePosts}
        </>
    )

}

export default SearchedProfile