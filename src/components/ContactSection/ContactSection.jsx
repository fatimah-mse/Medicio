import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TitleComponent from '../TitleComponent/TitleComponent'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import { ContactInfo } from '../../Data/ContactInfo'
import FormComponent from '../FormComponent/FormComponent'
import BTNComponent from '../BTNComponent/BTNComponent'
import { FormContactData } from '../../Data/FormContactData'

export default function ContactSection() {
    return (
        <section className='py-5' id='contact'>
            <Container>
                <TitleComponent
                            title={'Contact'} 
                            desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
                            align={'text-center'}
                            after={'FM-title-center'}
                />
            </Container>
            <iframe className='FM-map mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12099.581396530912!2d-74.00687684458003!3d40.69830240000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a35d886bed3%3A0x2dbf2e9b07d8313a!2sJain%20Knowledge%20city!5e0!3m2!1sen!2sus!4v1726170926837!5m2!1sen!2sus" ></iframe>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <Row>
                            {ContactInfo.map((e,index) => {
                                return (
                                    <FeaturedCard
                                                key={index} 
                                                lg={e.lg}
                                                md={12}
                                                sm={12}
                                                card={'bg-white shadow my-3 text-center'}
                                                icon={e.icon}
                                                title={e.title} 
                                                text={e.text} 
                                                txtClass={'FM-font-size'}
                                                titleClass={'my-3'}
                                                span={'FM-icon-contact FM-icon-circle d-flex justify-content-center align-items-center m-auto bg-white rounded-pill shadow'}
                                    />
                                )
                            })}
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='mt-3'>
                        <Form className='px-3 py-3 bg-white shadow'>
                            <Row>
                                {FormContactData.map((e,index) => {
                                    return (
                                        <FormComponent
                                                    key={index}
                                                    lg={e.lg}
                                                    md={e.md}
                                                    sm={e.sm}
                                                    input={e.input}
                                        />
                                    )
                                })}
                                <BTNComponent btn={'w-auto mt-3 px-4 border-0 m-auto FM-BTN'} txt={'Send Message'}/>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
