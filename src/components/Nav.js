import React from 'react'
import Nav from 'react-bootstrap/Nav'



export function Navbar() {
    return (
        <Nav
            activeKey="/home"
        >
            <Nav.Item>
                <Nav.Link href="/customer">Клиенты</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/founder">Учредители</Nav.Link>
            </Nav.Item>
        </Nav>
    )

}
