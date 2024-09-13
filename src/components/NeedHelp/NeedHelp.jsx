import React from 'react'
import './NeedHelp.css'
import { Container } from 'react-bootstrap'
import BTNComponent from '../BTNComponent/BTNComponent'

export default function NeedHelp() {
    return (
        <section className='FM-need-help-sec py-5'>
            <Container className='text-center'>
                <h2 className='text-light mt-5'>In an emergency? Need help now?</h2>
                <p className='text-light px-lg-5 mb-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <BTNComponent btn={'btn-outline-light bg-transparent px-5 py-3 mb-5'} txt={'Make an Appointment'} />
            </Container>

        </section>
    )
}
