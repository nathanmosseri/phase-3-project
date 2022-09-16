import React, { useEffect, useState } from "react";
import { Card, Button, Image, CImage, Container, Nav} from 'react-bootstrap';
import { Prev } from "react-bootstrap/esm/PageItem";

const MainPage = ({isLoggedIn, userInfo, usersNames}) => {

    const [postsToDisplay, setPostsToDisplay] = useState([])
    const [likeClicked, setLikeClicked] = useState([])
    const [click, setClick] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/namedPosts`).then(res => res.json())
        .then((data) => {
            setPostsToDisplay(data)
        })
    }, [click])

    const handleLike = (e) => {
      setLikeClicked(e.target.value)
      const updateLikes = {
        likes:  1
      }
      fetch(`http://localhost:9292/posts/${likeClicked}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateLikes)
      }).then(res => res.json())
      .then((data) => {
        setClick(prev => !prev)
      })
    }

    const posts = postsToDisplay.map((post, i) => {
        return (
        // <div key={i}>
        //     <p >{post.user.name}</p>
        //     <p key={post.id}>{post.body}</p>
        //     <a href={post.link}>{post.link}</a>
        //     <p>{post.likes}</p>
        //     <button>Like</button>
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
          <Card.Header key={i}> {post.user.name}
         
          </Card.Header>
          {/* <Image rounded thumbnail src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2021/03/4-lob-haircut-for-square-face-CSe6zHeKYT_.jpg?resize=1028%2C1196&ssl=1" width={20} height={20} className="rounded-circle w-25 "/>Header  */}
          <Card.Body>
            <Card.Title><h3>{post.body}</h3></Card.Title>
              <Card.Text  key={post.id}>
              Was added: {post.created_at}
              </Card.Text>
            <Card.Link  key={post.link} href={post.link} className="text-white-50">{post.link}</Card.Link>
            <Nav className="justify-content-end">
            <Nav.Link ><h3 className="text-white-50">{post.likes}</h3></Nav.Link>
           <Button value={post.id} onClick={handleLike} variant="dark" type="click" className=""><h4>Like</h4></Button>
          </Nav>
          </Card.Body>
        </Card>
      ))}
    </>
        )
    })


   
// <Image src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2021/03/4-lob-haircut-for-square-face-CSe6zHeKYT_.jpg?resize=1028%2C1196&ssl=1" 
//           className="rounded-circle w-25 "  fluid></Image>
    // userFollowingData.map((f) => {
    // })

    return (
        <div className="main-page">
        <h1 className="text-center text-white">general Posts</h1>
        {posts}
        </div>
    )

}

export default MainPage