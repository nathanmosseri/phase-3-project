import React, { useEffect } from "react";
import { Card, Button, Image, CImage, Nav} from 'react-bootstrap';

const SearchedProfile = ({ searchedProfileData }) => {


   let postsArr = []

    const profile = searchedProfileData.map((user, i) => {
        postsArr = user.posts
        console.log(user.name)
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
        console.log(post)
        return (
            <div key={i}>
                <p>{post.body}</p>
                <a>{post.link}</a>
                <p>{post.likes}</p>
                <Nav className="justify-content-end">
                    <Button variant="dark" type="click" className="">
                    Like
                    </Button>
                    <p>{post.likes}</p>
                    <Button variant="dark" type="click" className="" disabled>
                    Liked
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