import React from 'react'
import '/src/Slides.css'

const TitleSlide = ({ headline }) => {
    return (
        <h1 className='h1-headline'>{ headline }</h1>
    )
}

export default TitleSlide;