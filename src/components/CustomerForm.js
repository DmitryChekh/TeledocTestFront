import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { createCustomer } from '../redux/actions'



function CustomerForm({ createCustomer }) {

    const [customer, setCustomer] = React.useState(null);

    const SubminHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
        </Form>
    )

}

export default CustomerForm;