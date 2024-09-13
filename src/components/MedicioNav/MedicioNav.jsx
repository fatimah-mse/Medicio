import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Offcanvas, Toast } from 'react-bootstrap'
import logoDark from '../../img/logo-dark.png'
import logoLight from '../../img/logo-light.png'
import './MedicioNav.css'
import { NavLinkData } from '../../Data/NavLinkData'
import BTNComponent from '../BTNComponent/BTNComponent'

export default function MedicioNav() {

    const [header, setHeader] = useState(false)
    const [show, setShow] = useState(false)

    const toggleShow = () => setShow(!show)

    function handleScroll () 
    {
        if (window.scrollY > 50) {
        setHeader(true)
        }
        else {
        setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [header])

    return (
        <Navbar expand='lg' className={`FM-normal-nav shadow ${header? 'FM-nav-scroll top-0' : 'bg-white'} px-3`} fixed={'top'}>
            <Container>
                <Navbar.Brand href="#" className='FM-navbar-logo text-light text-decoration-none m-0'><img className='FM-nav-logo img-fluid' src={header? logoLight : logoDark} /></Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls='offcanvasNavbar-expand-lg' data-bs-theme={`${header ? 'dark' : 'white'}`} />
                <Navbar.Offcanvas className={`${header? 'FM-sidebar-scroll' : 'bg-white'}`}
                    id='offcanvasNavbar-expand-lg'
                    aria-labelledby='offcanvasNavbarLabel-expand-lg'
                    placement="end">
                    <Offcanvas.Header closeButton data-bs-theme={`${header ? 'dark' : 'white'}`} className='border-0 border-bottom fa-xl'>
                        <img className='FM-nav-logo img-fluid' src={header? logoLight : logoDark} />
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className="justify-content-end align-items-lg-center flex-grow-1">
                        {NavLinkData.map((e,index) => {
                            return (
                                <Nav.Link 
                                        onClick={e.type === 'dropdown' && toggleShow}
                                        key={index} 
                                        className={`w-auto ms-lg-2 ${header ? 'text-light' : 'text-dark'}`} 
                                        href={e.href}>{e.link}
                                </Nav.Link>
                            )
                        })}
                    </Nav>
                    <Toast show={show} onClose={toggleShow} className='mt-4 position-absolute start-50 top-50 top-lg-100 translate-middle'>
                        <Toast.Header>
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                    <BTNComponent btn={header? 'ms-lg-2 btn-outline-light bg-transparent' : 'ms-lg-2 FM-BTN border-0'} txt={'Make an Appointment'}/>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
