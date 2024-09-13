import React from 'react'
import { Col } from 'react-bootstrap'

export default function FormComponent({sm, md, lg, input}) {
    return (
            <Col sm={sm} md={md} lg={lg}>
                {input}
            </Col>
    )
}
