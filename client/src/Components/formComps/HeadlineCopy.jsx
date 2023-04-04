import React from 'react'

const HeadlineCopy = () => {
  return (
    <div className="slideform">
      <h2>Headline with text</h2>
      <div className="slide-content two-columns-form">
        <input type="text" name="Title" id="" placeholder='Write your Headline here ...' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Add your copy text here ...'></textarea>
      </div>
    </div>
  )
}

export default HeadlineCopy