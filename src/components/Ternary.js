import React from 'react'

function Ternary(){
    
    
        function renderApp() {
            console.log("this is render app")
        }
          function renderLogin() {
              console.log("this is render login")
          }
          
          let authenticated = false;
          
          
          authenticated ? renderApp() : renderLogin();
          return(
          
            <div>This is Ternary</div>
     )
         

}
export default Ternary