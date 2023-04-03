import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './App.css'
import {Slides} from './Pages/Slides'
import {Form} from './Pages/Form'


function App() {

  return (
    <>
      <div className="navBar">
        <div className="logo">
          <h2>KeynoteTemplate</h2>
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
