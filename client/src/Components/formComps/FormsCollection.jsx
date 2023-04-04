import React, {useState} from 'react'
import TitleSlideForm from './TitleSlideForm'
import CopyImg from './CopyImg'
import HeadlineCopy from './HeadlineCopy'
import TwoColumnsForm from './TwoColumnsForm'
import IframeFullScreenForm from './IframeFullScreenForm'

const FormsCollection = ({formType, presObject, setPresObject, isFirstSlide, slides, setSlides, index}) => {
  if(!isFirstSlide){
    if (formType === 'title-slide'){
      return (
        <TitleSlideForm
          index={index}
          slides={slides}
          setSlides={setSlides}
        />
      )
    }
    if (formType === 'copy+img'){
      return (
        <CopyImg
          index={index}
          slides={slides}
          setSlides={setSlides}
        />
      )
    }
    if (formType === 'HeadlineCopy'){
      return (
        <HeadlineCopy
          index={index}
          slides={slides}
          setSlides={setSlides}
        />
      )
    }
    if (formType === '2Columns'){
      return (
        <TwoColumnsForm
          index={index}
          slides={slides}
          setSlides={setSlides}
        />
      )
    }
    if (formType === 'iframe'){
      return (
        <IframeFullScreenForm
          index={index}
          slides={slides}
          setSlides={setSlides}
        />
      )
    }
  }
}

export default FormsCollection