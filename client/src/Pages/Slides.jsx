import React, { useEffect, useState } from 'react'
import TitleSlide from '../Components/TitleSlide'
import CopyImage from '../Components/CopyImage'
import Headlinecopy from '../Components/HeadlineCopy'
import TwoColumns from '../Components/TwoColumns'
import IframeFullscreen from '../Components/IframeFullscreen'
import '../Slides.css'

const Slides = () => {
  const [selectedSlide, setSelectedSlide] = useState(null)
  const [savedSlides, setSavedSlides] = useState([])

  const handleOnChange = (e) => {
    const selectedIndex = e.target.selectedIndex
    const selectedSlide = e.target[selectedIndex].text
    setSelectedSlide(selectedSlide)
  }

  const getSavedSlides = async () => {
    const response = await fetch('http://localhost:8989/api/keynotetemplates')
    const data = await response.json()
    console.log("test")
    console.log(data)
    setSavedSlides(data)
  }

  useEffect(() => {
    getSavedSlides()
    console.log(savedSlides)
  }, [])

  const renderSlide = () => {
    switch (selectedSlide) {
      case savedSlides:

      default:
        return null
    }
  }

  return (
    <div>
      <select className='slideSelector' onChange={handleOnChange}>
        <option disabled>Select a slide</option>
        {savedSlides.map((slide, index) => {
          return (
            <option key={index} value={slide._id}>
              {slide.name}
            </option>
          )
        }
        )}
      </select>
      {/* {renderSlide()} */}
    </div>
  )
}

export default Slides