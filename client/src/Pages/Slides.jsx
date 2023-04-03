import React, { useState } from 'react'
import TitleSlide from '../Components/TitleSlide'
import CopyImage from '../Components/CopyImage'
import Headlinecopy from '../Components/HeadlineCopy'
import TwoColumns from '../Components/TwoColumns'
import IframeFullscreen from '../Components/IframeFullscreen'
import '/src/Slides.css'

const Slides = () => {
  const [selectedSlide, setSelectedSlide] = useState(null)

  const handleOnChange = (e) => {
    const selectedIndex = e.target.selectedIndex
    const selectedSlide = e.target[selectedIndex].text
    setSelectedSlide(selectedSlide)
  }

  const renderSlide = () => {
    switch (selectedSlide) {
      case 'Title Slide':
        return <TitleSlide />
      case 'Copy Image':
        return <CopyImage />
      case 'Headline Copy':
        return <Headlinecopy />
      case 'Two Columns':
        return <TwoColumns />
      case 'Iframe Fullscreen':
        return <IframeFullscreen />
      default:
        return null
    }
  }

  return (
    <div>
      <select onChange={handleOnChange}>
        <option >Select a slide</option>
        <option >Title Slide</option>
        <option >Copy Image</option>
        <option >Headline Copy</option>
        <option >Two Columns</option>
        <option >Iframe Fullscreen</option>
      </select>
      {renderSlide()}
    </div>
  )
}

export default Slides