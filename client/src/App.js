// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { About } from './components/About';
import 'materialize-css';

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <section id="intro">
          <div className="container">
            <Intro />
          </div >
        </section >
        <div className="container">
          <h1>My portfolio site</h1>
        </div>
        <section id="intro">
          <div className="container">
            <About />
          </div >
        </section >

      </Router>
    </main>
  );
}

export default App;
