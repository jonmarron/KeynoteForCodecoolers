import React, {useState} from 'react'

const TitleSlideForm = ({slides, setSlides, index}) => {
  const [headlineText, setHeadlineText] = useState('')

  const handleChange = e => {
    if(slides[index]){
      console.log('element exists')
      return
    }
    console.log('element created')
    setSlides([
        ... slides,
        {
          sectionType: 'title-slide',
          headline: headlineText
        }
      ]
    )
  }

  return (
    <div className="slideform" id={index}>
      <h2>Title Slide</h2>
      <div className="slide-content">
        <input type="text" name="Title" id="" onChange={e=>{setHeadlineText(e.target.value)}} value={headlineText} placeholder='Write your Headline here ...' />
      </div>
      <button onClick={handleChange}>Create</button>
    </div>
  )
}

export default TitleSlideForm