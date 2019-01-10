import React from 'react';
import { Card } from 'semantic-ui-react';
import Part from './Part';

export default class Shop extends React.Component {
    render () {
        const { parts, siteColor } = this.props;
        console.log(parts);
        return (
            <Card.Group>
                {parts.map(item => <Part key={item.id} {...item} siteColor={siteColor}/>)}
            </Card.Group>
        );
    }
};