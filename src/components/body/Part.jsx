import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

const Part = (item) => {
return (
    <Card {...item.siteColor}>
    <Card.Content>
    <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
    <Card.Header>{item.title}</Card.Header>
        <Card.Meta><strong>{item.price}</strong></Card.Meta>
<Card.Description>
    {item.description}
</Card.Description>
</Card.Content>
<Card.Content extra>
    <div className='ui two buttons'>
        <Button basic color='green'>
            Approve
        </Button>
        <Button basic color='red'>
            Decline
        </Button>
    </div>
</Card.Content>
</Card>
);
    };

export default Part;