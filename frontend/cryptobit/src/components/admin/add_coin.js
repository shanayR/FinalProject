import React, { useState,useEffect } from "react";
import axios from "axios";
import SocialShare from "../common/social-share";
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import dotenv from 'dotenv/config';



function Add(){

    const [coins, getCoins] = useState();
      
        const cryptomarket = () =>{
          axios.get(process.env.SERVER_PATH +"market")
          .then(function (response){
           
            getCoins(response.data)
          })
          .catch((error) =>{
            console.log(error);
          })
          .then(() =>{console.log("Executed")})
        }
        useEffect(()=>{
            cryptomarket()
        },[]);
    
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)
    const [formValues, setformValue] = useState({
        name: '',
        // price: '',
        description:'',
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
        // formData.append("price", formValues.price)
        formData.append("description", formValues.description)
        // loginFormData.append("coinlogo", formValues.coinlogo)
        formData.append("coinlogo", formValues.coinlogo);

    
        axios({
              method: "post",
              url: `${process.env.SERVER_PATH}add`,
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
        // console.log(formErrors);
        // if(Object.keys(formErrors).length === 0 && isSubmit){
        //     console.log(formValues.target.file);
        // }
    })

    const validate =(formValues) =>{
        const errors = {}
        if(!formValues.name){
            errors.name = "Name is required"
        }
        // if(formValues.name.value === 'DEFAULT'){
        //     errors.name = "Please Select A Currency"
        // }
        // if(!formValues.price){
        //     errors.price = "Price is required"
        // }
        if(formValues.description === ""){
            errors.description = "Description is required"
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
            <div className="d-flex  items-centre flex-column">
            <div className="form-text" data-aos="fade-top" data-aos-easing="linear" data-aos-duration="1500">
                <div className="update-heading">
                    <h4>Add Coins</h4>
                </div>
            </div>
            <div className="main-form form-middle top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <div className="form-blue-box blue-box">
                    <Form  onSubmit={handleSubmit} encType="multipart/form-data">
                        <Form.Group className="form">
                                <Form.Label className="form-label" for="name" >Coin</Form.Label>
                                <Form.Select name="name" 
                                    type="text"
                                    value={formValues.name}  
                                    className="form-control"
                                    onChange={handleChange}
                                    
                                    >
                                        <option value="">Choose a currency ...</option>
                                    {coins && coins.map((data,key)=>{
                                        return(
                                            <option value={data.id}>{data.name}</option>
                                        )
                                    })}
                                </Form.Select> 
                                {/* <Form.Control 
                                    type="text" 
                                    name="name" 
                                    value={formValues.name}  
                                    className="form-control" 
                                    onChange={handleChange}
                                /> */}
                                <p className="error">{formErrors.name}</p>
                            
                                {/* <Form.Label  className="form-label">Price</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    step="0.01" 
                                    name="price" 
                                    value={formValues.price}
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.price}</p> */}

                                <Form.Label  className="form-label">Description</Form.Label>
                                <Form.Control  as="textarea" 
                                    type="text"
                                    name="description" 
                                    value={formValues.description}
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.description}</p>
                
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
