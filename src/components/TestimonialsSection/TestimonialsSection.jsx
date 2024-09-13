import React, { useEffect, useState } from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { Carousel, Container } from 'react-bootstrap'
import './TestimonialsSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { TestimonialsData } from '../../Data/TestimonialsData'

export default function TestimonialsSection() {

    const [width, setWidth] = useState(false)

    function handleWidth() {
        const screenWidth = window.innerWidth
        setWidth(screenWidth <= 992)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWidth)
        return () => {
        window.removeEventListener('resize', handleWidth)
        }
    }, [])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <section className='py-5'>
            <Container>
                <TitleComponent
                    title={'Testimonials'}
                    desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
                    align={'text-center'}
                    after={'FM-title-center'}
                />
                <Carousel activeIndex={index} onSelect={handleSelect} className='bg-white h-100 FM-testimonials-slider mt-5'>
                    {TestimonialsData.map((e,index) => {
                        return (
                            <Carousel.Item key={index} className='FM-testimonials-slide d-lg-inline-block'>
                                <Carousel.Caption className='text-dark position-relative start-0 bottom-0'>
                                    <p className='FM-slide-desc px-3 py-4 pb-5 bg-body-tertiary rounded shadow lh-base text-start fst-italic'>
                                        <FontAwesomeIcon className='FM-icon me-3' icon={faQuoteLeft} />
                                        {e.p}
                                        <FontAwesomeIcon className='FM-icon ms-3' icon={faQuoteRight} />
                                    </p>
                                    <div className='FM-img'>
                                        <img className='w-25 rounded-circle p-1 bg-white' src={e.img} alt="image" />
                                        <h5>{e.name}</h5>
                                        <span>{e.desc}</span>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                    
                    
                </Carousel>
            </Container>
        </section>
    )
}
