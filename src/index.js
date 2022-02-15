import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Service from './components/Service'
import Life from './components/Class-life-cycle'

const Routing = () => {
  return(
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/life-cycle" element={<Life />} />
      </Routes>
      <Footer />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
