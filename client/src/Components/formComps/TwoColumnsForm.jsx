import React from 'react'

const TwoColumnsForm = () => {
  return (
    <div className="slideform">
      <h2>Two Columns with Text</h2>
      <div className="slide-content two-columns-form">
        <div className="column">
          <input type="text" name="" id="" placeholder='Add your image URL here'/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Add your copy text here ..."></textarea>
        </div>
        <div className="column">
          <input type="text" name="" id="" placeholder='Add your image URL here'/>
          
          <textarea name="" id="" cols="30" rows="10" placeholder="Add your copy text here ..."></textarea>
        </div>
      </div>
    </div>
  )
}

export default TwoColumnsForm