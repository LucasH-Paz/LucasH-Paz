import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Works from './Components/Works';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import '../node_modules/bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
