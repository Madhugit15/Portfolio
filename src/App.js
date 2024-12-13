
import './App.css';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Education } from './components/education';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Project } from './components/projects';
import { Skills } from './components/skills';
import TopContent from './components/topcontent';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopContent/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
