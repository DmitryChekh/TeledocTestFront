import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Formik } from 'formik';
import * as yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { createCustomer, fetchFounders, fetchCustomers } from '../../redux/actions'


const validationScheme = yup.object({
    name: yup.string().required("Обязательное поле").matches(/^[A-Za-z+А-Яа-я]+$/, "Название не может содержать цифры и любые знаки."),
    itn: yup.string().required("Обязательное поле").matches(/^[0-9]*$/, "ИНН должен состоять только из цифры").length(12, "ИНН должен состоять из 12 цифры"),
    typeid: yup.number().positive()
});




export function CustomerForm() {
    const dispatch = useDispatch()



    const founders = useSelector(state => state.founders.founders)
    var listFounders = founders.map(founder =>
        <option name="foundersId"
            founder={founder}
            key={founder.founderId} value={founder}>
            {founder.lastName} {founder.firstName} {founder.middleName}
        </option>);



    return (
        <Formik
            initialValues={{
                name: 'Газпром',
                itn: '123456789012',
            }}
            validationSchema={validationScheme}
            onSubmit={(data, { setSubmitting, resetForm }) => {
                console.log("Array", Array.isArray(data.foundersId))
                setSubmitting(true);
                if(Array.isArray(data.foundersId))
                {
                    let founder = data.foundersId.map(item => parseInt(item))
                    data.foundersId = founder
                }
                else{
                    let founder = [data.foundersId]
                    data.foundersId = founder
                }

                dispatch(createCustomer(data.itn, data.name, data.typeid, data.foundersId));
                setSubmitting(false)

                resetForm({})

            }}>
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue, errors }) => (
                <Form onSubmit={handleSubmit} className="border border-primary p-5">
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Название"
                        className="mb-4"
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                    <Form.Label>ИНН</Form.Label>
                    <Form.Control
                        name="itn"
                        value={values.itn}
                        onChange={handleChange}
                        placeholder="ИНН"
                        isInvalid={!!errors.itn}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.itn}
                    </Form.Control.Feedback>
                    <Row>
                        <Form.Group className="mt-4">
                            <Form.Check inline label="Индивидуальный предприниматель"
                                type="radio"
                                name="typeid"
                                value={1}
                                onChange={handleChange} />
                            <Form.Check inline label="Юридическое лицо"
                                type="radio"
                                name="typeid"
                                value={2}
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    {values.typeid > 1 &&
                        <Form.Control as="select" multiple name="foundersId"
                            onChange={handleChange}>
                            {founders.map(founder =>
                                <option
                                    key={founder.founderId} value={founder.founderId}>
                                    {founder.lastName} {founder.firstName} {founder.middleName}
                                </option>)}
                        </Form.Control>}
                    {values.typeid == 1 &&
                        <Form.Control as="select" name="foundersId"
                            onChange={handleChange}>
                            <option value={null}></option>
                            {founders.map(founder =>
                                <option
                                    key={founder.founderId} value={founder.founderId}>
                                    {founder.lastName} {founder.firstName} {founder.middleName}
                                </option>)}
                        </Form.Control>}

                    <Button disabled={isSubmitting} type="submit" className="btn btn-success mt-4" >Добавить клиента</Button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    )
}

