import React from 'react';
import { Button, Card, Icon, Image} from 'semantic-ui-react';


export default class ItemShop extends React.Component {

    handlerToCart = item => e => {
        this.props.addToCart(item);
    };

    render() {
        const { item } = this.props;

        return (
        <Card {...this.props.siteColor}>
            <Image src={item.image}/>
            <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>
                    <span>{item.firm}</span>
                </Card.Meta>
                <Card.Description>{item.price}<Icon name="rub"/></Card.Description>
                <Card.Description>{item.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic {...this.props.siteColor} onClick={this.handlerToCart(item)}>
                        Добавить в корзину &nbsp; {item.addCount > 0 && `(${item.addCount})`}
                    </Button>
                </div>
            </Card.Content>
        </Card>
        );
    }
};
