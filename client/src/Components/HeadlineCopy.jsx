import React from "react"
import "/src/Slides.css"

const HeadlineCopy = ({ slide, id }) => {
    const headline = slide.headline
    const copy1 = slide.copy1
    const bullets = copy1.split(',');
    return (
        <section className="slide" id={id}>
            <h2 className="h2-headline">{headline}</h2>
            <ul className="slideList">
                {bullets.map(bullet => {
                    return (<li>{bullet}</li>);
                })}

            </ul>
        </section>

    )
}

export default HeadlineCopy