import React,{useState,useEffect} from "react";
import Form from 'react-bootstrap/Form'
import SocialShare from "../common/social-share";

function Update(){
    const initialValues = {name:"", price:"", coinLogo:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)

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
        if(!formValues.name){
            errors.name = "name is required"
        }
        if(!formValues.price){
            errors.price = "Phone Number is required"
        }
        if(!formValues.coinLogo){
            errors.coinLogo = "Image is required"
        }
       
        return errors

    }
    return(
        <section  id="home-section-7" className="darkblue form-section">
            <SocialShare />
            <div className="container">
            <div class="d-flex  items-centre ">
            <div class="form-text" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <div class="update-heading">
                    <h4>Update Coins</h4>
                </div>
            </div>
            <div className="main-form form-middle top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <div class="form-blue-box blue-box">
                    <Form  onsubmit={handleSubmit} action="" method="POST">
                        <Form.Group className="form">
                                <Form.Label for="" className="form-label">Coin</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name" 
                                    value={formValues.name}  
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.name}</p>
                            
                                <Form.Label for="" className="form-label">Price</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    step="0.01" 
                                    name="price" 
                                    value={formValues.price}
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.price}</p>
                
                                <Form.Label for="" className="form-label">Coin Logo</Form.Label>
                                <Form.Control 
                                    type="file" 
                                    name="coinLogo" 
                                    className="form-control" 
                                    onChange={handleChange}
                                    value={formValues.coinLogo}
                                    
                                />
                                <p className="error">{formErrors.coinLogo}</p>
                            
                            
                                <Form.Control type="submit" value="Submit" className="button" />
                            
                        </Form.Group>
                    </Form>
                </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Update