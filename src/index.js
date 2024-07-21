import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Boody from './component/boody';
import HeroSection from './component/herosection';
import Hero from './component/hero';
import reportWebVitals from './reportWebVitals';
import Form from './component/From'
import CursorShadow from './component/CursorShadow';
import Footer from './component/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='mainbox-container'>
    
    <Hero />
    <HeroSection />
    <Boody />
    <Form/>
    <Footer/>
    <CursorShadow />
    </div>
  
    {/* <Digital/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
