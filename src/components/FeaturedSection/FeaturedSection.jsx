import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import { FeaturedCardData } from '../../Data/FeaturedCardData'

export default function FeaturedSection() {
    return (
        <section className='py-5'> 
        <Container className=''>
            <Row>
                {FeaturedCardData.map((e,index) => {
                    return (
                        <FeaturedCard
                                    key={index}
                                    lg={3}
                                    md={6}
                                    sm={12}
                                    card={'py-4 px-2'}
                                    icon={e.icon} 
                                    title={e.title} 
                                    text={e.text} 
                                    titleClass={'my-3'} 
                                    txtClass={'mb-3 FM-font-size'} 
                        />
                    )
                })}
            </Row>
        </Container>
        
        </section>
    )
}
