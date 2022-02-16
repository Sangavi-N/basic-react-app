import React, { Fragment,useState } from "react"
function Hooks(){
    const[count,setCount]=useState(0);
    const[name,setName]=useState('');
    const[list,setList]=useState([]);
    const[details,setDetails]=useState({name:"uma",value:5});

console.log(details)
return(
    <Fragment>
        <h1>UseState Hooks</h1>
        <p>You clicked {count} times</p>
          <button onClick={()=>{setCount(count+1)}}>Changing the count</button>
          <p>The name is {name}</p>
          <button onClick={()=>{setName('sangavi')}}>Changing the Name</button>
          <p>Total list are {list}</p>
          <button onClick={()=>{setList([2,3,4])}}>Changing the List</button>
          <p>Details are {details.name}</p>
          <button onClick={()=>{setDetails((prevValues)=>({...prevValues,department:"react"}))}}>Changing the Details</button>
       
    </Fragment>
)
}

export default Hooks