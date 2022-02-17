import React from 'react'

function Destructing(){

    const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';

  console.log(message);
  return(
      <div>This is Destructing</div>
  )
}
}

export default Destructing
