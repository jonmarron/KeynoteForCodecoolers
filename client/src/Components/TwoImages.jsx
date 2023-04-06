import React from 'react'
import '/src/Slides.css'

const TwoImages = ({ slide }) => {
    const headline = slide.headline
    const imgURL1 = slide.imgURL1
    const imgURL2 = slide.imgURL2

    return (
        <section className='slide'>
            <h2 className='h2-headline'>{headline}</h2>
            <div className='two-image'>
                <img src={imgURL1} alt='image' />
                <img src={imgURL2} alt='image' />
            </div>
        </section>
    )
}

export default TwoImages