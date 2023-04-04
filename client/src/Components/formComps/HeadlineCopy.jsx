import React, {useState} from 'react'

const HeadlineCopy = ({slides, setSlides, index}) => {
  const [headlineText, setHeadlineText] = useState('')
  const [copyText, setCopyText] = useState('')

  const handleChange = e => {
    if(slides[index]){
      console.log('element exists')
      return
    }
    console.log('element created')
    setSlides([
        ... slides,
        {
          sectionType: 'HeadlineCopy',
          headline: headlineText,
          copy1: copyText
        }
      ]
    )
  }
  return (
    <div className="slideform" id={index}>
      <h2>Headline with text</h2>
      <div className="slide-content two-columns-form">
        <input type="text" name="Title" id="" placeholder='Write your Headline here ...' value={headlineText}  onChange={e => {setHeadlineText(e.target.value)}}/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Add your copy text here ...' value={copyText} onChange={e => {setCopyText(e.target.value)}}></textarea>
      </div>
      <button onClick={handleChange}>Create</button>
    </div>
  )
}

export default HeadlineCopy