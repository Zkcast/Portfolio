import './App.css';
import { Home } from './components/home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import { Contact } from './components/Contact/Contact';
import { Skills } from './components/Skills/Skills';
import { Proyects } from './components/proyects/Proyects';
import { ModalContent } from './components/proyects/modal_content/ModalContent';
import { Resume } from './components/Resume/Resume';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function App() {


  return (
    <div className="App">
      <div className='principal_container'>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Proyects />} />
          <Route path="/projects/:id" element={<ModalContent />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
