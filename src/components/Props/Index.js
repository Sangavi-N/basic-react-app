import React,{ useState} from 'react'
import Map from './Map';
const employee=['sangavi','monisha','snekha','lathikha']

function Index(){

     const[emp,setEmp]=useState([]);
return(
    <div>
    <div>this is index</div>
    <Map details={employee}/>
    </div>
    )

}
export default Index