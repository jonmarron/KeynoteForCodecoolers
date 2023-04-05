import React from 'react'
import '/src/Slides.css'

const TitleSlide = ({ headline }) => {
    return (
        <section className='slide'>
            <h1 className='h1-headline'>{ headline }</h1>
        </section>
    )
}

export default TitleSlide;