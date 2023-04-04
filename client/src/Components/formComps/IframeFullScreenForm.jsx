import React, {useState} from 'react'

const IframeFullScreenForm = ({slides, setSlides, index}) => {
  const [iFrameURL, setIFrameURL] = useState('')

  const handleChange = e => {
    if(slides[index]){
      console.log('element already exists, edit function incoming')
      return
    }
    console.log('element created')
    setSlides([
        ... slides,
        {
          sectionType: 'iframe',
          iframeURL: iFrameURL
        }
      ]
    )
  }
  return (
    <div className="slideform" id={index}> 
      <h2>iframe</h2>
      <div className="slide-content">
        <input type="text" name="Title" id="" value={iFrameURL} onChange={e => {setIFrameURL(e.target.value)}} placeholder='Add your site URL here' />
      </div>
      <button onClick={handleChange}>Create</button>
    </div>
  )
}

export default IframeFullScreenForm