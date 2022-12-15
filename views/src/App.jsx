import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './Heder'
import { Home } from './Home'
import { Basic } from './ar/Basic'
import { Cube } from './ar/Cube'
import { ARScene } from './ar/ARScene'
import { VRScene } from './ar/VRScene'
import { MarkerTracking } from './ar/Marker-tracking'

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
          <Route path="/" exact element={<Home />} />
          <Route path="/basic" exact element={<Basic />} />
          <Route path="/cube" exact element={<Cube />} />
          {/* <Route path="/vr" exact element={<VRScene />} /> */}
          {/* <Route path="/ar" exact element={<ARScene />} /> */}
          <Route path="/marker" exact element={<MarkerTracking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
