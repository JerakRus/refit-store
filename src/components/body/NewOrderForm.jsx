import React from 'react';
import { reduxForm, Field } from "redux-form";
import { Container, Form, Button} from 'semantic-ui-react';
import { LabelInputField, TextAreaField } from 'react-semantic-redux-form';

class NewOrderForm extends React.Component {

    createOrder = values => {
        this.props.sendToMail({ contact: values, order: this.props.cart });
        this.props.reset();
        this.props.history.push('/orderCreated');

    }

    render() {
        return (
            <Container textAlign='center'>
            <Form widths='equal' onSubmit={this.props.handleSubmit(this.createOrder)}>
                <Form.Group>
                    <Field name='name' required
                           component={LabelInputField}
                           label={{ content:'Введите ваше имя:', basic: true,  ...this.props.siteColor }}
                    />
                    <Field name="number" type="tel" required
                           component={LabelInputField}
                           label={{ content:'Номер телефона:', basic: true, ...this.props.siteColor }}
                    />
                </Form.Group>
                <Field name="text" type="text"
                       component={TextAreaField}
                       label='Комментарии к заказу:'

                />
                <Button type="submit" {...this.props.siteColor}>Оформить</Button>
            </Form>
            </Container>
        );
    }
}

export default reduxForm({
    form: 'newOrder',
})(NewOrderForm);