import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './pages/Header.jsx';
import Home from './pages/Home.jsx'
import './index.css'
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './pages/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
   </StrictMode>,
)
