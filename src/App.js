import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
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
          <Portfolio></Portfolio>
          </>
        ) : (
          <ContactForm></ContactForm>
        
        )}
      
        
      
      </main>
    </div>
    
  );
}

export default App;
