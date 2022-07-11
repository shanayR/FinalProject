import axios from "axios"
import React , {useState , useEffect} from "react"
import {Form} from "react-bootstrap"
import {Button } from "react-bootstrap"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
 
 
function RegisterForm(){
    const navigate = useNavigate();
 
    // const initialValues = {user_name:"",email:"", password:"",accountNumber:"",regConfirmPassword:"",petname:"",}
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)
    const [formValues, setFormValues] = useState({
        user_name:"",
        email:"",
        password:"",
        accountNumber:"",
        regConfirmPassword:"",
        petname:""
    })
    const password = formValues.password
    const regConfirmPassword = formValues.regConfirmPassword
 
    const handleChange = (event) => {
        // console.log(e.target);
        // const { name , value } = e.target;
        setFormErrors(validate(event.target.values))
 
        setFormValues({...formValues,[event.target.name] : event.target.value})
        console.log(formValues);
    };
 
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("user_name", formValues.user_name)
        formData.append("email", formValues.email)
        formData.append("password", formValues.password)
        formData.append("accountNumber", formValues.accountNumber)
        formData.append("petname", formValues.petname)
 
        // setFormErrors(validate(event.target.values))
 
        axios({
            method: "post",
            url: "http://localhost:8080/register",
            data: formData,
            // headers: { 
            //     // 'Content-Type': 'multipart/form-data'
            //     'Content-type': 'application/json'
            //  },
 
        }).then(
            // navigate('/login',{state:formValues})
            (response)=>{

                console.log(response)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        setFormErrors(validate(formValues))
        setIsSubmit(true)
       
    };
 
    // useEffect(() =>{
    //     console.log(formErrors);
    //     if(Object.keys(formErrors).length === 0 && isSubmit){
    //         console.log(formValues);
    //     }
    // })
 
    const validate =(values) =>{
        const errors = {}
        const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!formValues.user_name){
            errors.user_name = "User Name is required"
        }
        if(!formValues.password){
            errors.password = "Password is required"
        }else if(formValues.password.length > 10){
            errors.password = "Password cannot exceed more than 10 characters"
        }
        if(!formValues.email){
            errors.email = "Email is required"
        }
        // else if(!regex.test(values.email)){
        //     errors.email ="Enter correct Email"
        // }
        if(!formValues.regConfirmPassword){
            errors.regConfirmPassword = "Re-enter your password"
        }
        else if(password !== regConfirmPassword){
            console.log("Please enter the same password as above")
            // document.getElementsByClassName('pswd-error').append("Please enter the same password as above")
            errors.regConfirmPassword = "Please enter the same password as above"
        }
        if(!formValues.accountNumber){
            errors.accountNumber = "Account Number is required"
        }else if(formValues.accountNumber.length < 14 || formValues.accountNumber.length > 14 ){
            errors.accountNumber = "Account Number must be 14 digits"
        }
        if(!formValues.petname){
            errors.petname = "Petname is required"
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
                    <Form.Group className="form" id=" registerForm">
 
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" name="user_name" onChange={handleChange} value={formValues.user_name}/>
                        <p className="error">{formErrors.user_name}</p>
 
                        <Form.Label id="regemail">Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} value={formValues.email}/>
                        <p className="error">{formErrors.email}</p>
                       
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="number" name="accountNumber" id="regaccnum" onChange={handleChange} value={formValues.accountNumber}/>
                        <p className="error">{formErrors.accountNumber}</p>
 
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control type="text" name="petname" onChange={handleChange} value={formValues.petname} />
                        <p className="error">{formErrors.petname}</p>
 
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" id="regpass" onChange={handleChange} value={formValues.password}/>
                        <p className="error">{formErrors.password}</p>
                       
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"name="regConfirmPassword"  id="regpass" onChange={handleChange} value={formValues.regConfirmPassword}/>
                        <p className="error pswd-error">{formErrors.regConfirmPassword}</p>
                        <Button variant="primary" type="submit" value="Register"  className="button">Register</Button>
                       
                       
                        <Form.Text>Are you An Admin?<Link  className="forgot-password" to="/register-admin"> Register As Admin</Link></Form.Text>
                   
                    </Form.Group>
                </Form>
            </div>
        </div>
                     
    )
}
 
export default RegisterForm
 

