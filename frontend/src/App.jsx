import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import {BrowserRouter , Routes ,  Route} from 'react-router-dom'
import Register from './components/Register'
import SpecialEvents from './components/SpecialEvents'
import Events from './components/Events'
import Nav from './components/Nav'
import AdminEvents from './AdminComponents/AdminEvents'

import AdminLogin from './AdminComponents/AdminLogin'
import AdminRegister from './AdminComponents/AdminRegister'
import AdminAddEvents from './AdminComponents/AdminAddEvent'
import MyEvents from './components/MyEvents'



function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='main-div'>
      <Nav />
        <BrowserRouter > 
        <Routes>
            <Route path="/" element={<Events />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/special" element={<SpecialEvents />} />
            <Route path="/myEvents" element={<MyEvents />} />

            {/* AdminRoutes */}
            <Route path="/admin" element={<AdminEvents />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/addEvent" element={<AdminAddEvents />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />


       </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
