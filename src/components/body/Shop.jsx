import React from 'react';
import { Card, Grid} from 'semantic-ui-react';
import Part from './Part';
import FilterContainer from '../../containers/Filter';

export default class Shop extends React.Component {
    render () {
        const { parts, siteColor } = this.props;
        return (
            <Grid>
                <Grid.Column width={3}>
                    <FilterContainer />
                </Grid.Column>
                <Grid.Column width={13}>
                    <Card.Group>
                        {parts.map(item => <Part key={item.id} {...item} siteColor={siteColor}/>)}
                    </Card.Group>
                </Grid.Column>
            </Grid>
        );
    }
};