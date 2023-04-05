import React from "react"
import "/src/Slides.css"

const HeadlineCopy = ({ slide }) => {
    const headline = slide.headline
    const copy1 = slide.copy1
    return (
        <section className="slide">
            <h2 className="h2-headline">{headline}</h2>
            <p className='headline-copy-p'>{copy1}</p>
        </section>

    )
}

export default HeadlineCopy