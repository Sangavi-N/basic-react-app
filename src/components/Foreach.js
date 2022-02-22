import React from 'react'


function Foreach(){
    
    let newValues=[]
    let arrayvalues=[1,2,3,4]
    
    arrayvalues.forEach(item => {
        newValues.push(item) 
       
    })
    
    console.log("new value is",newValues)
    return(
        <div>This is Foreach method</div>
    )
    
}

export default Foreach