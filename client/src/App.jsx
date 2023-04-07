import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './App.css'
import Slides from './Pages/Slides'
import Form from './Pages/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'


function App() {

  return (
    <>
          <p id="copyright">Made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://github.com/jonmarron/KeynoteForCodecoolers" target="_blank">Codecoolers</a>, for Codecoolers</p>

      <div className="navBar">
        <div className="logo">
          <h2>Keynote Template</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Create</Link></li>
            <li><Link to="/load">Load</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/load' element={<Slides/>}/>
      </Routes>
    </>
  )
}

export default App
