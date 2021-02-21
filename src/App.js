import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.module.css'
import Hero from "./components/Hero/Hero";
import { SliderData } from './components/Hero/SliderData'
import Sidebar from "./components/Sidebar/Sidebar";
import InfoSection from './components/InfoSection/InfoSection';
import { InfoData } from './components/InfoSection/InfoData';

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </div>
  );
}

export default App;
