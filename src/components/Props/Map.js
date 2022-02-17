import React, {useState} from 'react'


function Map(props){
    //  const[props, setEmp]=useState([]);
    console.log("prop is", props);
     return(
        <div>
        {props.details?.length?props.details.map((item,index)=>{
            return(
             <div key={item}>
            
                
                <p>
                    {item}
                </p>
            </div>
            )
          }):
          <div>No elements are there</div>
        }
       
        {/* <button onClick={()=>{setEmp([{name:"Mike",sal:"20k",dept:"ECE"},{name:"John",sal:"25k",dept:"EEE"},{name:"Mike",sal:"20k",dept:"ECE"}])}}>CLICK ME TO SEE THE EMPLOYEES</button> */}
        {/* <button onClick={()=>{setEmp({details:["Mike","John","Doe"]})}}>CLICK ME TO SEE THE EMPLOYEES</button> */}
        </div>
        )
}
export default Map

