import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import {BrowserRouter , Routes ,  Route} from 'react-router-dom'
import Register from './components/Register'
import SpecialEvents from './components/SpecialEvents'
import Events from './components/Events'


function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      {/* <Nav /> */}
        <BrowserRouter > 
        <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/special" element={<SpecialEvents />} />
       </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
