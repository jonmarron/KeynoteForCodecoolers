import React,{useState} from 'react'

const TwoColumnsForm = ({slides, setSlides, index}) => {
  const [copy1Text, setCopy1Text] = useState('')
  const [imgURL1, setImgURL1] = useState('')
  const [copy2Text, setCopy2Text] = useState('')
  const [imgURL2, setImgURL2] = useState('')

  const handleChange = e => {
    if(slides[index]){
      console.log('element exists')
      return
    }
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
      <h2>Two Columns with Text</h2>
      <div className="slide-content two-columns-form">
        <div className="column">
          <input type="text" name="" id="" placeholder='Add your image URL here' value={imgURL1} onChange={e => {setImgURL1(e.target.value)}}/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Add your copy text here ..."  value={copy1Text} onChange={e => {setCopy1Text(e.target.value)}}></textarea>
        </div>
        <div className="column">
          <input type="text" name="" id="" placeholder='Add your image URL here' value={imgURL2} onChange={e => {setImgURL2(e.target.value)}}/>
          
          <textarea name="" id="" cols="30" rows="10" placeholder="Add your copy text here ..."   value={copy2Text} onChange={e => {setCopy2Text(e.target.value)}}></textarea>
        </div>
      </div>
      <button onClick={handleChange}>Create</button>

    </div>
  )
}

export default TwoColumnsForm