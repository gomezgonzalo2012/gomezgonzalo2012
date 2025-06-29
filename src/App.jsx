import './App.css'
import { Button } from "flowbite-react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {

 
  return (
    <>
    <Navbar/>
     <aside className="relative sm:fixed sm:top-0 sm:left-0 sm:z-40 w-full sm:w-64 md:w-80 lg:w-96 sm:h-screen bg-gray-950 dark:bg-gray-950 
     ">
        <div className="h-full  overflow-y-auto">
          <Hero/>
        </div>
      </aside>
      <div className="sm:ml-64 md:ml-80 lg:ml-96 sm:mt-0">
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>
    <ToastContainer/> 
    </>
  )
}

export default App
      