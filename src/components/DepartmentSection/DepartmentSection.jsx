import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TitleComponent from '../TitleComponent/TitleComponent'
import { DepartmentFilterTitle } from '../../Data/DepartmentFilterTitle'
import './DepartmentSection.css'
import { DepartmentFilterContent } from '../../Data/DepartmentFilterContent'

export default function DepartmentSection() {

    const [activeBTN, setActiveBTN] = useState('cardiology')

    function ActiveBTNs(filter) {
        if (activeBTN === filter) {
            setActiveBTN('cardiology')
        } else {
            setActiveBTN(filter)
        }
    }

    return (
        <section className='py-5' id='departments'>
            <Container>
                <TitleComponent
                            title={'Departments'} 
                            desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
                            align={'text-center'}
                            after={'FM-title-center'}
                />
                <Row className='FM-department-filter mt-5'>
                    <Col sm={12} md={6} lg={3}>
                        {DepartmentFilterTitle.map((e,i) => {
                            return (
                                <h6 key={i} className={`my-3 ${activeBTN === e.filter ? 'FM-active' : 'text-dark'}`} onClick={() => ActiveBTNs(e.filter)}>{e.txt}</h6>
                            )
                        })}
                    </Col>
                    {DepartmentFilterContent.map((e,index) => {
                        if (activeBTN === e.filter) {
                            return (
                                <>
                                    <Col className='border-start ps-md-4 my-3 order-2 order-lg-1' key={index} sm={12} md={6} lg={6}>
                                        <h4 className='mb-3'>{e.txt}</h4>
                                        <p className='mb-3 fst-italic fw-light'>{e.descItalic}</p>
                                        <p>{e.descNormal}</p>
                                    </Col>
                                    <Col key={e.filter} sm={12} md={6} lg={3} className='my-3 order-1 order-lg-2'>
                                        <img className='img-fluid' src={e.img} alt="department-img" />
                                    </Col>
                                </>
                            )
                        }
                    })}
                </Row>
            </Container>

        </section>
    )
}
