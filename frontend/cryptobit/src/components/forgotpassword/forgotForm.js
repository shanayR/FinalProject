import React, {useEffect,useState} from "react"
import {Form} from "react-bootstrap"
import {Button } from "react-bootstrap"


function ForgotForm(){
    const initialValues = {email:"", password:"",petname:"",regConfirmPassword:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)
    const password = formValues.password
    const regConfirmPassword = formValues.regConfirmPassword

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
    };

    useEffect(() =>{
        console.log(formErrors);
        if(Object.keys(formErrors).legth === 0 && isSubmit){
            console.log(formValues);
        }
    })

    const validate =(values) =>{
        const errors = {}
        const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!formValues.password){
            errors.password = "Password is required"
        }
        if(!formValues.email){
            errors.email = "Email is required"
        } else if(!regex.test(values.email)){
            errors.email ="Enter correct Email"
        }
        if(!formValues.password){
            errors.password = "Password is required"
        }
        if(!formValues.regConfirmPassword){
            errors.regConfirmPassword = "Re-enter your password"
        } else if(password !== regConfirmPassword){
            console.log("Please enter the same password as above")
            // document.getElementsByClassName('pswd-error').append("Please enter the same password as above")
            errors.regConfirmPassword = "Please enter the same password as above"
        }
        // if(!formValues.petname){
        //     errors.petname = "Petname is required"
        // }
        return errors

    }
    const validateSubmit =(values) =>{
        const errors = {}
        const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!formValues.password){
            errors.password = "Password is required"
        }
        if(!formValues.email){
            errors.email = "Email is required"
        }
        // if(!formValues.petname){
        //     errors.petname = "Petname is required"
        // }
        if(!formValues.regConfirmPassword){
            errors.regConfirmPassword = "Re-enter your password"
        } else if(password !== regConfirmPassword){
            console.log("Please enter the same password as above")
            // document.getElementsByClassName('pswd-error').append("Please enter the same password as above")
            errors.regConfirmPassword = "Please enter the same password as above"
        }
        
        return errors

    }
    return(
        <div class="main-form top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <div class="form-blue-box blue-box">
                <h2>NEW PASSWORD</h2>
                {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="white-text margin-bottom26">Password has changed successfully!</div>
            )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="registerForm" className="form" controlId="formBasicEmail">
                        <Form.Label id="regemail" >Email address</Form.Label>
                        <Form.Control type="text" name="email" onChange={handleChange} value={formValues.email}/>
                        <p className="error">{formErrors.email}</p>

                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control type="text" name="petname" onChange={handleChange} value={formValues.petname}/>
                        <p className="error">{formErrors.petname}</p>

                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" id="regpass" onChange={handleChange} value={formValues.password}/>
                        <p className="error">{formErrors.password}</p>

                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"name="regConfirmPassword"  id="regpass" onChange={handleChange} value={formValues.regConfirmPassword}/>
                        <p className="error">{formErrors.regConfirmPassword}</p>
                        <Button variant="primary" type="submit"  className="button">
                            Change Password
                        </Button>

                    </Form.Group>
                </Form>                    
            </div>       
        </div>  
        
                      
    )
}

export default ForgotForm
