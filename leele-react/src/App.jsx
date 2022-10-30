import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Basic from './ar/Basic'
import Cube from './ar/Cube'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/basic" exact element={<Basic />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
