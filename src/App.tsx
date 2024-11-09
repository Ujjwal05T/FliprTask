import './App.css'
import BlogPost from './components/BlogPost'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Policy from './components/Policy';


function App() {

  return (
    <>    
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/blog" element={<BlogPost username='Andrew Jonson' />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
        </Router>
    </>
  )
}

export default App
