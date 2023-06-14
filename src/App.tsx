import React from 'react';
import Foto from './ui-components/Foto';
import Projects from './components/Projects/Projects';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Skills from "./components/Skills"

function App() {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center gap-y-8">
        <div className="flex flex-col">
          <h1 className="text-6xl mx-auto mt-6">Enzo Acosta</h1>
            <h2 className="text-xl mx-auto">Programador Full-stack Jr</h2>
          </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-28">
        <div className="flex flex-col gap-y-4 text-center">
        
          <Projects />
        </div>
        <div className="flex flex-col gap-4">
          <Foto />
          <SocialMedia />
          <br />
          <Skills/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
