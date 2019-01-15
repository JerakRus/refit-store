import React, { Component } from 'react';
import {Icon, Menu} from 'semantic-ui-react';


export default class MenuTop extends Component {

    handleItemClick = menuPage => e =>{
        this.props.switchPage(menuPage);
        this.props.reset();
    };


    render() {
        const { menuPage, siteColor } = this.props;
        return (
            <Menu {...siteColor} >
                <Menu.Item name="Home" active={menuPage === 'Home'} onClick={this.handleItemClick('Home')}>
                    Главная &nbsp;
                    <Icon name='home' color="green"/>
                </Menu.Item>
                <Menu.Item name="Shop" active={menuPage === 'Shop'} onClick={this.handleItemClick('Shop')}>
                    Магазин &nbsp;
                    <Icon name='cart plus' color="blue" />
                </Menu.Item>
                <Menu.Item name="Contacts" active={menuPage === 'Contacts'} onClick={this.handleItemClick('Contacts')}>
                    Контакты &nbsp;
                    <Icon name='address book outline' color ="black"/>
                </Menu.Item>
                <Menu.Menu position="right">
                    { menuPage === 'Shop' &&
                        <Menu.Item name="Cart" active={menuPage === 'Cart'} onClick={this.handleItemClick('Cart')}>
                            <Icon name='cart arrow down' color="red"/>
                            &nbsp;`Корзина &nbsp;
                            ({this.props.count})
                        </Menu.Item>
                    }
                    <Menu.Item fitted="vertically"  link href="https://api.whatsapp.com/send?phone=79999899947&text=" target="_blank">
                        <Icon name='whatsapp square' color="green" fitted />
                    </Menu.Item>
                    <Menu.Item fitted="vertically"  link href="https://vk.com/refitstore" target="_blank">
                        <Icon name='vk' color="blue" fitted />
                    </Menu.Item>
                    <Menu.Item fitted="vertically" link href="https://www.instagram.com/refitstore_official/" target="_blank" >
                        <Icon name='instagram' color="purple" fitted />
                    </Menu.Item>
                    <Menu.Item fitted="vertically" link href="mailto:RefitStore47@mail.ru" target="_blank" >
                        <Icon name='mail' color="blue" fitted />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}