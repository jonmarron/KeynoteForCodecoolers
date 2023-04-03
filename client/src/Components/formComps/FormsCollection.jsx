import React, {useState} from 'react'
import TitleSlideForm from './TitleSlideForm'

const FormsCollection = ({formType, presObject, setPresObject, isFirstSlide}) => {
  if(!isFirstSlide){
    if (formType === 'title'){
      return (
        <TitleSlideForm/>
      )
    }
  }
}

export default FormsCollection