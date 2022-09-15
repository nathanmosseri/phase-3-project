import React, { useEffect } from "react";

const SearchedProfile = ({ searchedProfileData }) => {


   let postsArr;

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
    console.log(postsArr)
    
    const profilePosts = postsArr.map((post, i) => {
        console.log(post)
        return (
            <div key={i}>
                <p>{post.body}</p>
                <a>{post.link}</a>
                <p>{post.likes}</p>
                <button>Like</button>
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