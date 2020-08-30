import React from 'react'
import { deleteFounder, updateFounder } from '../../redux/actions'
import { connect, useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Formik } from 'formik';
import * as yup from 'yup'
import { useParams } from 'react-router-dom'

const validationScheme = yup.object({
    firstName: yup.string().required("Обязательное поле").matches(/^[A-Za-z+А-Яа-я]+$/,"Фамилия не может содержать цифры и любые знаки."),
    lastName: yup.string().required("Обязательное поле").matches(/^[A-Za-z+А-Яа-я]+$/,"Фамилия не может содержать цифры и любые знаки."),
    middleName: yup.string().required().matches(/^[A-Za-z+А-Яа-я]+$/,"Фамилия не может содержать цифры и любые знаки."),
    itn: yup.string().required("Обязательное поле").matches(/^[0-9]*$/,"ИНН должен состоять только из цифры").length(12,"ИНН должен состоять из 12 цифры")
});

export function FounderUpdate() {
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)
    const founder = useSelector(state => state.founders.founders.find(item => item.founderId === parseInt(id)))
    console.log(founder)
    console.log(founder.founderId)

    return (
        <Formik
        validationSchema={validationScheme}
        initialValues={{
            firstName: founder.firstName,
            lastName: founder.lastName,
            middleName: founder.middleName,
            itn: founder.itn
        }}

        onSubmit={(data, { setSubmitting }) => {

            dispatch(updateFounder(founder.founderId, data.itn, data.firstName, data.lastName, data.middleName));

            setSubmitting(true);
            setTimeout(() => {
                setSubmitting(false)
            }, 1000)

        }}
        >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, errors }) => (
                <Form onSubmit={handleSubmit} className="border border-primary p-5">
                                            <Form.Label>Имя</Form.Label>
                    <Form.Control
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Имя" 
                        className="mb-2"
                        isInvalid={!!errors.firstName}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                        </Form.Control.Feedback>
                        <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        placeholder="Фамилия" 
                        className="mb-2"
                        isInvalid={!!errors.lastName}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                        <Form.Label>Отчество</Form.Label>
                    <Form.Control
                        name="middleName"
                        value={values.middleName}
                        onChange={handleChange}
                        placeholder="Отчество" 
                        className="mb-2"
                        isInvalid={!!errors.middleName}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.middleName}
                        </Form.Control.Feedback>
                        <Form.Label>ИНН</Form.Label>
                    <Form.Control
                    name="itn"
                        value={values.itn}
                        onChange={handleChange}
                        placeholder="ИНН" 
                        className="mb-2"
                        isInvalid={!!errors.itn}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.itn} 
                        </Form.Control.Feedback>
                    <button disabled={isSubmitting} type="submit" className="btn btn-success mt-2" >Изменить</button>

                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                </Form>
            )}
        </Formik>
    )
}
