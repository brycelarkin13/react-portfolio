import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('about');


  return (
    <div>
      <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
      <main> {!currentTab ? (
          <>
          <About currentTab={currentTab}></About>
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
