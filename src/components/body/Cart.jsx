import React from 'react';
import { Button, Item , Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom'


export default class Cart extends React.Component {

    handlerAdd = item => e => {
        this.props.addToCart(item);
    }
    handlerRemove = item => e => {
        this.props.removeFromCart(item);
    }
    handlerBackPage = page => e => {
        this.props.switchPage(page);
    }

    renderEmptyCart() {
        return (
            <div style={{ textAlign: "center" }}>
                Корзина пуста...
                <Item>
                    <Item.Content>
                        <Link to='/shop'>
                            <Button basic {...this.props.siteColor} onClick={this.handlerBackPage('Shop')}>
                                Назад
                            </Button>
                        </Link>
                    </Item.Content>
                </Item>
            </div>
        );
    }

    renderItemsCart() {
        const { items } = this.props;
        return (
            <Item.Group relaxed>
                <Item>
                    <Item.Content>
                        <Link to='/shop'>
                            <Button basic {...this.props.siteColor} floated='right' onClick={this.handlerBackPage('Shop')}>
                                Назад
                            </Button>
                        </Link>
                    </Item.Content>
                </Item>
                {items.map(item => (
                    <Item key={item._id}>
                        <Item.Image size='small' src={item.image} />

                        <Item.Content verticalAlign='middle'>
                            <Item.Header>{item.title}</Item.Header>
                            <Item.Meta>{item.firm}</Item.Meta>
                            <Item.Description>{item.description}</Item.Description>
                            <br />
                            {item.price}<Icon name="rub" /> &nbsp; х &nbsp; {item.addCount} &nbsp; шт.
                            <Button basic compact {...this.props.siteColor} floated='right' onClick={this.handlerAdd(item)}>
                                Добавить
                            </Button>
                            <Button basic compact color="red" floated='right' onClick={this.handlerRemove(item)}>
                                Удалить
                            </Button>
                        </Item.Content>
                    </Item>
                ))}
                <Item>
                    <Item.Content>
                        <Item.Header>
                            Итого: &nbsp; {this.props.total} &nbsp; рублей.
                        </Item.Header>
                        <Link to='/createOrder'>
                            <Button {...this.props.siteColor} floated='right'>
                                Оформить заказ
                            </Button>
                        </Link>
                        <Link to='/shop'>
                            <Button basic {...this.props.siteColor} floated='right' onClick={this.handlerBackPage('Shop')}>
                                Назад
                            </Button>
                        </Link>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }

    render() {
        const { items } = this.props;
        return !items.length ? this.renderEmptyCart() : this.renderItemsCart();
    }
};
