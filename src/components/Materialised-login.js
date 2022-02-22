import React from 'react'
import {Paper,Container} from '@mui/material'
import {Button,  Form,FormGroup,Input,Label} from 'reactstrap'
import Header from './Header'

function Matlogin(){
    const paperStyle={padding:'20px',height:'60vh',width:'380px','margin-top':"10px",'margin-bottom':'80px','margin-left':'350px','margin-right':'20px', 'background-color':"red"}
    return(
        <Container> 
            <Paper elevation={10} style={paperStyle} >
               <h2>Material UI Login</h2>
                <Form>
                        <FormGroup>

                            <Label for="username">Username</Label>
                            <Input  id="username" name="username" placeholder="type username" type="username"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input id="email" name="email" placeholder="type email" type="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input id="password" name="password" placeholder="type password" type="password"/>
                        </FormGroup>
                        <Button  style={{'background-color':"green"},{width:"100%"}}>Click Me</Button>
                    </Form>
                    
            </Paper>
        </Container>
    )
}

export default Matlogin