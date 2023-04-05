import React from "react"
import "/src/Slides.css"

const IframeFullscreen = ({ slide }) => {
    const iframeURL = slide.iframeURL
    return (
         <section className="slide">
            <iframe src={iframeURL}></iframe>
         </section>
    )
}

export default IframeFullscreen
