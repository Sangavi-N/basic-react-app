import './App.css';
import React,{ Component } from 'react'
import HelloWorld from './components/Array';
import FunctionalLifeCycles from './components/Functional-component';
import MapMethod from './components/Mapmethod';
import Forloop from './components/Forloop';

 import Life from './components/Class-life-cycle';
 import Ternary from './components/Ternary';
 import Spread from './components/Spread-operator';
 import Index from './components/Props/Index';

 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import { Link } from 'react-router-dom';
 import Header from './components/Header'
 import Footer from './components/Footer'
 import Service from './components/Service'
 import Createform from './components/Loginpage';




class App extends Component {
  render(){
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route exact path="/" element={<Header />} />
        <Route path="/service" element={<Service />} />
        <Route path="/life-cycle" element={<Life />} />
        <Route path="/functional-lyf-cycle" element={<FunctionalLifeCycles />}/>
        <Route path="/hello-world" element={<HelloWorld />}/>
        <Route path="/map-method" element={<MapMethod />}/>
        <Route path="/forloop" element={<Forloop />}/>
        <Route path="/ternary" element={<Ternary />}/>
        <Route path="/spread" element={<Spread />}/>
        <Route path="/index" element={<Index />}/>
        <Route path="/createform" element={<Createform />}/>
      </Routes>
      <Footer />
    </Router> 
      );

    
  
}
}

export default App;
