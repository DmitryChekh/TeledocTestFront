import React from 'react'
import Button from 'react-bootstrap/Button'
import { deleteFounder} from '../redux/actions'
import {connect, useSelector, useDispatch} from 'react-redux'



export function FounderUpdate({ founder }) {

    const dispatch = useDispatch()
    return (
        <Formik>
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} className="border border-primary p-5">
                    <Row>
                        <Col>
                            <Form.Control
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="���" />
                        </Col>
                        <Col>
                            <Form.Control
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                placeholder="�������" />
                        </Col>
                        <Col>
                            <Form.Control
                                name="middleName"
                                value={values.middleName}
                                onChange={handleChange}
                                placeholder="��������" />
                        </Col>
                    </Row>
                    <Row className="pt-2">
                        <Col>
                            <Form.Control
                                name="itn"
                                value={values.itn}
                                onChange={handleChange}
                                placeholder="���" />
                        </Col>
                    </Row>
                    <button disabled={isSubmitting} type="submit" className="btn btn-success mt-2" >���������</button>

                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    )
}
