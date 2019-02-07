import React from 'react';
import PostContainer from '../../containers/Post';
import { Container, Segment } from "semantic-ui-react";

const Home = (props) => {
    return (
      <Container >
          {props.posts.map(post => <PostContainer key={post._id} post={post} />)}
          <Segment vertical />
      </Container>
    );
};

export default Home;