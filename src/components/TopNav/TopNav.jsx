import React, { useEffect, useState } from 'react'
import './TopNav.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TopNavData } from '../../Data/TopNavData'

export default function TopNav() {
    
    const [width, setWidth] = useState(false)

    function handleWidth() {
        const screenWidth = window.innerWidth
        setWidth(screenWidth <= 768)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWidth)
        return () => {
        window.removeEventListener('resize', handleWidth)
        }
    }, [])

    return (
        <section className='FM-top-nav'>
            <Container className='d-flex justify-content-center justify-content-md-between aligm-items-center'>
                {TopNavData.map((e,index) => {
                    return (
                        <p key={index} className={`py-2 text-light mb-0 ${width? e.hide : ''}`}>
                            <FontAwesomeIcon icon={e.icon} className='me-2 fa-md'/>
                            {e.txt}
                        </p>
                    )
                })}
            </Container>
        </section>
    )
}
