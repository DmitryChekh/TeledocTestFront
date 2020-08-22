
import React, { useEffect } from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'
import {Founder} from './Founder'
import { fetchFounders } from '../redux/actions'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export function Founders() {
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(fetchFounders())
    }

    function GetDataFromServer() {
        useEffect(handleSubmit,[]);
        return null;
    }

    GetDataFromServer()

    const founders = useSelector(state => state.founders.founders)
    const listFounders = founders.map(founder => <Founder founder={founder} key={founder.founderId} />)

    return (
        <div>
            {/* <Button onClick={handleSubmit} className="mt-2">Загрузить</Button> */}
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
