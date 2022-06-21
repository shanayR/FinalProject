import React from "react"
import {Form} from "react-bootstrap"
import {Button } from "react-bootstrap"


function ForgotForm(){
    return(
        <Form>
            <Form.Group id="registerForm" className="form" controlId="formBasicEmail">
                <Form.Label id="regemail">Email address</Form.Label>
                <Form.Control type="email"  />
                
                <Form.Label>Pet Name</Form.Label>
                <Form.Control type="text" name="petName"/>

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" id="regpass"/>
                
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password"name="regConfirmPassword"  id="regpass"/>
                <Button variant="primary" type="submit"  className="button">
                    Change Password
                </Button>
               
            </Form.Group>
        </Form>
                      
    )
}

export default ForgotForm