import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
function App() {

  return (
    <div className='bg-[#f7f7f7]'>
      <Navbar  classname="fixed"/>
      <Hero />
    </div>
  )
}

export default App
