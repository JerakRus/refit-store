import React, { Component } from 'react';
import { Input, Menu} from 'semantic-ui-react';


export default class MenuTop extends Component {

    handleItemClick = page => e =>{
        this.props.switchPage(page);
    }


    render() {
        const { page } = this.props;
        return (
            <Menu secondary>
                <Menu.Item active={page === 'Home'} onClick={this.handleItemClick('Home')}>
                    Главная
                </Menu.Item>
                <Menu.Item active={page === 'Shop'} onClick={this.handleItemClick('Shop')}>
                    Магазин
                </Menu.Item>
                <Menu.Item active={page === 'Contacts'} onClick={this.handleItemClick('Contacts')}>
                    Контакты
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Поиск...' />
                    </Menu.Item>
                    <Menu.Item active={page === 'LogIn'} onClick={this.handleItemClick('LogIn')}>
                        Войти
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}
