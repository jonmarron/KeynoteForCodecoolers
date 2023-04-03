import React from "react"
import "/src/Slides.css"

const HeadlineCopy = ({ headline, copy1 }) => {
    return (
        <>
            <h2 className="h2-headline">{headline}</h2>
            <p>{copy1}</p>
        </>
    );
};

export default HeadlineCopy