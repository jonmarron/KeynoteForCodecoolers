import React, {useState, useEffect} from 'react'

const IframeFullScreenForm = ({slides, setSlides, index}) => {
  const [imageURL, setImageURL] = useState('')
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if(slides[index].imgURL){
      setCreated(true);
      setImageURL(slides[index].imgURL)
    } 
  }, [])

  const handleChange = e => {
    if(slides[index].imgURL){
      console.log('element already exists, edit function incoming')
      return
    }
    
    setCreated(true);

    const tempSlides = slides;

    slides[index] = {
      ...slides[index],
      imgURL: imageURL
    }
    
    setSlides(tempSlides)
    console.log('element created')

  }

  return (
    <div className="slideform" id={index}> 
      <h2>FullScreen Image</h2>
      <div className="slide-content">
        <input type="text" name="Title" id="" value={imageURL} onChange={e => {setImageURL(e.target.value)}} placeholder='Add your image URL here' />
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