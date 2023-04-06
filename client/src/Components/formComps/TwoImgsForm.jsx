import React,{useState, useEffect} from 'react'

const TwoImgsForm = ({slides, setSlides, index}) => {
  const [headlineText, setHeadlineText] = useState('');
  const [imgURL1, setImgURL1] = useState('')
  const [imgURL2, setImgURL2] = useState('')
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if(slides[index].headline || slides[index].copy1 || slides[index].copy2 || slides[index].imgURL1 || slides[index].imgURL){
      setCreated(true);
      setHeadlineText(slides[index].headline)
      setImgURL1(slides[index].imgURL1)
      setImgURL2(slides[index].imgURL2)
    } 
  }, [])

  const handleChange = e => {
    if(slides[index].headline || slides[index].imgURL1 || slides[index].imgURL2){
      console.log('element already exists, edit function incoming')
      return
    }
    setCreated(true);
    console.log('element created')

    const tempSlides = slides;

    slides[index] = {
      ...slides[index],
      headline: headlineText,
      imgURL1: imgURL1,
      imgURL2: imgURL2

    }

    setSlides(tempSlides);
  }
  
  return (
    <div className="slideform" id={index}>
      <h2>Two Columns with image and text</h2>
      <input type="text" name="Title" onChange={e=>{setHeadlineText(e.target.value)}} value={headlineText} placeholder='Write your Headline here ...' />
      <div className="slide-content two-columns-form">
        <div className="column">
          <input type="text" placeholder='Add your image URL here' value={imgURL1} onChange={e => {setImgURL1(e.target.value)}}/>
        </div>
        <div className="column">
          <input type="text" placeholder='Add your image URL here' value={imgURL2} onChange={e => {setImgURL2(e.target.value)}}/>
        </div>
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

export default TwoImgsForm