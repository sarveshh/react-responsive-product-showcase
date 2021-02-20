import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Hero from "./components/Hero/Hero";
import { SliderData } from './components/Hero/SliderData'
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Hero slides={SliderData} toggle={toggle} />
      <Sidebar />
    </div>
  );
}

export default App;
