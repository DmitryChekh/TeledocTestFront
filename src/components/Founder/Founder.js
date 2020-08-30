import React from 'react'
import Button from 'react-bootstrap/Button'
import { deleteFounder} from '../../redux/actions'
import {connect, useSelector, useDispatch} from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'



export function Founder({ founder, onDelete }) {
    const  history = useHistory()
    const dispatch = useDispatch()


    const onRedirect = () => {
        console.log("Redirect")
        let path = `/founder_page/${founder.founderId}` 

        history.push(path)
        // return <Redirect to={`/founder_page/${founder.founderId}`}/>
    }

    return (
        <tr>
            <td>{founder.firstName}</td>
            <td>{founder.lastName}</td>
            <td>{founder.middleName}</td>
            <td>{founder.itn}</td>
            <td><Button variant="info" onClick={onRedirect}>Изменить</Button></td>
            <td><Button variant="danger" onClick={onDelete}>Удалить</Button></td>
        </tr>
    )
}
