import React from "react"
import "/src/Slides.css"

const IframeFullscreen = ({ iframeURL }) => {
    return (
        <>
         <iframe src={iframeURL}></iframe>
        </>
    )
}

export default IframeFullscreen
