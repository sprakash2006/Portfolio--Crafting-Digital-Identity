import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/header";
import StarfieldAnimation from '../src/components/StarfieldAnimation';
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

  if (loading) {
    return (
      <div className="loading-container">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className='web-hero-page'>
        <div className='home-bg'>
          {isMobile && <StarfieldAnimation />} {/* ✅ Will update on resize */}
        </div>
        <div id='home'>
          <Header />
          <Home />
        </div>
      </div>

      <div id='intro'>
        <About />
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
