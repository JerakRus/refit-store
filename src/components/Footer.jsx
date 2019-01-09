import React from 'react'
import { Segment } from 'semantic-ui-react'

const color = {
        color: 'grey',
}

const Footer = () => (
    <div>
        <Segment vertical/>
        <Segment vertical color='green' textAlign='center'>
                <span style={color}> © 2019 Интернет-магазин мобильных аксессуаров и запчастей для мобильных устройств.
                        Сервисный центр Refit:Store. Копировальный центр. <br /> Адрес: МО, г. Мытищи, Олимпийский проспект,
                        д.34. Тел.: <b>8-999-989-99-47</b>. Электронная почта: <b>refitstore47@mail.ru</b>.
                </span>
        </Segment>
    </div>
);

export default Footer;