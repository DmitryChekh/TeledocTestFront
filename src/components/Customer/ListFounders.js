import React from 'react'
import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap'



export function ListFounders({ founders, onDeleteFounder }) {
    return (
        <React.Fragment>
        <p>Учредители</p>
        {founders.map(founder =>
        <ListGroup.Item className="d-flex justify-content-between"
            key={founder.founderId}
            name="founders"
            value={founder}>
            {founder.lastName} {founder.firstName} {founder.middleName}
            <button type="button" className="btn btn-danger pull-right" value={JSON.stringify(founder, null, 2)} onClick={onDeleteFounder}>Удалить</button>
        </ListGroup.Item>)}
        </React.Fragment>
    )
}
