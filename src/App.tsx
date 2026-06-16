import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import VoluntaryWork from './components/VoluntaryWork';
import ExamTranscript from './components/ExamTranscript';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <VoluntaryWork />
        <ExamTranscript />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
