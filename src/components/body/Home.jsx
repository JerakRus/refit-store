import React from 'react';
import Post from './Post';
import { Container, Segment } from "semantic-ui-react";

const Home = (props) => {
    return (
      <Container text>
          {props.posts.map(post => <Post key={post._id} post={post}/>)}
          <Segment vertical />
      </Container>
    );
};

export default Home;