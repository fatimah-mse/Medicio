import React from 'react'
import './DoctorsSection.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { Container, Row } from 'react-bootstrap'
import { DoctorsCardData } from '../../Data/DoctorsCardData'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

export default function DoctorsSection() {
    return (
        <section className='FM-doctors-sec py-5' id='doctors'>
            <Container>
                <TitleComponent
                            title={'Doctors'} 
                            desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
                            align={'text-center'}
                            after={'FM-title-center'}
                />
                <Row className='mt-5'>
                    {DoctorsCardData.map((e,index) => {
                        return (
                            <FeaturedCard
                                        key={index}
                                        lg={3}
                                        md={6}
                                        sm={12}
                                        img={e.img}
                                        title={e.title} 
                                        text={e.txt} 
                                        titleClass={'my-1'} 
                                        txtClass={'mb-3 FM-font-size'} 
                            />
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}
