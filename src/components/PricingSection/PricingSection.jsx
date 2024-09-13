import React from 'react'
import { Container, Row } from 'react-bootstrap'
import TitleComponent from '../TitleComponent/TitleComponent'
import { PricingCardData } from '../../Data/PricingCardData'
import PricingCard from '../PricingCard/PricingCard'

export default function PricingSection() {
    return (
        <section className='py-5'>
            <Container>
                <TitleComponent
                            title={'Pricing'} 
                            desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
                            align={'text-center'}
                            after={'FM-title-center'}
                />
                <Row className='mt-5'>
                    {PricingCardData.map((e,i) => {
                        return (
                            <PricingCard
                                key={i}
                                bg={e.bg}
                                title={e.title}
                                num={e.num}
                                CardTextData={e.paragraph}
                                adv={e.advance || null}
                        />
                        )
                    })}
                </Row>
            </Container>

        </section>
    )
}
