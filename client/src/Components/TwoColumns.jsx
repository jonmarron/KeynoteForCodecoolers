import React from 'react'
import '/src/Slides.css'

const TwoColumns = ({ headline, copy1, copy2, imgURL1, imgURL2 }) => {
    return (
        <section className='slide'>
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