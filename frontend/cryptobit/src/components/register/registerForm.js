import React from "react"
import {Form} from "react-bootstrap"
import {Button } from "react-bootstrap"


function RegisterForm(){
    return(
        <Form>
            <Form.Group id="registerForm" className="form" controlId="formBasicEmail">
                <Form.Label id="regemail">Email address</Form.Label>
                <Form.Control type="email"  />
                
                <Form.Label>Account Number</Form.Label>
                <Form.Control type="number" name="accountNumber" id="regaccnum"/>

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" id="regpass"/>
                
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password"name="regConfirmPassword"  id="regpass"/>
                <Button variant="primary" type="submit"  className="button">
                    Register
                </Button>
               
            </Form.Group>
        </Form>
                      
    )
}

export default RegisterForm