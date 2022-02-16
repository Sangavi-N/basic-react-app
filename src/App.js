import './App.css';
import React,{ Component } from 'react'
import Hooks from './components/Reacthook';
// import First from './components/Functional';
//import FunctionalLifeCycles from './components/Functional-component';

// import Welcome from './components/Class';
// import Life from './components/Class-life-cycle';
// import Main from './components/ClassLifeCycleExample';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/Header'
// import Footer from './components/Footer'
// import About from './components/About'
// import Service from './components/Service'
// import Life from './components/Class-life-cycle'




class App extends Component {
  render(){
  return (
    <div className='App'>
      <Hooks />
    </div>
  );

/* <Router>
      <Header />
      <Routes>
        
        <Route exact path="/" element={<Header />} />
        <Route path="/service" element={<Service />} />
        <Route path="/life-cycle" element={<Life />} />
        <Route path="/functional-lyf-cycle" element={<FunctionalLifeCycles />}/>
      </Routes>
      <Footer />
    </Router> */
    
  
}
}

export default App;
