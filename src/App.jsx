//----------------IMPORTS----------------------- 
import './index.css'
import NavBar from './components/NavBar_2'
import Hero from './components/Hero'
import MyProject from './components/MyProject'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import { useState, useEffect, lazy, Suspense } from 'react'
import { useInView, animated, useSpring } from '@react-spring/web'
import PropType from "prop-types";
//----------------IMPORTS----------------------- 



//----------------CONSTANTS----------------------- 

const About = lazy(() => import('./components/About'));

const FadeIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.4, // Adjust the threshold as needed
  });

  const fadeInAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
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
      <div className={`${isDarkMode ? 'dark' : ' '} `}   >
        <div className='bg-brand-200 dark:bg-brand-dark'>
          <NavBar onChange={toggleTheme} />

          <Hero />


          <FadeIn>

            <Suspense>
              <About />
            </Suspense>
          </FadeIn>
          <FadeIn>
            <MyProject />

          </FadeIn>
          <FadeIn>
            <Technologies />
          </FadeIn>



          <Footer />
        </div>
      </div>


      {

      }
    </>
  )
}

export default App
