import React, {useState} from 'react'

const EditActionsForm = ({formTypes, slides, setSlides, presentationName, presentationID, selected, setSelected, isEdit, setIsEdit}) => {

  const putSlides = async (slides) => {
    console.log(presentationID);
    const result = await fetch(`http://0.0.0.0:8989/api/keynotetemplates/${presentationID}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(slides)
    })
    const data = await result.json();
  }

  const [newSlideType, setNewSlideType] = useState('')

  const handleSelectChange = (e) => {
    setNewSlideType(e.target.value);
  }

  const handleNewSlide = (e) =>  {
    e.preventDefault();
    setSlides([
      ...slides,
      {
        sectionType: newSlideType
      }
    ])
  }
  const handleSubmit = (e) => {
    putSlides(slides);
    setIsEdit(false);
    setSelected(false);
  }

  return (
    <div className="actions-form">
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
              <input type="text" value={presentationName} name="presentationname" id="" placeholder='Name your presentation' onChange={e => null}/>
              <button type='submit'>Save!</button>
            </form>
          </div>
        </>
    </div>
  )
}

export default EditActionsForm