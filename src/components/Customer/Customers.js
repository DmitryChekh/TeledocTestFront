
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {Customer} from './Customer'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { fetchCustomers } from '../../redux/actions'

export function Customers() {



    const customers = useSelector(state => state.customers.customers)
    const listCustomers = customers.map(customer => <Customer customer={customer} key={customer.customerId} />)

    return (
        <div>
            <Table striped bordered hover size="sm" className="mt-2">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>ИНН</th>
                        <th>Тип</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listCustomers}
                </tbody>
            </Table>
        </div>
    )
}
