import React, { useEffect, useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import TitleComponent from '../TitleComponent/TitleComponent'
import './GallerySection.css'
import { GalleryData } from '../../Data/GalleryData'

export default function GallerySection() {

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
                    title={'Gallery'}
                    desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
                    align={'text-center'}
                    after={'FM-title-center'}
                />
                <Carousel activeIndex={index} onSelect={handleSelect} className='FM-gallery-slider mt-5 h-100'>
                    {GalleryData.map((e,index) => {
                        return (
                            <Carousel.Item key={index} className='FM-gallery-img d-lg-inline-block position-relative'>
                                <Carousel.Caption className='text-dark position-relative start-0 bottom-0'>
                                    <img
                                        className="img-fluid mb-5 p-3"
                                        src={e.img}
                                        alt={e.text}
                                    />
                                </Carousel.Caption>
                                
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Container>

        </section>
    )
}
