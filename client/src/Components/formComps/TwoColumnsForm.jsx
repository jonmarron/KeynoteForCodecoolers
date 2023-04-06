import React,{useState, useEffect} from 'react'

const TwoColumnsForm = ({slides, setSlides, index}) => {
  const [copy1Text, setCopy1Text] = useState('')
  const [imgURL1, setImgURL1] = useState('')
  const [copy2Text, setCopy2Text] = useState('')
  const [imgURL2, setImgURL2] = useState('')
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if(slides[index].copy1 || slides[index].copy2 || slides[index].imgURL1 || slides[index].imgURL){
      setCreated(true);
      setCopy1Text(slides[index].copy1)
      setImgURL1(slides[index].imgURL1)
      setCopy2Text(slides[index].copy2)
      setImgURL2(slides[index].imgURL2)
    } 
  }, [])

  const handleChange = e => {
    if(slides[index].copy1 || slides[index].copy2 || slides[index].imgURL1 || slides[index].imgURL){
      console.log('element already exists, edit function incoming')
      return
    }
    setCreated(true);
    console.log('element created')
    setSlides([
        ... slides,
        {
          sectionType: '2Columns',
          copy1: copy1Text,
          imgURL1: imgURL1,
          copy2: copy2Text,
          imgURL2: imgURL2
        }
      ]
    )
  }
  return (
    <div className="slideform" id={index}>
      <h2>Two Columns with image and text</h2>
      <div className="slide-content two-columns-form">
        <div className="column">
          <input type="text" placeholder='Add your image URL here' value={imgURL1} onChange={e => {setImgURL1(e.target.value)}}/>
          <textarea name="" cols="30" rows="10" placeholder="Add your copy text here ..."  value={copy1Text} onChange={e => {setCopy1Text(e.target.value)}}></textarea>
        </div>
        <div className="column">
          <input type="text" placeholder='Add your image URL here' value={imgURL2} onChange={e => {setImgURL2(e.target.value)}}/>
          
          <textarea cols="30" rows="10" placeholder="Add your copy text here ..."   value={copy2Text} onChange={e => {setCopy2Text(e.target.value)}}></textarea>
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

export default TwoColumnsForm