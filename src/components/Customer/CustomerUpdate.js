import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik} from 'formik';
import * as yup from 'yup'
import { useParams} from 'react-router-dom'
import { ListFounders } from './ListFounders'
import { updateCustomer } from '../../redux/actions'
import { Alert } from 'react-bootstrap';


const validationScheme = yup.object({
    name: yup.string().required("Обязательное поле").matches(/^[A-Za-z+А-Яа-я]+$/, "Название не может содержать цифры и любые знаки."),
    itn: yup.string().required("Обязательное поле").matches(/^[0-9]*$/,"ИНН должен состоять только из цифры").length(12,"ИНН должен состоять из 12 цифры")
});



export function CustomerUpdate() {

    const dispatch = useDispatch()
    const { id } = useParams()

    const allFounders = useSelector(state => state.founders.founders)
    const customer = useSelector(state => state.customers.customers.find(item => item.customerId === parseInt(id)))
    let found = useSelector(state => state.founders.founders.filter(item => customer.founders.includes(item.founderId)))

    const [founders, setFounders] = useState(found);
    const formikRef = useRef();

    useEffect(() => {
        formikRef.current.setFieldValue("founders", founders.map(founder => founder.founderId))
    }, [founders]);


    const onDeleteFounder = (event) => {
        const founder = JSON.parse(event.target.value)
        setFounders(prevState => prevState.filter(item => item.founderId !== founder.founderId))
    }

    const onAddFounder = (event) => {
        const founder = JSON.parse(event.currentTarget.value)
        const existFounders = founders.map(founder => founder.founderId)
        if (customer.type === 2) {
            if (!existFounders.includes(founder.founderId)) {
                setFounders(prevState => prevState.concat(founder))
            }
            else {
                alert("Уже есть")
            }
        }
        else {
            if (existFounders.length === 0) {
                setFounders(prevState => prevState.concat(founder))
            }
            else {
                alert("Индивидуальный предприниматель не может иметь несколько учредителей")
            }
        }
    }



    console.log(founders)
    return (

        <React.Fragment>
            <Formik
                validationSchema={validationScheme}

                initialValues={{
                    customerId: customer.customerId,
                    name: customer.name,
                    itn: customer.itn,
                    type: customer.type,
                    founders: []
                }}


                innerRef={formikRef}

                onSubmit={(data, { setSubmitting }) => {
                    console.log(data)
                    setSubmitting(true)
                    dispatch(updateCustomer(data.customerId, data.itn, data.name, data.founders))
                    setSubmitting(false)
                }}
            >

                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue, errors }) => (

                    <Form onSubmit={handleSubmit} className="border border-primary p-5">
                        <h1>{customer.type == 1 ? "Индивидуальный предприниматель" : "Юридическое лицо"}</h1>
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Название"
                            className="mb-2"
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
                            className="mb-2"
                            isInvalid={!!errors.itn}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.itn}
                        </Form.Control.Feedback>
                        {founders.length !== 0 ?
                            <React.Fragment>
                                <ListFounders
                                    founders={founders}
                                    name="founders"
                                    value={founders}
                                    onDeleteFounder={(e) => onDeleteFounder(e)}
                                /></React.Fragment> : <Alert variant="dark">Учредителей нет</Alert>}

                        <Form.Label>Добавить учредителей</Form.Label>
                        <Form.Control as="select" multiple name="foundersId"
                            onChange={(e) => onAddFounder(e)}>
                            {allFounders.map(founder =>
                                <option
                                    key={founder.founderId} value={JSON.stringify(founder, null, 2)}>
                                    {founder.lastName} {founder.firstName} {founder.middleName}
                                </option>)}
                        </Form.Control>

                        <button disabled={isSubmitting} type="submit" className="btn btn-success mt-2" >Изменить</button>

                    </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}
