import React, { useEffect, useState } from "react";
import  {Nav , Navbar, NavLink, Container, Button, Card, Form} from 'react-bootstrap';

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
        setPostId(e.target.value)
        fetch(`http://localhost:9292/delete-posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setDeleted(prev => !prev)
        })
    }


    const profilePosts = oneUserPosts.map((post, i) => {
        return (
            // <div key={i} style={{backgroundColor: 'white'}}>
            // <p >{oneUserData.name}</p>
            // <p key={post.id}>{post.body}</p>
            // <a>{post.link}</a>
            // <p>{post.likes}</p>
            // <button onClick={() => {
            //     setPostId(post.id) 
            //     setAreYouSureEdit(prev => !prev) }}> 
            //     {areYouSureEdit ? 'cancel' : 'Edit post'}
            //     </button>
            // <button onClick={() => {
            //     setPostId(post.id) 
            //     setAreYouSureDelete(prev => !prev) }}> 
            //     {areYouSureDelete ? 'cancel' : 'Delete post'}
            // </button>
            // {areYouSureDelete ? <button onClick={handleDelete}>Confirm Deletion</button> : null}
            // {areYouSureEdit ? <form><input/><button type="submit">Confirm Edit</button></form> : null}
            
        // </div>
        <>
        {[
          'Dark',
        ].map((variant, i) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '40rem' }}
            className="mb-2"
          >
            <Card.Header key={i}> 
            {oneUserData.name}
            </Card.Header>
            <Card.Body>
            <Card.Title><h3>{post.body}</h3></Card.Title>
                <Card.Text  key={post.id}>
                Was added: {post.created_at}
                </Card.Text>
              <Card.Link  key={post.link} href={post.link} className="text-white-50">{post.link}</Card.Link>
              <Nav className="justify-content-end">
                <Nav.Link ><h3 className="text-white-50">{post.likes} likes</h3></Nav.Link>
             <Button variant="dark" type="click" className="" onClick={handleDelete} value={post.id}> 
             Delete post
            </Button>
            {/* <Button variant="dark" type="click" className="" disabled>
            
            </Button> */}
            </Nav>
            </Card.Body>
          </Card>
        ))}
      </>
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
        // 
        <>
        <Navbar  variant="dark">
        <Container>
          <Navbar.Brand className="text-muted text-white-50"><h1 >{oneUserData.name}'s Profile</h1></Navbar.Brand>
          <Nav className="text-center mt-4 mb-4">
            <Nav.Link ><h2 >{phaseData}</h2></Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
           <h3 className="text-muted text-white-50">{oneUserData.email}</h3>
          </Nav>
        </Container>
      </Navbar>
      <Navbar  variant="dark">
        <Container>
          <Nav className="">
            <h2 className="text-muted text-white-50">{oneUserData.bio}</h2>
            </Nav>
            <Nav className="justify-content-end">
            <Nav.Link href="https://www.facebook.com/fsefsefsef.sfsefsefsef"><h3>{oneUserData.links}</h3></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar  variant="dark">
        <Container>
        <Navbar.Brand ><h1 >{" "}</h1></Navbar.Brand>
          <Nav className="text-center mt-4 mb-4">
          <Form value={postFormData} onSubmit={handleSubmit} style={{ width: '35rem' }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><h5>Your Post</h5></Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Write you post here" name="body" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><h5>Post's Link</h5></Form.Label>
                <Form.Control type="text" placeholder="Add a link" name="link" onChange={handleChange}/>
            </Form.Group>
          <div className="col-md-12 text-center btn-group" style={{ width: '15rem' }}>
          <Button variant="dark" type="submit" >
          Post
          </Button>
          </div>
          
        </Form>
            </Nav>
            <Navbar.Brand ><h1 >{" "}</h1></Navbar.Brand>
        </Container>
      </Navbar>
      <div className=" height">
        // {profilePosts}
        // </div>
    </>
    )
    
    
}

export default MyProfile