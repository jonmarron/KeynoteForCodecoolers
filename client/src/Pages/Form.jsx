import React, {useState, useEffect, useRef} from 'react'
import '../Forms.css'
import ActionsForm from '../Components/formComps/ActionsForm'
import FormsCollection from '../Components/formComps/FormsCollection'

const Form = () => {
  const bottomRef = useRef(null);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [presObject, setPresObject] = useState([])
  const [neededForms, setNeededForms] = useState([])
  const [formTypes, setFormTypes] = useState([])
  const [presentationName, setPresentationName] = useState('')
  const [slides, setSlides] = useState([])
  
  const getFormTypes = async() => {
    const response = await fetch('http://0.0.0.0:8989/api/formtypes');
    const data = await response.json();
    setFormTypes(data);
  }

  useEffect(() => {
    getFormTypes();
  }, [])

  useEffect(() => {
    console.log(bottomRef)
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [slides])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(slides);
    try {
      const data = { presentationName, slides }
      const res = await fetch('http://0.0.0.0:8989/api/keynotetemplates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const keynoteTemplate = await res.json();
    }
    catch (err) {
      console.error(err.message);
    }
    setSlides([]);
    setIsFirstSlide(true);
  }
  
  return (
    <div className="formContainer">
      {
        slides.map((form, index) => {
          if (index === slides.length -1) {
            return (
              <div ref={bottomRef} key={index}>
                <FormsCollection
                  key={index}
                  index={index}
                  formType={form.sectionType}
                  presObject={presObject} 
                  setPresObject={setPresObject}
                  isFirstSlide={isFirstSlide}
                  slides={slides}
                  setSlides={setSlides}
                />
              </div>
            )
          }
          return (
              <FormsCollection
                key={index}
                index={index}
                formType={form.sectionType}
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