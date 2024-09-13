import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function FeaturedCard({card, lg, md, sm, img,  icon , title, text, display, span, titleClass, txtClass}) {
    return (
        <Col sm={sm} md={md} lg={lg} className='my-2 m-lg-0' >
            <Card className={`border-0 shadow rounded-0 ${card}`}>
                <Card.Img variant="top" src={img} />
                <Card.Body className={display}>
                    <span className={`${span} `}>{icon}</span>
                    <div>
                        <Card.Title className={titleClass}>{title}</Card.Title>
                        <Card.Text className={txtClass}>{text}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
