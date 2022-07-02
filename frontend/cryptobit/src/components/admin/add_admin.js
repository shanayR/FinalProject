import React, { useState,useEffect } from "react";
import axios from "axios";
import SocialShare from "../common/social-share";


function Add(){

    // const submitAdd = (event)=>{
    //     event.preventDefault();
    //     var bodyFormData = new FormData();
    //     bodyFormData.append('name', document.querySelector('[name="name"]').value);
    //     bodyFormData.append('price',parseFloat(document.querySelector('[name="price"]').value));
    //     bodyFormData.append('coinlogo', "file.jpg");
        
    //     axios({
    //         method: "post",
    //         headers: { 'content-type': 'application/json' },
    //         url: "http://localhost:8080/add",
    //         data: bodyFormData,
    //       }).then(function (response) {
    //           //handle success
    //           console.log(response);
    //             return response;

    //         }).catch(function (response) {
    //           //handle error
    //           console.log(response);
    //         });
    // }
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
    // useEffect(() => {
    //     // POST request using axios inside useEffect React hook
    //     // submitAdd()
        
    //         // .then(response => setArticleId(response.data.id));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
   

    return(
        <section  id="home-section-7" className="darkblue form-section">
           <SocialShare />
            <div className="container">
            <div class="d-flex  items-centre ">
            <div class="form-text" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <div class="update-heading">
                    <h4>Add Coins</h4>
                </div>
            </div>
            <div className="main-form form-middle top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <div class="form-blue-box blue-box">
                    <form  onsubmit={handleSubmit} action="" method="POST">
                        <div className="form">
                                <label for="" className="form-label">Coin</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formValues.name}  
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.name}</p>
                            
                                <label for="" className="form-label">Price</label>
                                <input 
                                    type="number" 
                                    step="0.01" 
                                    name="price" 
                                    value={formValues.price}
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.price}</p>
                
                                <label for="" className="form-label">Coin Logo</label>
                                <input 
                                    type="file" 
                                    name="coinlogo" 
                                    className="form-control" 
                                    onChange={handleChange}
                                    value={formValues.coinlogo}
                                    
                                />
                                <p className="error">{formErrors.coinLogo}</p>
                            
                            
                                <input type="submit" value="Submit" className="button" />
                            
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Add