import React from 'react'


function Forloop(){
    
    let newValues=[]
    let arrayvalues=[1,2,3,4]
    
    arrayvalues.forEach(item => {
        newValues.push(item) 
       
    })
    
    console.log("new value is",newValues)
    return(
        <div>For Loop</div>
    )
    
}

export default Forloop