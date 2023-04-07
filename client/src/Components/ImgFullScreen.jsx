import React from "react"
import "/src/Slides.css"

const ImgFullScreen = ({ slide, id }) => {
    const iframeURL = slide.imgURL
    return (
         <section className="slide" id={id}>
            <img class="fullscreen-img"src={iframeURL}/>
         </section>
    )
}

export default ImgFullScreen
