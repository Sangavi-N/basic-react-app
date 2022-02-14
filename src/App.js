import './App.css';
import React,{ Component } from 'react'
import First from './components/functional';
import Welcome from './components/class';

class App extends Component {
  render(){
  return (
    <div className="App">
     <First /> 
     <Welcome />
     </div>
  );
}
}

export default App;
