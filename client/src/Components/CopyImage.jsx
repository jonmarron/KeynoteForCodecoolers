import React from 'react'
import '/src/Slides.css'

const CopyImage = ({ slide }) => {
    const headline = slide.headline
    const copy1 = slide.copy1
    const imgURL1 = slide.imgURL1

    return (
        <section className='slide'>
            <h2 className='h2-headline'>{headline}placeholder</h2>
            <div className='copy-plus-image'>
                <img src={imgURL1} alt='image' />
                <p>{copy1}</p>
            </div>
        </section>
    )
}

export default CopyImage