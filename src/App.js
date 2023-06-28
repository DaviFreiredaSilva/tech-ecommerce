import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import { commerceContext } from './context/CommerceContext'
import FloatMenu from './components/FloatMenu'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {

  const {showFloatMenu} = useContext(commerceContext)

  return (
    <div >
      <NavBar/>
      {showFloatMenu && <FloatMenu/>}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
  )
}

export default App