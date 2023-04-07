import React from "react"
import "/src/Slides.css"

const IframeFullscreen = ({ slide, id }) => {
    const iframeURL = slide.iframeURL
    return (
         <section className="slide"id={id}>
            <iframe src={iframeURL}></iframe>
         </section>
    )
}

export default IframeFullscreen
