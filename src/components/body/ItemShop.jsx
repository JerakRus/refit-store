import React from 'react';
import { Button, Card, Icon, Image} from 'semantic-ui-react';


const ItemShop = (props) => {
    const { item } = props;

    const handlerToCart = item => e => {
        props.addToCart(item);
    };

    return (
        <Card {...props.siteColor}>
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
                    <Button basic {...props.siteColor} onClick={handlerToCart(item)}>
                        Добавить в корзину &nbsp; {item.addCount > 0 && `(${item.addCount})`}
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
};

export default ItemShop;