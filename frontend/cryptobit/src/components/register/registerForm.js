import React , {useState , useEffect} from "react"
import {Form} from "react-bootstrap"
import {Button } from "react-bootstrap"


function RegisterForm(){
    const initialValues = {email:"", password:"",accountNumber:"",regConfirmPassword:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)
    const password = formValues.password
    const regConfirmPassword = formValues.regConfirmPassword

    const handleChange = (e) => {
        // console.log(e.target);
        const { name , value } = e.target;
        setFormValues({...formValues,[name] : value})
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
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
        }else if(formValues.password.length < 4){
            errors.password = "Password must be more than 4 characters"
        }else if(formValues.password.length > 10){
            errors.password = "Password cannot exceed more than 10 characters"
        }
        if(!formValues.email){
            errors.email = "Email is required"
        }else if(!regex.test(values.email)){
            errors.email ="Enter correct Email"
        }
        if(!formValues.regConfirmPassword){
            errors.regConfirmPassword = "Re-enter your password"
        }
        if(password !== regConfirmPassword){
            // document.getElementsByClassName('error').append("Please enter the same password as above")
        }
        if(!formValues.accountNumber){
            errors.accountNumber = "Account Number is required"
        }else if(formValues.accountNumber.length < 14){
            errors.accountNumber = "Account Number must be 14 digits"
        }
    

        return errors

    }
    return(
        <div className="main-form top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <div className="form-blue-box blue-box">
                <h2>REGISTER</h2>
                {/* {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="white-text margin-bottom26">Registered Successfully!</div>
            )} */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="registerForm" className="form" controlId="formBasicEmail">
                        <Form.Label id="regemail">Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange}/>
                        <p className="error">{formErrors.email}</p>
                        
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="number" name="accountNumber" id="regaccnum" onChange={handleChange}/>
                        <p className="error">{formErrors.accountNumber}</p>

                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" id="regpass" onChange={handleChange}/>
                        <p className="error">{formErrors.password}</p>
                        
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"name="regConfirmPassword"  id="regpass" onChange={handleChange}/>
                        <p className="error">{formErrors.regConfirmPassword}</p>
                        <input variant="primary" type="submit" value="Register"  className="button" />
                    
                    </Form.Group>
                </Form>
            </div>
        </div>
                      
    )
}

export default RegisterForm