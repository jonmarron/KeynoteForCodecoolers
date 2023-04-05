import React, { useEffect, useState } from 'react'
import TitleSlide from '../Components/TitleSlide'
import CopyImage from '../Components/CopyImage'
import HeadlineCopy from '../Components/HeadlineCopy'
import TwoColumns from '../Components/TwoColumns'
import IframeFullscreen from '../Components/IframeFullscreen'
import '../Slides.css'

const Slides = () => {
  const [selectedPresentation, setSelectedPresentation] = useState({slides:[]})
  const [savedPresentation, setSavedPresentation] = useState([])
  const [selected, setSelected] = useState(false)

  const handleOnChange = (e) => {
    setSelected(true)
    const selectedPresentationIndex = e.target.value
    setSelectedPresentation(savedPresentation[selectedPresentationIndex])
    console.log(selectedPresentation)
  }

  const getSavedSlides = async () => {
    const response = await fetch('http://localhost:8989/api/keynotetemplates')
    const data = await response.json()
    console.log("test")
    console.log(data)
    setSavedPresentation(data)
  }

  useEffect(() => {
    getSavedSlides()
    console.log(savedPresentation)
  }, [])

  if (!selected) {
    return (
      <div>
        <select className='slideSelector' onChange={handleOnChange}>
          <option>Select a slide</option>
          {savedPresentation.map((slide, index) => {
            return (
              <option key={index} value={index}>
                {slide.name}
              </option>
            )
          })}
        </select>
      </div>
    ) 
  }
  return (
    <div>
      {selectedPresentation.slides.map((slide, index) => {
      console.log(slide.sectionType)
      if (slide.sectionType === 'title-slide') {
        return (
          <TitleSlide key={index} slide={slide} />
        )
      }
      if (slide.sectionType === 'copy+img') {
        return (
          <CopyImage key={index} slide={slide} />
        )
      }
      if (slide.sectionType === 'HeadlineCopy') {
        return (
          <HeadlineCopy key={index} slide={slide} />
        )
      }
      if (slide.sectionType === '2Columns') {
        return (
          <TwoColumns key={index} slide={slide} />
        )
      }
      if (slide.sectionType === 'iframe') {
        return (
          <IframeFullscreen key={index} slide={slide} />
        )
      }
    })}
    </div>
  )
}

export default Slides