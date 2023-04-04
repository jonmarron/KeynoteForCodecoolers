import React from 'react'

const CopyImg = () => {
  return (
    <div className="slideform">
      <h2>Copy + Img</h2>
      <div className="slide-content two-columns-form">
        <textarea name="" id="" cols="30" rows="10" placeholder='Add your copy text here ...'></textarea>
        <input type="text" name="imgURL" id="" placeholder='Add your image URL here' />
      </div>
      <button>Create!</button>
    </div>  )
}

export default CopyImg