import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'

const Post = (props) => (
    <Segment size='large'>
            <Header as='h2'>{props.post.title}</Header>
            {props.post.image && <Image centered src={`${props.post.image}`} />}
            <p>
               {props.post.text}
            </p>
    </Segment>
);

export default Post;