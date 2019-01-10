import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import _ from 'lodash';

export default class MenuExampleSubMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    renderParts() {
        const { activeItem } = this.state;
        const { modelsParts } = this.props;

        return (
            <Menu.Item >
                Запчасти и Комплектующие
                <Menu.Menu>
                    {modelsParts.map(model => (
                        <Menu.Item key={_.uniqueId()}
                                   name={model}
                                   active={activeItem === {model}}
                                   onClick={this.handleItemClick}>
                            {model}
                        </Menu.Item>
                    ))}
                </Menu.Menu>
            </Menu.Item>
        )
    }

    renderSmartphones () {
        const { activeItem } = this.state;
        const { modelsSmartphones } = this.props;

        return (
            <Menu.Item>
                Телефоны
                <Menu.Menu>
                    {modelsSmartphones.map(model => (
                        <Menu.Item key={_.uniqueId()}
                                   name={model}
                                   active={activeItem === {model}}
                                   onClick={this.handleItemClick}>
                            {model}
                        </Menu.Item>
                    ))}
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
                {this.props.modelsParts && this.renderParts()}
                {this.props.modelsSmartphones && this.renderSmartphones()}
                <Menu.Item name='number' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                    <Icon name='grid layout' />
                    Красивые номера
                </Menu.Item>
            </Menu>
        )
    }
}
