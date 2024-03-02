//----------------IMPORTS----------------------- 
import './index.css'

import Hero from './components/Hero'
import MyProject from './components/MyProject'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import { useState, useEffect, lazy, Suspense } from 'react'
import { useInView, animated, useSpring } from '@react-spring/web'
import PropType from "prop-types";
import NavBar2 from './components/NavBar'
//----------------IMPORTS----------------------- 



//----------------CONSTANTS----------------------- 

const About = lazy(() => import('./components/About'));

const FadeIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Adjust the threshold as needed
  });

  const fadeInAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(00)' : 'translateY(200px)',
  });

  return <animated.div ref={ref} style={fadeInAnimation}>{children}</animated.div>;
};


function App() {
  FadeIn.propTypes = {
    children: PropType.any
  }

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
      <div className={`  ${isDarkMode ? 'dark' : ' '}  `}   >
        <div className='bg-brand-200 dark:bg-brand'>
          <NavBar2 onChange={toggleTheme} />

          <div className='container mx-auto'>
            {/* <NavBar onChange={toggleTheme} /> */}

            <Hero />
            <Suspense fallback={null}>
              <FadeIn>
                <About />
              </FadeIn>

            </Suspense>
            <FadeIn>
              <MyProject />
            </FadeIn>
          </div>
          <FadeIn>
            <Technologies />
          </FadeIn>

          <Footer />

        </div>

      </div>
    </>
  )
}

export default App
