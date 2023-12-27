import './App.css';
import About from './components/About';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubCalendar from './components/GithubCalendar';
import { Contactme } from './components/Contactme';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GithubCalendar />
      <Contactme />
    </div>
  );
}

export default App;
