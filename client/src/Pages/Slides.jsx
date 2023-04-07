import React, { useEffect, useState, useRef } from 'react'
import TitleSlide from '../Components/TitleSlide'
import CopyImage from '../Components/CopyImage'
import HeadlineCopy from '../Components/HeadlineCopy'
import TwoColumns from '../Components/TwoColumns'
import IframeFullscreen from '../Components/IframeFullscreen'
import FormsCollection from '../Components/formComps/FormsCollection'
import EditActionsForm from '../Components/EditActionsForm'
import TwoImages from '../Components/TwoImages'
import {formTypes} from '../Constants/FormsTypes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

console.log(formTypes)
import '../Slides.css'
import ImgFullScreen from '../Components/ImgFullScreen'
const Slides = () => {

  const bottomRef = useRef(null);

  const [selectedPresentation, setSelectedPresentation] = useState([])
  const [presName, setPresName] = useState('')
  const [savedPresentation, setSavedPresentation] = useState([])
  const [presentationID, setPresentationID] = useState('')
  const [selected, setSelected] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const select = useRef(null);

  const handleOnChange = (e) => {
    setSelected(true)
    setIsEdit(false)
    const selectedPresentationIndex = select.current.value
    setSelectedPresentation(savedPresentation[selectedPresentationIndex].slides)
  }
  const handleOnClickEdit = (e) => {
    setSelected(true)
    setIsEdit(true);
    const selectedPresentationIndex = select.current.value
    setPresentationID(savedPresentation[selectedPresentationIndex]._id)
    setPresName(savedPresentation[selectedPresentationIndex].name)
    setSelectedPresentation(savedPresentation[selectedPresentationIndex].slides)
  }

  useEffect(() => {
    console.log(bottomRef)
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [selectedPresentation])

  const getSavedSlides = async () => {
    const response = await fetch('http://0.0.0.0:8989/api/keynotetemplates')
    const data = await response.json()
    console.log("test")
    console.log(data)
    setSavedPresentation(data)
  }

  useEffect(() => {
    getSavedSlides()
    console.log(savedPresentation)
  }, [])

  const handleOnClick = (e) => {
    e.preventDefault()
    setSelected(false)
  }

  if (!selected && !isEdit) {
    return (
      <div>
        <select className='slideSelector' ref={select}>
          <option>Select a Presentation</option>
          {savedPresentation.map((slide, index) => {
            return (
              <option key={index} value={index}>
                {slide.name}
              </option>
            )
          })}
        </select>
        <button onClick={handleOnChange}>Show</button>
        <button onClick={handleOnClickEdit}>Edit</button>
      </div>
    ) 
  }
  if (selected && isEdit) {
    return(
      <div className="formContainer">
        {
        selectedPresentation.map((slide, index) => {
          if (index === selectedPresentation.length -1) {
            return (
              <div ref={bottomRef} key={index}>
                <FormsCollection
                  key={index}
                  index={index}
                  isFirstSlide={false}
                  formType={slide.sectionType}
                  slides={selectedPresentation}
                  setSlides={setSelectedPresentation}
                />
              </div>
            )
          }
          return (
              <FormsCollection
                key={index}
                index={index}
                isFirstSlide={false}
                formType={slide.sectionType}
                slides={selectedPresentation}
                setSlides={setSelectedPresentation}
              />
          )
          })
        }
        <EditActionsForm
          formTypes={formTypes}
          slides={selectedPresentation}
          setSlides={setSelectedPresentation}
          presentationName={presName}
          presentationID={presentationID}
          selected={selected}
          setSelected={setSelected}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          getSavedSlides={getSavedSlides}
          setSavedPresentation={setSavedPresentation}
        />
        </div>

    )
    
  }
  if (selected && !isEdit) {
    return (
      <div className='slides-container'>
        <button id="close-presentation" onClick={handleOnClick}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {selectedPresentation.map((slide, index) => {
        console.log(slide.sectionType)
        if (slide.sectionType === 'title-slide') {
          console.log(slide)
          return (
            <TitleSlide key={index} slide={slide} id={index}/>
          )
        }
        if (slide.sectionType === 'copy+img') {
          return (
            <CopyImage key={index} slide={slide}  id={index}/>
          )
        }
        if (slide.sectionType === 'HeadlineCopy') {
          return (
            <HeadlineCopy key={index} slide={slide}  id={index}/>
          )
        }
        if (slide.sectionType === '2Columns') {
          return (
            <TwoColumns key={index} slide={slide}  id={index}/>
          )
        }
        if (slide.sectionType === 'iframe') {
          return (
            <IframeFullscreen key={index} slide={slide}  id={index}/>
          )
        }
        if (slide.sectionType === 'image') {
          return (
            <ImgFullScreen key={index} slide={slide}  id={index}/>
          )
        }
        if (slide.sectionType === 'two-images') {
          return (
            <TwoImages key={index} slide={slide}  id={index}/>
          )
        }
        })}
      </div>
    )
  }
}

export default Slides