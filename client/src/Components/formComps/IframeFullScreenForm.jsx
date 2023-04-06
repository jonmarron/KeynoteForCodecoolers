import React, {useState, useEffect} from 'react'

const IframeFullScreenForm = ({slides, setSlides, index}) => {
  const [iFrameURL, setIFrameURL] = useState('')
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if(slides[index].iframeURL){
      setCreated(true);
      setIFrameURL(slides[index].iframeURL)
    } 
  }, [])

  const handleChange = e => {
    if(slides[index].iframeURL){
      console.log('element already exists, edit function incoming')
      return
    }
    
    setCreated(true);

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
      {created?(
        <>
          <button className='created'>Created</button>
          <p><em>(edit feature coming soon)</em></p>
        </>
      ):(
        <button onClick={handleChange}>Create</button>
      )}
    </div>
  )
}

export default IframeFullScreenForm