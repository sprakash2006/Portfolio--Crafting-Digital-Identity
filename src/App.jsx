import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./pages/intro.jsx";
import About from '../src/pages/aboutme';
import Skills from '../src/pages/skills';
import Certificate from '../src/pages/certificate';
import Project from '../src/pages/Project';
import Contact from '../src/pages/contact';
import Loader from '../src/components/Loader';
import useMediaQuery from '../src/Hooks/useMediaQuery';

function App() {
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width: 391px)"); // ✅ only true for <390px

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // if (loading) {
  //   return (
  //     <div className="loading-container">
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className='web-hero-page bg-black' style={{ position: 'relative' }}>
        <div id='home' style={{ position: 'relative', zIndex: 1 }}>
          <Header />
          <Home />
        </div>
      </div>

      <div id='intro' style={{ position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <About />
        </div>
      </div>

      <div id='stack'>
        <Skills />
      </div>
      <div>
        <Certificate />
      </div>
      <div id='project'>
        <Project />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </>
  );
}

export default App;