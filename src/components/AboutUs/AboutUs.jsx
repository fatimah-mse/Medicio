import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TitleComponent from '../TitleComponent/TitleComponent'
import './AboutUs.css'
import AboutIMG from '../../img/about.jpg'
import FeaturesIMG from '../../img/features.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faPlay } from '@fortawesome/free-solid-svg-icons'
import { ListData } from '../../Data/ListData'
import { AboutCardData } from '../../Data/AboutCardData'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import { AboutFeaturesData } from '../../Data/AboutFeaturesData'

export default function AboutUs() {
    return (
        <section className='py-5' id='about'>
            <Container>
                <TitleComponent 
                            title={'About Us'} 
                            desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'} 
                            align={'text-center'}
                            after={'FM-title-center'}
                />
                <Row className='mt-5'>
                    <Col className='my-2 position-relative' sm={12} md={12} lg={6}>
                        <div>
                            <img className='img-fluid' src={AboutIMG} alt="about-img" />
                            <a href='#' className='FM-bg-icon d-flex justify-content-center align-items-center p-4 rounded-pill position-absolute top-50 start-50 translate-middle z-1'>
                                <FontAwesomeIcon className='fa-xl text-light' icon={faPlay}/>
                            </a>
                        </div>
                    </Col>
                    <Col className='mt-2' sm={12} md={12} lg={6}>
                        <div>
                            <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
                            <p className='fst-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul className='list-unstyled my-4'>
                                {ListData.map((e,index) => {
                                    return (
                                        <li key={index} className='d-flex my-3'>
                                            <FontAwesomeIcon className='FM-icon fa-md mt-1 me-2' icon={faCheckDouble} />
                                            <span>{e.li}</span>
                                        </li>
                                    )
                                })}
                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            </ul>
                        </div>
                    </Col>
                    {AboutCardData.map((e,index) => {
                        return (
                            <FeaturedCard 
                                        key={index} 
                                        card={'FM-about-cards my-lg-5 mb-3 py-4 px-2'}
                                        lg={3}
                                        md={6}
                                        sm={12}
                                        icon={e.icon} 
                                        title={e.title} 
                                        text={e.txt} 
                                        display={'d-flex align-items-center'}
                                        titleClass={'fs-1'} 
                                        span={'me-4'}
                            />
                        )
                    })}
                    <Col className='my-2' sm={12} md={12} lg={6}>
                        <img className='img-fluid object-fit-cover h-100' src={FeaturesIMG} alt="features-img" />
                    </Col>
                    <Col className='my-2' sm={12} md={12} lg={6}>
                        <TitleComponent 
                                    title={'Enim quis est voluptatibus aliquid consequatur fugiat'} 
                                    desc={'Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi'} 
                                    after={'FM-title-left'}
                        />
                        {AboutFeaturesData.map((e,index) => {
                            return (
                                <FeaturedCard 
                                            key={index} 
                                            card={'bg-transparent shadow-none mt-5'}
                                            icon={e.icon} 
                                            title={e.title} 
                                            text={e.text}  
                                            txtClass={'FM-font-size'}
                                            display={'d-flex align-items-start p-0'}
                                            span={'px-3 py-2 bg-white rounded shadow me-4'}
                                />
                            )
                        })}
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}
