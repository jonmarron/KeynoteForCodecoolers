import React, {useState, useEffect} from 'react'
import '../Forms.css'
import ActionsForm from '../Components/formComps/ActionsForm'
import FormsCollection from '../Components/formComps/FormsCollection'

const Form = () => {

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [presObject, setPresObject] = useState([])
  const [neededForms, setNeededForms] = useState([])
  const [formTypes, setFormTypes] = useState([])
  
  const getFormTypes = async() => {
    const response = await fetch('http://localhost:8989/api/formtypes');
    const data = await response.json();
    setFormTypes(data);
  }

  useEffect(() => {
    getFormTypes();
  }, [])
  

  return (
    <div className="formContainer">
      {
        neededForms.map((form, index) => {
          return (
            <FormsCollection
              key={index}
              formType={form.type}
              presObject={presObject} 
              setPresObject={setPresObject}
              isFirstSlide={isFirstSlide}
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
      />
    </div>
  )
}

export default Form