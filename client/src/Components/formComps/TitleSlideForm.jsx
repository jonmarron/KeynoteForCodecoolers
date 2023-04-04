import React, {useState} from 'react'

const TitleSlideForm = ({slides, setSlides}) => {
  const handleChange = e => {
    setSlides(
      ... slides,
      {
        sectionType: 'title-slide',
        headline: e.target.value
      }

    )
  }
  
  return (
    <div className="slideform">
      <h2>Title Slide</h2>
      <div className="slide-content">
        <input type="text" name="Title" id="" onChange={handleChange} placeholder='Write your Headline here ...' />
      </div>
    </div>
  )
}

export default TitleSlideForm