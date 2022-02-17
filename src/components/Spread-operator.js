import React from 'react'

function Spread(){
    
    
    const myVehicle  = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);
return(
    <div>This is Spread Operator</div>
)
}

export default Spread

