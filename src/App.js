import React from 'react';
import { Navbar } from './components';
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
        <About />
        <Portfolio />
        <Footer />
      </div>
    </div>
  )
}

export default App
