
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Expirience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { WriteMe } from './components/WriteMe';
// import './App.css';
import 'materialize-css';

function App() {
  return (
    <>

      <main>

        {/* <Router> */}
        <section id="navbar">
          <Navbar />
        </section >

        <section id="intro">
          <Intro />
        </section >

        <section id="Contact">
          <Contact />
        </section >

        <section id="About">
          <About />
        </section >

        <section id="Experience">
          <Expirience />
        </section >

        <section id="Projects">
          <Projects />
        </section >

        <section id="Skills">
          <Skills />
        </section >

        <section id="Education" className="full-height">
          <Education />
        </section >

        <section id="Resume" className="full-height">
          <Resume />
        </section >

        <section id="WriteMe" className="full-height">
          <WriteMe />
        </section >

        {/* </Router> */}
        {/* </div> */}
      </main>
    </>
  );
}

export default App;
