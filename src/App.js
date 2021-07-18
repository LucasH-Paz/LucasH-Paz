import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Works from './Components/Works';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Division from './Components/division';

import '../node_modules/bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Division>About</Division>
      <About />
      <Works />
      <Division>Skills</Division>
      <Skills />
      <Division>Contact</Division>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
