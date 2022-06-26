import React from "react"
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

function LoginForm(){
    return(
        <div className="main-form top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <div className="form-blue-box blue-box" >
            <h2>LOGIN</h2>
            <Form>
                <Form.Group id="loginForm" className="form login-form" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  />
                    
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                <div className="forgot-password relative">
                    <Link to="/forgotpassword">Forgot password?</Link>
                </div>
                <input variant="primary" type="submit" value="Login" className="button" />
                <Form.Text>Don't have an account? <Link to="/register"> Sign Up</Link></Form.Text>
                </Form.Group>
            </Form>
        </div>
    </div>
    )
}

export default LoginForm