import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState('about');


  return (
    <div>
      <div>
      <Header contactSelected={contactSelected} setContactSelected={setContactSelected}></Header>
      </div>
      <main> {!contactSelected ? (
          <>
          <About></About>
          <Projects></Projects>
          </>
        ) : (
          <ContactForm></ContactForm>
        
        )}
      
        
      
      </main>
    </div>
    
  );
}

export default App;
