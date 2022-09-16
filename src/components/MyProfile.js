import React, { useEffect, useState } from "react";
import  {Nav , Navbar, NavLink, Container} from 'react-bootstrap';

const MyProfile = ({phaseData, oneUserData}) => {

    const [oneUserPosts, setOneUserPosts] = useState([])
    const [posted, setPosted] = useState(false)
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
    }, [posted])

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
        console.log(e.target)
    }


    const profilePosts = oneUserPosts.map((post, i) => {
        return (
            <div key={i} style={{backgroundColor: 'white'}}>
            <p >{oneUserData.name}</p>
            <p key={post.id}>{post.body}</p>
            <a>{post.link}</a>
            <p>{post.likes}</p>
            <button>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        )
    })

    return (
        // <div className=" height">
        // <h1>{oneUserData.name}'s Profile</h1>
        // <h2>{phaseData}</h2>
        // <h3>{oneUserData.bio}</h3>
        // <h3>{oneUserData.email}</h3>
        // <h3>{oneUserData.links}</h3>
        // <h2>Create a New Post</h2>
        // <form value={postFormData} onSubmit={handleSubmit}>
        //     <input placeholder="Write you post here" name="body" onChange={handleChange}/>
        //     <input placeholder="Add a link" name="link" onChange={handleChange}/>
        //     <button>Post</button>
        // </form>
        // {profilePosts}
        // </div>
        <>
        <Navbar  variant="dark">
        <Container>
          <Navbar.Brand  exact ><h1 >{oneUserData.name}'s Profile</h1></Navbar.Brand>
          <Nav className="text-center mt-4 mb-4">
            <Nav.Link as={NavLink} to="/general-posts"><h5>General Posts</h5></Nav.Link>
            <Nav.Link as={NavLink} to="/" exact><h5>Phase Posts</h5></Nav.Link>
            <Nav.Link as={NavLink} to="/search-users"><h5>Search Users</h5></Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/my-profile" className=""><a href="mailto:example@gmail.com">Send Email</a></Nav.Link>
            {/* <Button onClick={handleClick} variant="dark" type="click" className="centered-button">Sign Out</Button> */}
          </Nav>
        </Container>
      </Navbar>
        <Container>
      <Nav className="justify-content-default" activeKey="/home">
      <Navbar.Brand   exact ><h1 >Or right-aligned</h1></Navbar.Brand>
        
      </Nav>
      <p className="text-center mt-4 mb-4">Or right-aligned</p>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
    </>
    )
    
    
}

export default MyProfile