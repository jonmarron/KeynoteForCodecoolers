import React from 'react'

const TitleSlideForm = () => {
  return (
    <div className="slideform">
      <h2>Title Slide</h2>
      <div className="slide-content">
        <input type="text" name="Title" id="" placeholder='Write your Headline here ...' />
      </div>
      <button>Create!</button>
    </div>
  )
}

export default TitleSlideForm