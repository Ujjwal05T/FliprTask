// import { useState } from 'react'
import './App.css'
import BlogPost from './components/BlogPost'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Policy from './components/Policy';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <BlogPost username="Andrew Jonson"/> */}
      {/* <MainContent/> */}
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/blog" element={<BlogPost username='Andrew' />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
        </Router>
    </>
  )
}

export default App
