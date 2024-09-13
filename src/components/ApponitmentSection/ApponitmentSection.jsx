import React from 'react'
import './ApponitmentSection.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { FormApponitmenData } from '../../Data/FormApponitmenData'
import FormComponent from '../FormComponent/FormComponent'
import BTNComponent from '../BTNComponent/BTNComponent'

export default function ApponitmentSection() {
    return (
        <section className='FM-apponitmen-sec py-5'>
            <Container>
                <TitleComponent 
                            title={'MAKE AN APPOINTMENT'} 
                            desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
                            align={'text-center'}
                            after={'FM-title-center'}
                />
                
                <Form className='mt-5'>
                    <Row>
                        {FormApponitmenData.map((e,index) => {
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
                        <BTNComponent btn={'w-auto mt-3 px-4 border-0 m-auto FM-BTN'} txt={'Make an Appointment'}/>
                    </Row>
                </Form>
            </Container>
            
        </section>
    )
}
