import React, { useState } from "react";

const MainPage = ({isLoggedIn, userInfo, usersNames}) => {

    const [postsToDisplay, setPostsToDisplay] = useState([])
    console.log(usersNames)

    useState(() => {
        fetch(`http://localhost:9292/namedPosts`).then(res => res.json())
        .then((data) => {
            setPostsToDisplay(data)
        })
    }, [])
    console.log(postsToDisplay)

    const posts = postsToDisplay.map((post, i) => {
        return (
        <div key={i}>
            <p >{post.user.name}</p>
            <p key={post.id}>{post.body}</p>
            <a>{post.link}</a>
            <p>{post.likes}</p>
            <button>Like</button>
        </div>
        )
    })

    // userFollowingData.map((f) => {
    //     console.log(f.following_id)
    // })

    return (
        <>
        <h1>Main Page</h1>
        {posts}
        </>
    )

}

export default MainPage