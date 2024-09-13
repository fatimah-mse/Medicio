import React from 'react'
import './FQSection.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { Accordion, Container } from 'react-bootstrap'
import { AccordionData } from '../../Data/AccordionData'

export default function FQSection() {
    return (
        <section className='FM-FQ py-5'>
            <Container>
                <TitleComponent
                    title={'Frequently Asked Questions'}
                    desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
                    align={'text-center'}
                    after={'FM-title-center'}
                />
                {AccordionData.map((e,index) => {
                    return (
                        <Accordion className='my-3 w-100 w-lg-75 mx-auto rounded border-2'>
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>{e.title}</Accordion.Header>
                                <Accordion.Body>{e.des}</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })}
            </Container>
            
        </section>
    )
}
