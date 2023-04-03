import React, {useState} from 'react'
import TitleSlideForm from './TitleSlideForm'
import CopyImg from './CopyImg'

const FormsCollection = ({formType, presObject, setPresObject, isFirstSlide}) => {
  if(!isFirstSlide){
    if (formType === 'title-slide'){
      return (
        <TitleSlideForm/>
      )
    }
    if (formType === 'copy+img'){
      return (
        <CopyImg/>
      )
    }
  }
}

export default FormsCollection