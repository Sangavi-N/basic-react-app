import './App.css';

import React,{ Component } from 'react'
import Hooks from './components/Reacthook';
import HelloWorld from './components/Array';
// import First from './components/Functional';
import FunctionalLifeCycles from './components/Functional-component';
import MapMethod from './components/map';
import Forloop from './components/Forloop';

// import Welcome from './components/Class';
 import Life from './components/Class-life-cycle';
 import Main from './components/ClassLifeCycleExample';
 import Ternary from './components/Ternary';
 import Spread from './components/Spread-operator';
 import Destructing from './components/Destructing';

 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Header from './components/Header'
 import Footer from './components/Footer'
 import About from './components/About'
 import Service from './components/Service'
 //import Life from './components/Class-life-cycle'




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
        
      </Routes>
      <Footer />
    </Router> 
      );

    
  
}
}

export default App;
