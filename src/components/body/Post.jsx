import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'

const Post = (props) => {
    return (
        <Segment.Group>
            <Segment padded size='large'>
            <Header as='h2'>{props.post.title}</Header>
            {props.post.image && <Image centered src={`${props.post.image}`}/>}
            <p>
                {props.post.text}
            </p>
            </Segment>
            <Segment basic size='mini' textAlign='right'>
                <i style={{ color: 'grey'}}>{props.date} </i>
            </Segment>
        </Segment.Group>
    );
};

export default Post;