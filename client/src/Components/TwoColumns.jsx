import React from 'react'
import '/src/Slides.css'

const TwoColumns = ({ slide, id }) => {
    const headline = slide.headline
    const copy1 = slide.copy1
    const copy2 = slide.copy2
    const imgURL1 = slide.imgURL1
    const imgURL2 = slide.imgURL2
    return (
        <section className='slide' id={id}>
            <h2 className='h2-headline'>{headline}</h2>
            <div className='two-columns'>
                <div className='columns column-one'>
                    <img src={imgURL1} alt='image' />
                    <p>{copy1}</p>
                </div>
                <div className='columns column-two'>
                    <img src={imgURL2} alt='image' />
                    <p>{copy2}</p>
                </div>
            </div>
        </section>
    )
}

export default TwoColumns