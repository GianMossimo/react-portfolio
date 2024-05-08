import React from 'react';
import { Navbar, Slide } from './components';
import { About, Footer, Header, Portfolio } from './containers';
import './App.css';
import './index.css';


const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App
