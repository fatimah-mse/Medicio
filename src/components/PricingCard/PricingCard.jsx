import React from 'react'
import './PricingCard.css'
import { Card, Col } from 'react-bootstrap'
import BTNComponent from '../BTNComponent/BTNComponent'

export default function PricingCard({bg, title, num, CardTextData, adv}) {
    return (
        <Col sm={12} md={6} lg={3} className='my-2' >
            <Card className='border-0 shadow rounded position-relative overflow-hidden' >
                <span className='FM-advanced px-5 position-absolute z-1 text-light'>{adv}</span>
                <Card.Body className='text-center p-0'>
                    <Card.Title className={`${bg} py-3`}>{title}</Card.Title>
                    <Card.Text>
                            <sup className='fs-3'>$</sup> 
                            <span className='fw-bold fs-1'>{num}</span> 
                            <span className='text-black-50'> /month</span> 
                    </Card.Text>
                    {CardTextData.map((data,index) => {
                        return (
                            <Card.Text key={index} className={`FM-font-size ${data.class}`}>{data.p}</Card.Text>
                        )
                    })}
                    <div className='bg-body-tertiary'>
                        <BTNComponent btn={'w-auto my-3 px-4 border-0 m-auto FM-BTN'} txt={'Buy Now'}/>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
