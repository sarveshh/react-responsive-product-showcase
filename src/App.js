import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Hero from "./components/Hero/Hero";
import { SliderData } from './components/Hero/SliderData'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero slides={SliderData} />
    </div>
  );
}

export default App;
