import React from 'react'

import {Brand, CTA,Navbar} from './components';
import {Possibility, Footer,Header,Blog,WhatGPT3,Feature} from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3/>
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App