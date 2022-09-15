import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyProfile = ({phaseData, oneUserData}) => {

    const [oneUserPosts, setOneUserPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/posts/${oneUserData.id}`).then(res => res.json())
        .then((post) => {
            setOneUserPosts(post)
        })
    }, [])

    const profilePosts = oneUserPosts.map((post, i) => {
        return (
            <div key={i}>
            <p >{oneUserData.name}</p>
            <p key={post.id}>{post.body}</p>
            <a>{post.link}</a>
            <p>{post.likes}</p>
        </div>
        )
    })

    return (
        <div>
        <h1>{oneUserData.name}'s Profile</h1>
        <h2>{phaseData}</h2>
        <h3>{oneUserData.bio}</h3>
        <h3>{oneUserData.email}</h3>
        <h3>{oneUserData.links}</h3>
        {profilePosts}
        </div>
    )
    
    
}

export default MyProfile