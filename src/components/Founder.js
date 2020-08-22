import React from 'react'
import Button from 'react-bootstrap/Button'
import { deleteFounder} from '../redux/actions'
import {connect, useSelector, useDispatch} from 'react-redux'



export function Founder({ founder }) {

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteFounder(founder.founderId))
    }
    return (
        <tr>
            <td>{founder.firstName}</td>
            <td>{founder.lastName}</td>
            <td>{founder.middleName}</td>
            <td>{founder.itn}</td>
            <td><Button variant="info">Изменить</Button></td>
            <td><Button variant="danger" onClick={handleClick}>Удалить</Button></td>
        </tr>
    )
}
