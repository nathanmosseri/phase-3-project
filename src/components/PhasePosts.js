import React, { useEffect, useState } from "react";

const PhasePosts = ({userInfo, oneUserData, phaseData, phasePosts}) => {
    
    const postsForPhase = phasePosts.map((post, i) => {
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


    return (
        <>
        {/* <div className="min-height"> */}
        <h1>{phaseData}</h1>
        {postsForPhase}
        {/* </div> */}
        </>
    )

}

export default PhasePosts