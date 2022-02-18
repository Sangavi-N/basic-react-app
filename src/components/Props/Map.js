import React from 'react'


function Map(props){
    const {details,newEmp}=props
    console.log("prop is", props);
     return(
        <div>
        {details?.length?details.map((item,index)=>{
            return(
             <div key={item.name}>
            
                
                <p>
                    {item.name}
                </p><p>
                    {item.sal}
                </p>
            </div>
            )
          }):
          <div>No elements are there</div>
        
        }
        <button onClick={()=>{newEmp([{name:"Mike",sal:"20k",dept:"ECE"},{name:"John",sal:"25k",dept:"EEE"},{name:"Doe",sal:"20k",dept:"ECE"}])}}>CLICK ME TO SEE THE EMPLOYEES</button>
        {/* <button onClick={()=>{setEmp({details:["Mike","John","Doe"]})}}>CLICK ME TO SEE THE EMPLOYEES</button> */}
        </div>
        )
}

export default Map

