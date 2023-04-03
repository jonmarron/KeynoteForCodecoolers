import React from "react"
import "/src/Slides.css"

const HeadlineCopy = ({ headline, copy1 }) => {
    return (
        <>
            <h2 className="h2-headline">{headline}placeholder</h2>
            <p className='headline-copy-p'>{copy1}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
            sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </>
    )
}

export default HeadlineCopy