
import React from 'react'

import {  useDispatch, useSelector  } from 'react-redux'
import {Founder} from './Founder'
import {  deleteFounder } from '../../redux/actions'
import Table from 'react-bootstrap/Table'

export function Founders() {
    const dispatch = useDispatch()

    const founders = useSelector(state => state.founders.founders)
    const listFounders = founders.map(founder => <Founder founder={founder} key={founder.founderId} onDelete={() => dispatch(deleteFounder(founder.founderId))}/>)

    return (
        <div>
        
            <Table striped bordered hover size="sm" className="mt-2">
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Отчество</th>
                        <th>ИНН</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listFounders}
                </tbody>
            </Table>
        </div>
    )
}
