import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Slide } from './components';
import { About, Footer, Header, Portfolio, Quacky, GPT3 } from './containers';
import './App.css';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/gpt3' element={<GPT3 />} />
        <Route path='/quacky' element={<Quacky />} />
        <Route
          path='/'
          element={
            <div className='App'>
              <div>
                <Navbar />
                <Header />
              </div>
              <Portfolio />
              <Slide />
              <About />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;