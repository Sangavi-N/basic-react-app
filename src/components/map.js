import React from 'react'

const arrayvalues=[
  {
    shape: "circle",
    radius: "50%",
    id: "Ellipse",
  },
  {
    shape: "square",
    radius: "0",
    id: "Rectangle",
  },
  {
    shape: "hexagon",
    radius: "0",
    id: "Hexagon",
  },
  {
    shape: "decision",
    radius: "0",
    id: "Decision",
  },
];
function MapMethod(){
  return (
    <div>
      {arrayvalues.length?arrayvalues.map((item,index)=>{
        return(
         <div key={item.id}>
        
            
        <p>
            {item.id}
        </p>
        <p>
            {item.shape}
        </p>
            </div>
        )
      }):null}
    </div>
  )
}

export default MapMethod


