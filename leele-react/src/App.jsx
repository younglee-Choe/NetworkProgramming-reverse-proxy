import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './Heder'
import Basic from './ar/Basic'
import Cube from './ar/Cube'
import VRScene from './ar/VRScene'

function App() {

  useEffect(() => {
    axios.get('/api/test')
      .then(res => console.log(res))
      .catch()
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Basic />} />
          <Route path="/cube" exact element={<Cube />} />
          <Route path="/location" exact element={<VRScene />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
