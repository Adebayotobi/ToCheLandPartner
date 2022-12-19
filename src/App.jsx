import { useState } from 'react'
import './App.css'
import Topbar  from "./Components/Topbar/Topbar"
import Content from "./Components/Contents/Contents"
import Services from "./Components/Services/Services"
import Footer from "./Components/Footer/Footer"



function App() {

  return (
    <div className="app">
      <Topbar />
      <Content />
      <Services />
      <Footer />
    </div>
  )
}

export default App

