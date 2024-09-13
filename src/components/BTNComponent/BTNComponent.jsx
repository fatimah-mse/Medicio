import React from 'react'
import { Button } from 'react-bootstrap'
import './BTNComponent.css'

export default function BTNComponent({btn , txt}) {
    return (
        <Button className={`btn ${btn}`}>{txt}</Button>
    )
}
