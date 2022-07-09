import React, { useState,useEffect } from "react";
import axios from "axios";
import SocialShare from "../common/social-share";
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'


function Add(){
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)
    const [formValues, setformValue] = useState({
        name: '',
        price: '',
        coinlogo:''
      });
    
      const handleChange = (event) => {
        
        setformValue({ 
          ...formValues,
          [event.target.name]:(event.target.name !== 'coinlogo' ? event.target.value : event.target.files[0]),
        });
      }
      const handleSubmit = async(event) => {
        event.preventDefault()
        // store the states in the form data
        const formData = new FormData();
        formData.append("name", formValues.name)
        formData.append("price", formValues.price)
        // loginFormData.append("coinlogo", formValues.coinlogo)
        formData.append("coinlogo", formValues.coinlogo);

        // if (file) {
        //     loginFormData.append("coinlogo", file);
        // }
      
        // try {
        //   // make axios post request
        //   const response = await axios({
        //     method: "post",
        //     url: "http://localhost:8080/add",
        //     data: loginFormData,
        //     headers: { "encType": "multipart/form-data" },
        //   });

        //    navigate('/view')
        // } catch(error) {
        //   console.log(error)
        // }

        axios({
              method: "post",
              url: "http://localhost:8080/add",
              data: formData,
              headers: { "encType": "multipart/form-data" },
            }).then(
                navigate('/view',{state:formValues})
            ).catch(
                (error) => {
                    console.log(error)
                }
            )         

        setFormErrors(validate(formValues))
        setIsSubmit(true)
      }


    

    // validation start
    useEffect(() =>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues.target.file);
        }
    })

    const validate =(values) =>{
        const errors = {}
        if(!formValues.name){
            errors.name = "Name is required"
        }
        if(!formValues.price){
            errors.price = "Price is required"
        }
        if(!formValues.coinlogo){
            errors.coinlogo = "Image is required"
        }
       
        return errors

    }
    //   validation end


    // useEffect(() => {
    //     // POST request using axios inside useEffect React hook
    //     // submitAdd()
        
    //         // .then(response => setArticleId(response.data.id));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
   

    return(
        <section  id="home-section" className="darkblue form-section">
           <SocialShare />
            <div className="container">
            <div className="d-flex  items-centre ">
            <div className="form-text" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <div className="update-heading">
                    <h4>Add Coins</h4>
                </div>
            </div>
            <div className="main-form form-middle top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <div className="form-blue-box blue-box">
                    <Form  onSubmit={handleSubmit} encType="multipart/form-data">
                        <Form.Group className="form">
                                <Form.Label className="form-label">Coin</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name" 
                                    value={formValues.name}  
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.name}</p>
                            
                                <Form.Label  className="form-label">Price</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    step="0.01" 
                                    name="price" 
                                    value={formValues.price}
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.price}</p>

                                <Form.Label  className="form-label">Detail</Form.Label>
                                <Form.Control  as="textarea" 
                                    type="number" 
                                    step="0.01" 
                                    name="detail" 
                                    value={formValues.detail}
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.detail}</p>
                
                                <Form.Label  className="form-label">Coin Logo</Form.Label>
                                <Form.Control 
                                    type="file" 
                                    name="coinlogo" 
                                    className="form-control" 
                                    onChange={handleChange}
                                    // value={formValues.coinlogo}
                                    
                                />
                                <p className="error">{formErrors.coinlogo}</p>
                            
                            
                                <Button type="submit" value="Submit" className="button" >Submit</Button>
                            
                        </Form.Group>
                    </Form>
                </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Add
