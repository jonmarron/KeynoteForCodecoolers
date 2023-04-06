import React from "react"
import "/src/Slides.css"

const ImgFullScreen = ({ slide }) => {
    const iframeURL = slide.imgURL
    return (
         <section className="slide">
            <img class="fullscreen-img"src={iframeURL}/>
         </section>
    )
}

export default ImgFullScreen
