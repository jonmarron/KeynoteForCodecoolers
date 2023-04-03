import React from 'react'
import '/src/Slides.css'

const CopyImage = ({ headline, copy1, imgURL1 }) => {
    return (
        <>
            <h2 className='h2-headline'>{headline}placeholder</h2>
            <div className='copy-plus-image'>
                <img src={imgURL1} alt='image' />
                <p>{copy1}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
                sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
        </>
    )
}

export default CopyImage