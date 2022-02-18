import React from 'react'
import { Button, Container, Form,FormGroup,Input,Label } from 'reactstrap';
import { Row,Col } from "react-bootstrap"

function Createform(){
    return(
        <div>
              <Container>
                  <Row style={{margin:'auto'}}>
                      <Col md={4}></Col>
                      <Col md={4}>
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
                        <Button style={{backgroundColor:"green"}}>Click Me</Button>
                    </Form>
                    </Col>
                    <Col md={4}></Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Createform