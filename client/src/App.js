// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Expirience } from './components/Expirience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { WriteMe } from './components/WriteMe';
import 'materialize-css';

function App() {
  return (
    <main>
      <Router>
        <div className="scroll-behavior">
          <Navbar />

          <section id="intro">
            <div className="container">
              <Intro />
            </div >
          </section >

          <section id="Contact">
            <div className="container">
              <Contact />
            </div >
          </section >

          <section id="About">
            <div className="container">
              <About />
            </div >
          </section >

          <section id="Expirience">
            <div className="container">
              <Expirience />
            </div >
          </section >

          <section id="Skills">
            <div className="container">
              <Skills />
            </div >
          </section >

          <section id="Education">
            <div className="container">
              <Education />
            </div >
          </section >

          <section id="Resume">
            <div className="container">
              <Resume />
            </div >
          </section >

          <section id="WriteMe">
            <div className="container">
              <WriteMe />
            </div >
          </section >
        </div>
      </Router>
    </main>
  );
}

export default App;
