import React from 'react'
import Button from 'react-bootstrap/Button'
import { deleteFounder, deleteCustomer} from '../../redux/actions'
import {connect, useSelector, useDispatch} from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'


export function Customer({ customer, founder }) {

    const handleClick = () => {

    }

    const  history = useHistory()
    const dispatch = useDispatch()
    const onDelete = () => {
        dispatch(deleteCustomer(customer.customerId))
    }

    const onRedirect = () => {
        console.log("Redirect")
        let path = `/customer_page/${customer.customerId}` 

        history.push(path)
        return <Redirect to={`/customer_page/${customer.customerId}`}/>
    }
    return (
        <tr>
            <th>{customer.name}</th>
            <th>{customer.itn}</th>
            <th>{customer.type == 1 ? "Индивидуальный предприниматель" : "Юридическое лицо"}</th>
            <td><Button variant="info" onClick={onRedirect}>Изменить</Button></td>
            <td><Button variant="danger" onClick={onDelete}>Удалить</Button></td>
        </tr>
    )
}
