import React, {useState} from 'react'
import TitleSlideForm from './TitleSlideForm'
import CopyImg from './CopyImg'
import HeadlineCopy from './HeadlineCopy'
import TwoColumnsForm from './TwoColumnsForm'
import IframeFullScreenForm from './IframeFullScreenForm'

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
    if (formType === 'HeadlineCopy'){
      return (
        <HeadlineCopy/>
      )
    }
    if (formType === '2Columns'){
      return (
        <TwoColumnsForm/>
      )
    }
    if (formType === 'iframe'){
      return (
        <IframeFullScreenForm/>
      )
    }
  }
}

export default FormsCollection