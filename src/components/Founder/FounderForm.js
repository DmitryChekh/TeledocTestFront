import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Formik } from 'formik';
import * as yup from 'yup'
import {  useDispatch } from 'react-redux'
import { createFounder } from '../../redux/actions'


const validationScheme = yup.object({
    firstName: yup.string().required("Обязательное поле").matches(/^[A-Za-z+А-Яа-я]+$/,"Фамилия не может содержать цифры и любые знаки."),
    lastName: yup.string().required("Обязательное поле").matches(/^[A-Za-z+А-Яа-я]+$/,"Фамилия не может содержать цифры и любые знаки."),
    middleName: yup.string().required().matches(/^[A-Za-z+А-Яа-я]+$/,"Фамилия не может содержать цифры и любые знаки."),
    itn: yup.string().required("Обязательное поле").matches(/^[0-9]*$/,"ИНН должен состоять только из цифры").length(12,"ИНН должен состоять из 12 цифры")
});




export function FounderForm() {

    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{
                firstName: 'Дмитрий',
                lastName: 'Мачихелян',
                middleName: 'Сергеевич',
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
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, errors }) => (
                <Form onSubmit={handleSubmit} className="border border-primary p-5">
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    placeholder="Фамилия" 
                                    isInvalid={!!errors.lastName}/>
                                <Form.Control.Feedback type="invalid">
                                    {errors.lastName}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Имя</Form.Label>
                                <Form.Control
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Имя" 
                                    isInvalid={!!errors.firstName}/>
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Отчество</Form.Label>
                                <Form.Control
                                    name="middleName"
                                    value={values.middleName}
                                    onChange={handleChange}
                                    placeholder="Отчество" 
                                    isInvalid={!!errors.middleName}/>
                                <Form.Control.Feedback type="invalid">
                                    {errors.middleName}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="pt-2">
                        <Col>
                            <Form.Group>
                                <Form.Label>ИНН</Form.Label>
                                <Form.Control
                                    name="itn"
                                    value={values.itn}
                                    onChange={handleChange}
                                    placeholder="ИНН"
                                    isInvalid={!!errors.itn} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.itn}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <button disabled={isSubmitting} type="submit" className="btn btn-success mt-2" >Добавить учредителя</button>

                </Form>
            )}
        </Formik>
    )
}

