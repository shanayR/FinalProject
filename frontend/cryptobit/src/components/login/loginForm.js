import React, {useState, useEffect} from "react"
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import axios from "axios"

function LoginForm(){
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)
    const [formValues, setFormValues] = useState({
        email:"", password:""
    })
    
    const [focused , setFocused] = useState(false)

    const handleChange = (e) => {
        // console.log(e.target);
        const { name , value } = e.target;
        setFormErrors(validate(formValues))
        setFormValues({...formValues,[name] : value})
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validateSubmit(formValues))
        setIsSubmit(true)

        axios({
            method: "POST",
            data: {
                formValues
            },
            withCredentials: true,
            url: "http://localhost:8080/login",
          }).then((res) => console.log(res));
    };

    useEffect(() =>{
        console.log(formErrors);
        if(Object.keys(formErrors).legth === 0 && isSubmit){
            console.log(formValues);
        }
    })

    const validate =(values) =>{
        const errors = {}
        // const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!formValues.password){
            errors.password = "Password is required"
        }
        else if(!regex.test(values.email)){
            errors.email ="Enter correct Email"
        }
        if(!formValues.password){
            errors.password = "Password is required"
        }
        return errors

    }
    const handleFocus = (e) => {
        setFocused(true)
    }
    const validateSubmit =(values) =>{
        const errors = {}
        // const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!formValues.password){
            errors.password = "Password is required"
        }
        if(!formValues.email){
            errors.email = "Email is required"
        } else if(!regex.test(values.email)){
            errors.email ="Enter correct Email"
        }
        
        return errors

    }
    return(
        <div className="main-form top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <div className="form-blue-box blue-box" >
            <h2>LOGIN</h2>
            {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="white-text margin-bottom26">Logged in Successfully!</div>
            )}
            <Form method="post" action="" onSubmit={ handleSubmit}>
                <Form.Group id="loginForm" className="form login-form" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name="email" value={ formValues.email} onChange={handleChange} onBlur={handleFocus} focused={focused.toString()}/>
                    <p className="error">{formErrors.email}</p>
                    
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={ formValues.password} onChange={handleChange} onBlur={handleFocus} focused={focused.toString()}/>
                    <p className="error">{formErrors.password}</p>
                <div className="forgot-password relative">
                    <Link to="/forgotpassword">Forgot password?</Link>
                </div>
                <Button variant="primary" type="submit" value="Login" className="button">Login</Button>
                <Form.Text>Don't have an account? <Link to="/register"> Sign Up</Link></Form.Text>
                </Form.Group>
            </Form>
        </div>
    </div>
    )
}

export default LoginForm