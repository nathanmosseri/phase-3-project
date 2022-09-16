import React, { useEffect, useState } from "react";
import { Card, Button, Image, CImage, Nav} from 'react-bootstrap';

const PhasePosts = ({userInfo, oneUserData, phaseData, phasePosts}) => {
    
    const postsForPhase = phasePosts.map((post, i) => {
        return (
        // <div key={i}>
        //     <p >{post.user.name}</p>
        //     <p key={post.id}>{post.body}</p>
        //     <a>{post.link}</a>
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
            <Card.Header key={i}> {post.user.name}</Card.Header>
            {/* <Image rounded thumbnail src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2021/03/4-lob-haircut-for-square-face-CSe6zHeKYT_.jpg?resize=1028%2C1196&ssl=1" width={20} height={20} className="rounded-circle w-25 "/>Header  */}
            <Card.Body>
              <Card.Title><h3>{post.body}</h3></Card.Title>
              <Card.Text  key={post.id}>
              Was added: {post.created_at}
              </Card.Text>
              <Card.Link  key={post.link} href={post.link} className="text-white-50">{post.link}</Card.Link>
              <Nav className="justify-content-end">
                <Button variant="dark" type="click" className="">
                Like
                </Button>
                <Button variant="dark" type="click" className="" disabled>
                Liked
                </Button>
            </Nav>
            </Card.Body>
          </Card>
        ))}
      </>
        )
    })


    return (
        <>
        {/* <div className="min-height"> */}
        <h1 className="text-center text-white">{phaseData}</h1>
        {postsForPhase}
        {/* </div> */}
        </>
    )

}

export default PhasePosts