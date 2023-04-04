import React, {useState} from 'react'

const ActionsForm = ({formTypes, isFirstSlide, setIsFirstSlide, neededForms, setNeededForms, handleSubmit, presentationName, setPresentationName}) => {

  const [newSlideType, setNewSlideType] = useState('')

  const handleSelectChange = (e) => {
    setNewSlideType(e.target.value);
  }

  const handleNewSlide = (e) =>  {
    e.preventDefault();
    console.log(neededForms)
    setNeededForms([
      ...neededForms,
      {
        type:newSlideType
      }
    ])
    setIsFirstSlide(false);
  }

  
  return (
    <div className="actions-form">
      {isFirstSlide? (
        <div className="add-first-slide">
          <h3>Choose your first Slide</h3>
          <form className="input-w-button" onSubmit={handleNewSlide}>
            <select name="form-type" id="" onChange={handleSelectChange}>
              <option value="">Choose slide type...</option>
              {formTypes.map((type, index) => {
                return <option key={index} value={type}>{type}</option>
              })}
            </select>
            <button type='submit'>Start</button>
          </form>
        </div>
      ):(
        <>
          <div className="add-slide">
            <h3>Add another slide...</h3>
            <form className="input-w-button" onSubmit={handleNewSlide}>
            <select name="form-type" id="" onChange={handleSelectChange}>
              <option value="">Choose slide type...</option>
              {formTypes.map((type, index) => {
                return <option key={index} value={type}>{type}</option>
              })}
            </select>
              <button type='submit'>Add!</button>
            </form>
          </div>
          <div className="save-keynote">
            <h3>... or save the presentation</h3>
            <form className="input-w-button" onSubmit={handleSubmit}>
              <input type="text" value={presentationName} name="presentationname" id="" placeholder='Name your presentation' onChange={e => setPresentationName(e.target.value)}/>
              <button type='submit'>Save!</button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default ActionsForm