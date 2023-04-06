import React, {useState, useEffect} from 'react'

const HeadlineCopy = ({slides, setSlides, index}) => {
  const [headlineText, setHeadlineText] = useState('')
  const [copyText, setCopyText] = useState('')
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if(slides[index].headline || slides[index].copy1){
      setCreated(true);
      setCopyText(slides[index].copy1)
      setHeadlineText(slides[index].headline)
    } 
  }, [])

  const handleChange = e => {
    
    if(slides[index].headline || slides[index].copy1){
      console.log('element already exists, edit function incoming')
      return
    }
    setCreated(true);

    console.log('element created')
    
    const tempSlides = slides;

    slides[index] = {
      ...slides[index],
      headline: headlineText,
      copy1: copyText
    }
    
    setSlides(tempSlides)
   
  }

  return (
    <div className="slideform" id={index}>
      <h2>Headline with text</h2>
      <div className="slide-content two-columns-form">
        <input type="text" name="Title" placeholder='Write your Headline here ...' value={headlineText}  onChange={e => {setHeadlineText(e.target.value)}}/>
        <textarea name="" cols="30" rows="10" placeholder='Add your copy text here ...' value={copyText} onChange={e => {setCopyText(e.target.value)}}></textarea>
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

export default HeadlineCopy