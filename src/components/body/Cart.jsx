import React from 'react';
import { Button, Item , Icon} from 'semantic-ui-react';
import _ from 'lodash';

const Cart = (props) => {
    const { items } = props;
    console.log(props);
    const handlerRemove = item => e => {
        props.removeFromCart(item);
    };
    const handlerBack = page => e => {
        props.switchPage(page);
    };

    return ( !items.length ? (
        <div style={{ textAlign: "center" }}>
            Корзина пуста...
            <Item>
                <Item.Content>
                    <Button basic {...props.siteColor} onClick={handlerBack('Shop')}> Назад </Button>
                </Item.Content>
            </Item>
        </div>
         ) : (
             <Item.Group relaxed>
                   <Item>
                       <Item.Content>
                           <Button basic {...props.siteColor} floated='right' onClick={handlerBack('Shop')}>
                               Назад
                           </Button>
                       </Item.Content>
                   </Item>
                   {items.map(item => (
                       <Item key={_.uniqueId()}>
                           <Item.Image size='small' src={item.image} />

                           <Item.Content verticalAlign='middle'>
                               <Item.Header>{item.title}</Item.Header>
                               <Item.Meta>{item.firm}</Item.Meta>
                               <Item.Description>{item.description}</Item.Description>
                               <br />
                               {item.price}<Icon name="rub" />
                               <Button basic compact color="red" floated='right' onClick={handlerRemove(item)}>
                                   Удалить
                               </Button>

                           </Item.Content>
                           </Item>
                   ))}
                   <Item>
                       <Item.Content>
                           <Item.Header>
                               Итого: &nbsp; {props.total} &nbsp; рублей.
                           </Item.Header>
                           <Button basic {...props.siteColor} floated='right'>Оформить Заказ</Button>
                           <Button basic {...props.siteColor} floated='right' onClick={handlerBack('Shop')}>
                               Назад
                           </Button>
                       </Item.Content>
                   </Item>
                   </Item.Group>
    ));
};

export default Cart;