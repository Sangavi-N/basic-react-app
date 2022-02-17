import React from 'react'
// export default function Script() {
//     var numbers = [4, 9, 16, 25, 29];
//     var first = numbers.find(myFunction);
//     function myFunction(value, index, array) {
//         return value > 18;
    
//     }
//     // return 
        
    
// }

//     function Second(){
//     var numbers = [4, 9, 16, 25, 29];
//     var first = numbers.find(myFunction);
    
//     function myFunction(value, index, array) {
//         return value > 18;    
//     }
// }

function HelloWorld(){
    const a = 1;
const b = 'b';
// ES5
const c = 'value of a is ' + a + ' and value of b is ' + b;
// ES6 
const templateliterals = `value of a is ${a} and value of b is ${b}`;
console.log(c,templateliterals)

    return(
        <div>
            This is hello world
        </div>
    )
}
export default HelloWorld
