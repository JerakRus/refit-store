import React, { Component } from 'react';
import {Icon, Menu} from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class MenuTop extends Component {

    handleItemClick = menuPage => e =>{
        this.props.switchPage(menuPage);
        this.props.reset();
    };

    render() {
        const { menuPage, siteColor } = this.props;
        return (
            <Menu {...siteColor} stackable>
                <Link to='/'>
                <Menu.Item as='div' name="Home" active={menuPage === 'Home'} onClick={this.handleItemClick('Home')}>
                    Главная &nbsp;
                    <Icon name='home' color="green"/>
                </Menu.Item>
                </Link>
                <Link to='/shop'>
                <Menu.Item as='div' name="Shop" active={menuPage === 'Shop'} onClick={this.handleItemClick('Shop')}>
                    Магазин &nbsp;
                    <Icon name='cart plus' color="blue" />
                </Menu.Item>
                </Link>
                <Link to='/contacts'>
                <Menu.Item as='div' name="Contacts" active={menuPage === 'Contacts'} onClick={this.handleItemClick('Contacts')}>
                    Контакты &nbsp;
                    <Icon name='address book outline' color ="black"/>
                </Menu.Item>
                </Link>
                <Menu.Menu position="right">
                    <Link to='/cart'>
                        <Menu.Item as='div' name="Cart" active={menuPage === 'Cart'} onClick={this.handleItemClick('Cart')} position='right'>
                            <Icon name='cart arrow down' color="red"/>
                            &nbsp;Корзина &nbsp;
                            ({this.props.count})
                        </Menu.Item>
                    </Link>
                    <Menu.Item   link href="https://api.whatsapp.com/send?phone=79999899947&text=" target="_blank">
                        <Icon name='whatsapp square' color="green" fitted />
                    </Menu.Item>
                    <Menu.Item  link href="https://vk.com/refitstore" target="_blank">
                        <Icon name='vk' color="blue" fitted />
                    </Menu.Item>
                    <Menu.Item  link href="https://www.instagram.com/refitstore_official/" target="_blank" >
                        <Icon name='instagram' color="purple" fitted />
                    </Menu.Item>
                    <Menu.Item  link href="mailto:RefitStore47@mail.ru" target="_blank" >
                        <Icon name='mail' color="blue" fitted />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}