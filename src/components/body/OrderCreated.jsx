import React from 'react';
import {Link, withRouter} from "react-router-dom";
import { Button, Item } from "semantic-ui-react";

class OrderCreated extends React.Component {
    handlerBackPage = () => {
        this.props.hystory.push('/shop');
    }


    render() {
        return (
            <div style={{ textAlign: "center" }}>
                Спасибо за ваш заказ! В ближайшее время мы свяжемся с вами для уточнения деталей заказа.
                <Item>
                    <Item.Content>
                        <Link to='/shop'>
                            <Button basic color='green'>
                                Назад
                            </Button>
                        </Link>
                    </Item.Content>
                </Item>

            </div>
        )

    }
}

export default withRouter(OrderCreated);