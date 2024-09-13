import React from 'react'
import './MedicioFooter.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FooterData, icons } from '../../Data/FooterData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MedicioFooter() {
    return (
        <footer className='FM-footer py-5'>
            <Container>
                <Row className='pb-4 border-bottom'>
                    <Col sm={12} md={6} lg={3} className='mb-5'>
                        <h4 className='mb-5'>Medicio</h4>
                        <p>A108 Adam Street New York, NY 535022</p>
                        <p><strong>Phone: </strong>+963 981 944 215</p>
                        <p className='mb-5'><strong>Email: </strong>fatimahmse83@gmail.com</p>
                        {icons.map((e,index) => {
                            return (
                                <a href='#' key={index} className='px-3 py-2 rounded-pill border text-dark me-2'><FontAwesomeIcon icon={e.icon}/></a>
                            )
                        })}
                        
                    </Col>
                    <Col sm={12} md={6} lg={9}>
                        <Row>
                            {FooterData.map((e,index) => {
                                return (
                                    <Col key={index} lg={3} md={6} sm={12} >
                                        <h5>{e.title}</h5>
                                        {e.links.map((link,i) => {
                                            return (
                                                <a key={i} href={link.href || '#'} className='d-block my-2 text-decoration-none text-black-50'>{link.a}</a>
                                            )
                                        })}
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
                <h4 className='FM-font-size mt-5 text-center'>&copy; Copyright Medicio All Rights Reserved</h4>
                <h5 className='FM-font-size mt-3 text-center'>Designed by Fatimah Mselmani</h5>
            </Container>

        </footer>
    )
}
