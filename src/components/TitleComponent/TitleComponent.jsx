import React from 'react'
import './TitleComponent.css'

export default function TitleComponent({title , align , desc, after}) {
    return (
        <>
            <h2 className={`FM-title ${align} ${after} mb-5 position-relative`}>{title}</h2>
            <p className={`${align}`}>{desc}</p>
        </>
    )
}
