import React from 'react';
import Post from './Post';
import { Container } from "semantic-ui-react";

const Home = (props) => {
    return (
      <Container>
          {props.posts.map(post => <Post key={post._id} post={post}/>)}
      </Container>
    );
};

export default Home;