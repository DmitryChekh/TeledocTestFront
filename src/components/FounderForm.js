import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Formik } from 'formik';
import * as yup from 'yup'
import {connect, useSelector, useDispatch} from 'react-redux'
import {createFounder} from '../redux/actions'


const validationScheme = yup.object({
    firstName: yup.string().required().matches(/^[A-Za-z+А-Яа-я]+$/),
    lastName: yup.string().required().matches(/^[A-Za-z+А-Яа-я]+$/),
    middleName: yup.string().required().matches(/^[A-Za-z+А-Яа-я]+$/),
    itn: yup.string().required().length(12).matches(/^[0-9]*$/)
});




export function FounderForm() {

    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{
                firstName: 'выфв',
                lastName: 'фывфыв',
                middleName: 'фыв',
                itn: '123456789012'
            }}
            validationSchema={validationScheme}
            onSubmit={(data, { setSubmitting, resetForm }) => {
                
                dispatch(createFounder(data.itn, data.firstName, data.lastName, data.middleName));

                setSubmitting(true);
                setTimeout(() => {
                    setSubmitting(false)
                    resetForm()
                }, 1000)

            }}>
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} className="border border-primary p-5">
                    <Row>
                        <Col>
                            <Form.Control
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Имя" />
                        </Col>
                        <Col>
                            <Form.Control
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                placeholder="Фамилия" />
                        </Col>
                        <Col>
                            <Form.Control
                                name="middleName"
                                value={values.middleName}
                                onChange={handleChange}
                                placeholder="Отчество" />
                        </Col>
                    </Row>
                    <Row className="pt-2">
                        <Col>
                            <Form.Control
                                name="itn"
                                value={values.itn}
                                onChange={handleChange}
                                placeholder="ИНН" />
                        </Col>
                    </Row>
                    <button disabled={isSubmitting} type="submit" className="btn btn-success mt-2" >Отправить</button>

                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    )
}

