import React, { useEffect } from "react";
import { Card, Button, Image, CImage, Nav, Navbar, Container} from 'react-bootstrap';

const SearchedProfile = ({ searchedProfileData, phaseData }) => {


   let postsArr = []

    const profile = searchedProfileData.map((user, i) => {
        postsArr = user.posts
        console.log(user.name)
        return (
        // <div key={i}>
        //     <h1 key={user.name}>{user.name}</h1>
        //     <h3 key={user.bio}>{user.bio}</h3>
        //     <h3 key={user.email}>{user.email}</h3>
        //     <h3 key={user.links}>{user.links}</h3>
        // </div>
        <>
        <Navbar  variant="dark">
        <Container>
          <Navbar.Brand className="text-muted text-white-50"><h1 >{user.name}'s Profile</h1></Navbar.Brand>
          <Nav className="text-center mt-4 mb-4">
            <Nav.Link ><h2 >{phaseData}</h2></Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
           <h3 className="text-muted text-white-50">{user.email}</h3>
          </Nav>
        </Container>
      </Navbar>
      <Navbar  variant="dark">
        <Container>
          <Nav className="">
            <h2 className="text-muted text-white-50">{user.bio}</h2>
            </Nav>
            <Nav className="justify-content-end">
            <Nav.Link href={user.links}><h3>{user.links}</h3></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
        )
    })
    
    const profilePosts = postsArr.map((post, i) => {
        console.log(post)
        return (
            // <div key={i}>
            //     <p>{post.body}</p>
            //     <a>{post.link}</a>
            //     <p>{post.likes}</p>
            //     <Nav className="justify-content-end">
            //     <p>{post.likes}</p>
            //         <Button variant="dark" type="click" className="">
            //         Like
            //         </Button>
                    
            //     </Nav>  
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
            
            <Card.Body>
            <Card.Title><h3>{post.body}</h3></Card.Title>
                <Card.Text  key={post.id}>
                Was added: {post.created_at}
                </Card.Text>
              <Card.Link  key={post.link} href={post.link} className="text-white-50">{post.link}</Card.Link>
              <Nav className="justify-content-end">
              <p>{post.likes}</p>
              {/* onClick={handleLike} */}
           <Button value={post.id}  variant="dark" type="click" className="">Like</Button>
          </Nav>
            </Card.Body>
          </Card>
        ))}
      </>
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
        <div className=" height"> 
            {profile}
            {profilePosts}
            </div>
        </>
    )

}

export default SearchedProfile