import React from 'react'
import { Container, Row } from 'react-bootstrap'
import TitleComponent from '../TitleComponent/TitleComponent'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import { ServicesCardData } from '../../Data/ServicesCardData'

export default function ServicesSection() {
    return (
        <section className='py-5' id='services'>
            <Container>
                <TitleComponent
                            title={'Services'} 
                            desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'} 
                            align={'text-center'}
                            after={'FM-title-center'}
                />
                <Row>
                    {ServicesCardData.map((e,index) => {
                        return (
                            <FeaturedCard
                                        key={index} 
                                        lg={4}
                                        md={6}
                                        sm={12}
                                        card={'bg-transparent shadow-none mt-3 text-center'}
                                        icon={e.icon} 
                                        title={<TitleComponent 
                                                title={e.title} 
                                                align={'text-center fs-4 mt-5'}
                                                after={'FM-title-center'}
                                                />
                                            } 
                                        text={e.text} 
                                        txtClass={'FM-font-size'}
                                        span={'FM-icon-circle d-flex justify-content-center align-items-center m-auto bg-white rounded-pill shadow'}
                            />
                        )
                    })}
                </Row>
            </Container>

        </section>
    )
}
