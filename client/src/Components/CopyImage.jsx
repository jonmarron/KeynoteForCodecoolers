import React from 'react'
import '/src/Slides.css'

const CopyImage = ({ headline, copy1, imgURL1 }) => {
    return (
        <>
            <h2 className='h2-headline'>{headline}</h2>
            <div className='copy-plus-image'>
                <p>{copy1}</p>
                <img src={imgURL1} alt='image' />
            </div>
        </>
    )
}

export default CopyImage
