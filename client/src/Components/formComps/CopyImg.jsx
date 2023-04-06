import React, {useState, useEffect} from 'react'

const CopyImg = ({slides, setSlides, index}) => {
  const [copyText, setCopyText] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if(slides[index].copy1 || slides[index].imgURL1){
      setCreated(true);
      setCopyText(slides[index].copy1)
      setImgURL(slides[index].imgURL1)
    } 
  }, [])

  const handleChange = e => {
    
    if(slides[index].copy1 || slides[index].imgURL1){
      console.log('element already exists, edit function incoming')
      return
    }
    setCreated(true);
    console.log('element created')

    const tempSlides = slides;

    slides[index] = {
      ...slides[index],
      copy1: copyText,
      imgURL1: imgURL

    }
    

    setSlides(tempSlides)
   
  }
  
  return (
    <div className="slideform" id={index}>
      <h2>Copy + Img</h2>
      <div className="slide-content two-columns-form">
        <textarea cols="30" rows="10" placeholder='Add your copy text here ...' value={copyText} onChange={e => {setCopyText(e.target.value)}}></textarea>
        <input type="text" name="imgURL" placeholder='Add your image URL here' value={imgURL} onChange={e => {setImgURL(e.target.value)}}/>
      </div>
      {created?(
        <>
          <button className='created'>Created</button>
          <p><em>(edit feature coming soon)</em></p>
        </>
      ):(
        <button onClick={handleChange}>Create</button>
      )}
    </div>  )
}

export default CopyImg