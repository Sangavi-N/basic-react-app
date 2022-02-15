import './App.css';
import React,{ Component } from 'react'
import First from './components/Functional';
import Welcome from './components/Class';
import ComponentDidMountMethod from './components/Mounting/Componentdidmount';
import ChildComponent from './components/Mounting/Getderivedstatefromprops';
import Gap from './components/Mounting/Constructor';
import RenderMethod from './components/Mounting/Render';
import ComponentDidUpdateMethod from './components/Unmounting/Componentdidupdate';
import GetSnapshotBeforeUpdateMethod from './components/Unmounting/Getsnapshotbeforeupdate';
import ShouldComponentUpdateMethod from './components/Unmounting/Shouldcomponentupdate';
import ComponentWillUnmount from './components/Updating/Componentwillunmount';

class App extends Component {
  render(){
  return (
    <div className="App">
     <First /> 
     <Welcome />
     <Gap />
     <ChildComponent />
     <RenderMethod />
     <ComponentDidMountMethod />
     <ShouldComponentUpdateMethod />
     <GetSnapshotBeforeUpdateMethod />
     <ComponentDidUpdateMethod />
     <ComponentWillUnmount />

     </div>
  );
}
}

export default App;
