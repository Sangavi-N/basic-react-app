import './App.css';
import React,{ Component } from 'react'
// import First from './components/Functional';

// import Welcome from './components/Class';
// import Life from './components/Class-life-cycle';
// import Main from './components/ClassLifeCycleExample';
import Header from './components/Header';
import { Route } from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div className="App">
     {/* <First /> 
     <Welcome />
     {/* <Life /> */}
     {/* <Main /> */}
      {/* <Header />
      <Route /> */}
      <p>this is app/home page</p>
     </div>
  );
}
}

export default App;
