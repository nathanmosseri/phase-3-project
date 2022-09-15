import React, { useState } from "react";
import { Card, Button, Image, CImage} from 'react-bootstrap';

const MainPage = ({isLoggedIn, userInfo, usersNames}) => {

    const [postsToDisplay, setPostsToDisplay] = useState([])

    useState(() => {
        fetch(`http://localhost:9292/namedPosts`).then(res => res.json())
        .then((data) => {
            setPostsToDisplay(data)
        })
    }, [])

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
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '40rem' }}
          className="mb-2"
        >
          <Card.Header> {post.user.name}</Card.Header>
          {/* <Image rounded thumbnail src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2021/03/4-lob-haircut-for-square-face-CSe6zHeKYT_.jpg?resize=1028%2C1196&ssl=1" width={20} height={20} className="rounded-circle w-25 "/>Header  */}
          <Card.Body>
            <Card.Title><p key={post.id}>{post.body}</p></Card.Title>
            <Card.Text>
            <p key={post.id}>{post.body}</p>
            </Card.Text>
            <Card.Link href={post.link}>{post.link}</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
        )
    })


   
// <Image src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2021/03/4-lob-haircut-for-square-face-CSe6zHeKYT_.jpg?resize=1028%2C1196&ssl=1" 
//           className="rounded-circle w-25 "  fluid></Image>
    // userFollowingData.map((f) => {
    //     console.log(f.following_id)
    // })

    return (
        <div className="main-page">
        <h1>Main Page</h1>
        {posts}
        </div>
    )

}

export default MainPage