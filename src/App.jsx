import './index.css'
import NavBar from './components/NavBar_2'
import Hero from './components/Hero'
import About from './components/About'
import MyProject from './components/MyProject'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'


function App() {

  useEffect(() => {
    if (localStorage.getItem("Dark") === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [])

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem("Dark", !isDarkMode);
  };



  return (
    <>
      {/* className='dark' */}
      <div className={`${isDarkMode ? 'dark' : ' '} `}   >
        <NavBar onChange={toggleTheme} />
        <Hero />
        <About />
        <MyProject />
        <Technologies />
        <Footer />
      </div>


      {

      }
    </>
  )
}

export default App
