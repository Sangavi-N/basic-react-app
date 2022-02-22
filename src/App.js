import './App.css';
import React,{ Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";
// import reducers from "Reducers/Reducers";


import HelloWorld from './components/Array';
import FunctionalLifeCycles from './components/Functional-component';
import MapMethod from './components/Mapmethod';
import Foreach from './components/Foreach';

 import Life from './components/Class-life-cycle';
 import Ternary from './components/Ternary';
 import Spread from './components/Spread-operator';
 import Index from './components/Props/Index';

 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Link } from 'react-router-dom';
 import Header from './components/Header'
 import Footer from './components/Footer'
 import Service from './components/Service'
 import Reacrstraplogin from './components/Reactstrap-login';
 import Matlogin from './components/Materialised-login';
import Singlereduxindex from './components/Singlereduxindex';
import Reduxprocess from './components/Redux-process';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


class App extends Component {
  render(){
  return (
    <Router>
      <Header />
      <Provider store={createStore(reducers)}>
        <div style={styles}>
          <h2>
            {"✨✨"} Simple Redux Counter Example {"✨✨"}
          </h2>
          <div>
            <Reduxprocess />
        
          </div>
          </div>
          </Provider>
      
    
      <Routes>
        
        <Route exact path="/" element={<Header />} />
        <Route path="/service" element={<Service />} />
        <Route path="/life-cycle" element={<Life />} />
        <Route path="/functional-lyf-cycle" element={<FunctionalLifeCycles />}/>
        <Route path="/hello-world" element={<HelloWorld />}/>
        <Route path="/map-method" element={<MapMethod />}/>
        <Route path="/foreach" element={<Foreach />}/>
        <Route path="/ternary" element={<Ternary />}/>
        <Route path="/spread" element={<Spread />}/>
        <Route path="/index" element={<Index />}/>
        <Route path="/reacrstraplogin" element={<Reacrstraplogin />}/>
        <Route path="/matlogin" element={<Matlogin />}/>
        <Route path="/single-redux" element={<Singlereduxindex />}/>
      </Routes>
      <Footer />
    </Router> 
  
    
    
      );

    
  
}
}

export default App;
