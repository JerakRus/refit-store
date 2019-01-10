import React, { Component } from 'react';
import { Input, Menu} from 'semantic-ui-react';


export default class MenuTop extends Component {

    handleItemClick = menuPage => e =>{
        this.props.switchPage(menuPage);
    }


    render() {
        const { menuPage, siteColor } = this.props;
        return (
            <Menu {...siteColor}>
                <Menu.Item active={menuPage === 'Home'} onClick={this.handleItemClick('Home')}>
                    Главная
                </Menu.Item>
                <Menu.Item active={menuPage === 'Shop'} onClick={this.handleItemClick('Shop')}>
                    Магазин
                </Menu.Item>
                <Menu.Item active={menuPage === 'Contacts'} onClick={this.handleItemClick('Contacts')}>
                    Контакты
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Поиск...' />
                    </Menu.Item>
                    <Menu.Item active={menuPage === 'LogIn'} onClick={this.handleItemClick('LogIn')}>
                        Войти
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}
