import React from 'react';
import { Button, Item , Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import _ from 'lodash';


const Cart = (props) => {
    const { items } = props;

    const handlerAdd = item => e => {
        props.addToCart(item);
    };
    const handlerRemove = item => e => {
        props.removeFromCart(item);
    };
    const handlerBackPage = page => e => {
      props.switchPage(page);
    };


    return ( !items.length ? (
        <div style={{ textAlign: "center" }}>
            Корзина пуста...

            <Item>
                <Item.Content>
                    <Link to='/shop'>
                    <Button basic {...props.siteColor} onClick={handlerBackPage('Shop')}>
                        Назад
                    </Button>
                    </Link>
                </Item.Content>
            </Item>

        </div>
         ) : (
             <Item.Group relaxed>
                   <Item>
                       <Item.Content>
                           <Link to='/shop'>
                           <Button basic {...props.siteColor} floated='right' onClick={handlerBackPage('Shop')}>
                               Назад
                           </Button>
                           </Link>
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
                               {item.price}<Icon name="rub" /> &nbsp; х &nbsp; {item.addCount} &nbsp; шт.
                               <Button basic compact {...props.siteColor} floated='right' onClick={handlerAdd(item)}>
                                   Добавить
                               </Button>
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
                           <Link to='/createOrder'>
                               <Button {...props.siteColor} floated='right'>
                                   Оформить заказ
                               </Button>
                           </Link>
                           <Link to='/shop'>
                           <Button basic {...props.siteColor} floated='right' onClick={handlerBackPage('Shop')}>
                               Назад
                           </Button>
                           </Link>
                       </Item.Content>
                   </Item>
                   </Item.Group>
    ));
};

export default Cart;