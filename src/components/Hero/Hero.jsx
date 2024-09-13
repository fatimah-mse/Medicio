import React from 'react'
import './Hero.css'
import { Carousel } from 'react-bootstrap'
import { HeroCarouselData } from '../../Data/HeroCarouselData'
import BTNComponent from '../BTNComponent/BTNComponent'

export default function Hero() {
    return (
        <section className='FM-hero'>
            <Carousel data-bs-theme="dark" className='position-relative'>
                {HeroCarouselData.map((e,index) => {
                    return (
                        <Carousel.Item key={index} className='position-relative'>
                            <img
                                className="d-block w-100"
                                src={e.img}
                                alt={e.text}
                            />
                            <Carousel.Caption className='FM-carousel-content border-top border-5 w-75 p-4 position-absolute start-50 top-50 translate-middle'>
                                <h2>{e.tilte}</h2>
                                <p className='my-3'>{e.desc}</p>
                                <BTNComponent btn={'w-auto px-5 border-0 m-auto FM-BTN'} txt={'Read More'}/>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
                
            </Carousel>
        </section>
    )
}
