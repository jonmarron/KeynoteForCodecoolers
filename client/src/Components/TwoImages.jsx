import React from 'react'
import '/src/Slides.css'

const TwoImages = ({ slide }) => {
    const headline = slide.headline
    const imgURL1 = slide.imgURL1
    const imgURL2 = slide.imgURL2

    return (
        <section className='slide'>
            <h2 className='h2-headline'>{headline}placeholder</h2>
            <div className='copy-plus-image'>
                <img src={imgURL1} alt='image' />
                <img src={imgURL2} alt='image' />
            </div>
        </section>
    )
}

export default TwoImages