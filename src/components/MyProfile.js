import React, { useEffect, useState } from "react";

const MyProfile = ({phaseData, oneUserData}) => {

    const [oneUserPosts, setOneUserPosts] = useState([])
    const [posted, setPosted] = useState(false)
    const [postId, setPostId] = useState('')
    const [areYouSureEdit, setAreYouSureEdit] = useState(false)
    const [areYouSureDelete, setAreYouSureDelete] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [postFormData, setPostFormData] = useState({
                body: '',
                link: '',
                user_id: oneUserData.id,
                likes: 0
            })

    useEffect(() => {
        fetch(`http://localhost:9292/posts/${oneUserData.id}`).then(res => res.json())
        .then((post) => {
            setOneUserPosts(post)
        })
    }, [posted, deleted])

    const handleChange = (e) => {
        setPostFormData({
            ...postFormData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postFormData),
        }).then(res => res.json())
        .then((data) => {
            setPosted(prev => !prev)
            setPostFormData({
                body: '',
                link: '',
                user_id: oneUserData.id,
                likes: 0
            })
        })
    }

    const handleDelete = (e) => {
        fetch(`http://localhost:9292/delete-posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setDeleted(prev => !prev)
            areYouSureDelete(prev => !prev)
        })
    }


    const profilePosts = oneUserPosts.map((post, i) => {
        return (
            <div key={i} style={{backgroundColor: 'white'}}>
            <p >{oneUserData.name}</p>
            <p key={post.id}>{post.body}</p>
            <a>{post.link}</a>
            <p>{post.likes}</p>
            <button onClick={() => {
                setPostId(post.id) 
                setAreYouSureEdit(prev => !prev) }}> 
                {areYouSureEdit ? 'cancel' : 'Edit post'}
                </button>
            <button onClick={() => {
                setPostId(post.id) 
                setAreYouSureDelete(prev => !prev) }}> 
                {areYouSureDelete ? 'cancel' : 'Delete post'}
            </button>
            {areYouSureDelete ? <button onClick={handleDelete}>Confirm Deletion</button> : null}
            {areYouSureEdit ? <form><input/><button type="submit">Confirm Edit</button></form> : null}
            
        </div>
        )
    })
    console.log(postId)
    console.log(areYouSureDelete)
    console.log(areYouSureEdit)

    return (
        <div>
        <h1>{oneUserData.name}'s Profile</h1>
        <h2>{phaseData}</h2>
        <h3>{oneUserData.bio}</h3>
        <h3>{oneUserData.email}</h3>
        <h3>{oneUserData.links}</h3>
        <h2>Create a New Post</h2>
        <form value={postFormData} onSubmit={handleSubmit}>
            <input placeholder="Write you post here" name="body" onChange={handleChange}/>
            <input placeholder="Add a link" name="link" onChange={handleChange}/>
            <button>Post</button>
        </form>
        {profilePosts}
        </div>
    )
    
    
}

export default MyProfile