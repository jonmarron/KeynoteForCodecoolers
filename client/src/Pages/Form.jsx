import React, {useState, useEffect} from 'react'
import '../Forms.css'
import ActionsForm from '../Components/formComps/ActionsForm'
import FormsCollection from '../Components/formComps/FormsCollection'

const Form = () => {

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [presObject, setPresObject] = useState([])
  const [neededForms, setNeededForms] = useState([])
  const [formTypes, setFormTypes] = useState([])
  const [presentationName, setPresentationName] = useState('')
  const [slides, setSlides] = useState([])
  
  const getFormTypes = async() => {
    const response = await fetch('http://localhost:8989/api/formtypes');
    const data = await response.json();
    setFormTypes(data);
  }

  useEffect(() => {
    getFormTypes();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { presentationName, slides }
      const res = await fetch('http://localhost:8989/api/keynotetemplates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const keynoteTemplate = await res.json();
      // console.log(resData);
    }
    catch (err) {
      console.error(err.message);
    }
  }
  
  return (
    <div className="formContainer">
      {
        neededForms.map((form, index) => {
          return (
            <FormsCollection
              key={index}
              index={index}
              formType={form.type}
              presObject={presObject} 
              setPresObject={setPresObject}
              isFirstSlide={isFirstSlide}
              slides={slides}
              setSlides={setSlides}
            />
          )
        })
      }
      <ActionsForm
        formTypes={formTypes}
        isFirstSlide={isFirstSlide}
        setIsFirstSlide={setIsFirstSlide}
        neededForms={neededForms}
        setNeededForms={setNeededForms}
        presentationName={presentationName}
        setPresentationName={setPresentationName}
        slides={slides}
        setSlides={setSlides}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Form