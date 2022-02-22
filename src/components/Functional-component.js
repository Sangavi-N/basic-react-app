import React, {  Fragment, useState, useEffect } from "react";
function FunctionalLifeCycles (){
    const[count, setCount]= useState(5);

    useEffect(() => {
        console.log("ComponentDidMount");
        }, []);

        useEffect(()=>{
            console.log("Component will receive props")
            },[count])

            useEffect(()=>{return()=>{
                console.log("Component will unmount")
                }},[])


    return (
        <Fragment>
          <p>In Functional Component</p>
          <p>You clicked {count} times</p>
          <button onClick={()=>{setCount(count+1)}}>Click me</button>
        </Fragment>
      );

     
       
}

  
    

// forth component
const Main = () => {
  const [mount, setMount] = useState(true);
  let toggleComponent = () => {
    setMount(!mount);
  };
  return (
    <div className="app">
      <button onClick={toggleComponent}>Mount / unMount</button>
      {mount && <FunctionalLifeCycles />}
      <br />
    </div>
  );
};
export default Main;