import React from 'react'
import '/src/Slides.css'

const TwoColumns = ({ headline, copy1, copy2, imgURL1, imgURL2 }) => {
    return (
        <>
            <h2 className='h2-headline'>{headline}placeholder</h2>
            <div className='two-columns'>
                <div className='columns column-one'>
                    <img src={imgURL1} alt='image' />
                    <p>{copy1}
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod
                    </p>
                </div>
                <div className='columns column-two'>
                    <img src={imgURL2} alt='image' />
                    <p>{copy2}
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod</p>
                </div>
            </div>
        </>
    )
}

export default TwoColumns