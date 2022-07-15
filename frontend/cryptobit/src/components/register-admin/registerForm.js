
import axios from "axios";
import React , {useState } from "react"
import {Form} from "react-bootstrap"
import {Button } from "react-bootstrap"
// import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";


function RegisterAdminForm(){
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)
    const [formValues, setFormValues] = useState({
        user_name:"",email:"", password:"", admin_id:""
    })
    const admin_id = formValues.admin_id
    const password = formValues.password
    const regConfirmPassword = formValues.regConfirmPassword


    const handleChange = (event) => {
        // console.log(e.target);
        // const { name , value } = e.target;
        setFormErrors(validate(event.target.values))
        setFormValues({...formValues,[event.target.name] : event.target.value})
        // setFormValues({...formValues,[name] : value})
        console.log(formValues);
        // navigate('/login',{state:formValues})
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        axios({
            method: "post",
            url: `${process.env.REACT_APP_SERVER_PATH}registeradmin`,
            data: formValues,
            headers: { 
                // 'Content-Type': 'multipart/form-data'
                'Content-type': 'application/json'
             },
 
        }).then(
            navigate('/login',{state:formValues})
            
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        setFormErrors(validateSubmit(formValues))
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
        // const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const passwordAdmin = "123ABC5%"
        
        if(!formValues.user_name){
            errors.user_name = "User Name is required"
        }
        if(!formValues.password){
            errors.password = "Password is required"
        }
       
        if(!formValues.email){
            errors.email = "Email is required"
        }
        else if(!regex.test(values.email)){
            errors.email ="Enter correct Email"
        }
        if(!formValues.regConfirmPassword){
            errors.regConfirmPassword = "Re-enter your password"
        }
        else if(password !== regConfirmPassword){
            console.log("Please enter the same password as above")
            // document.getElementsByClassName('pswd-error').append("Please enter the same password as above")
            errors.regConfirmPassword = "Please enter the same password as above"
        }
        // if(!formValues.accountNumber){
        //     errors.accountNumber = "Account Number is required"
        // }else if(formValues.accountNumber.length < 14){
        //     errors.accountNumber = "Account Number must be 14 digits"
        // }
        if(!formValues.admin_id){
            errors.admin_id = "Admin ID is required"
        } else if(admin_id !== passwordAdmin){
            errors.admin_id = "Please enter correct admin ID"
        }

        return errors

    }
    const validateSubmit =(values) =>{
        const errors = {}
        // const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const passwordAdmin = "123ABC5%"
        if(!formValues.user_name){
            errors.user_name = "User Name is required"
        }
        if(!formValues.password){
            errors.password = "Password is required"
        }
        if(!formValues.email){
            errors.email = "Email is required"
        }
        else if(!regex.test(values.email)){
            errors.email ="Enter correct Email"
        }
        if(!formValues.regConfirmPassword){
            errors.regConfirmPassword = "Re-enter your password"
        }
        else if(password !== regConfirmPassword){
            console.log("Please enter the same password as above")
            // document.getElementsByClassName('pswd-error').append("Please enter the same password as above")
            errors.regConfirmPassword = "Please enter the same password as above"
        }
        // if(!formValues.accountNumber){
        //     errors.accountNumber = "Account Number is required"
        // }else if(formValues.accountNumber.length < 14){
        //     errors.accountNumber = "Account Number must be 14 digits"
        // }
        if(!formValues.admin_id){
            errors.admin_id = "Admin ID is required"
        } else if(admin_id !== passwordAdmin){
            errors.admin_id = "Please enter correct password"
        }

        return errors

    }
    return(
        <div className="main-form top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <div className="form-blue-box blue-box">
                <h2>ADMIN REGISTER</h2>
                {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="white-text margin-bottom26">Registered Successfully!</div>
            )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="form" controlId="formBasicEmail registerForm">

                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" name="user_name" onChange={handleChange}/>
                        <p className="error">{formErrors.user_name}</p>

                        <Form.Label id="regemail">Email address</Form.Label>
                        <Form.Control type="text" name="email" onChange={handleChange}/>
                        <p className="error">{formErrors.email}</p>
                        
                        <Form.Label>Admin ID</Form.Label>
                        <Form.Control type="password" name="admin_id" onChange={handleChange} />
                        <p className="error">{formErrors.admin_id}</p>

                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" controlId="regpass" onChange={handleChange}/>
                        <p className="error">{formErrors.password}</p>
                        
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"name="regConfirmPassword"  id="regpass" onChange={handleChange}/>
                        <p className="error pswd-error">{formErrors.regConfirmPassword}</p>
                        <div className="btn-container">
                            <Button variant="primary" type="submit"  className="button">Register</Button>
                            {/* <Link to="/register-admin" className="button-register">
                            <Button variant="primary" type="submit" value="Register"  className="button-register">Login As Admin</Button>
                            </Link> */}
                        </div>
                    
                    </Form.Group>
                </Form>
            </div>
        </div>
                      
    )
}

export default RegisterAdminForm
