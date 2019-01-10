import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import _ from 'lodash';

export default class MenuExampleSubMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    renderModelsParts() {
        const { activeItem } = this.state;
        const { modelsParts } = this.props;


        return (

            <Menu.Item>
                Запчасти и Комплектующие
                <Menu.Menu>
                    {modelsParts.map(model => (
                        <Menu.Item key={_.uniqueId()}
                                   name={model}
                                   active={activeItem === {model}}
                                   onClick={this.handleItemClick}>
                            {model}
                        </Menu.Item>
                    ))};
                </Menu.Menu>
            </Menu.Item>
        )
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu vertical color="green" >
                <Menu.Item>
                    <Input placeholder='Поиск...' />
                </Menu.Item>
                   {this.props.modelsParts && this.renderModelsParts()}
                <Menu.Item>
                    Телефоны
                    <Menu.Menu>

                        <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
                            Add
                        </Menu.Item>
                        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                            Remove
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                    <Icon name='grid layout' />
                    Browse
                </Menu.Item>
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                >
                    Messages
                </Menu.Item>

                <Dropdown item text='More'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='Edit Profile' />
                        <Dropdown.Item icon='globe' text='Choose Language' />
                        <Dropdown.Item icon='settings' text='Account Settings' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )
    }
}
