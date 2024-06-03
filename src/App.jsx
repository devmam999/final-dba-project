import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Information from "./components/pages/Information";
import ClimateChange from "./components/pages/ClimateChange";
import Action from "./components/pages/Action";
import Resources from "./components/pages/Resources";
import Navbar from './components/Nav';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Information />} />
      <Route path="/change" element={<ClimateChange />} />
      <Route path="/action" element={<Action />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
