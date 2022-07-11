import React,{useState,useEffect} from "react";
import Form from 'react-bootstrap/Form'
import SocialShare from "../common/social-share";
import {Button} from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateCoin(){
    const navigate = useNavigate();
    const params = useParams(); 
    // const [initialValues, setinitialValues] = React.useState({
    //     name: '',
    //     price: '',
    //     coinlogo:''
    //   });
    const [formValues, setFormValues] = useState({
             name: '',
            //  price: '',
             coinlogo:'',
             description:''

           });
   // let initialValues = {name:"", price:"", coinlogo:""}

    const coindata = () =>{
    axios.get(`http://localhost:8080/update/${params.id}`)
    .then(function (response){
    
        getCoins(response.data)
        const coinName = response.data.name
        // const coinPrice = response.data.price.$numberDecimal
        const coinDescription = response.data.description
        const coinImage = response.data.image


        setFormValues({
            name:coinName,
            // price:coinPrice,
            coinlogo:coinImage,description:coinDescription
        })
        // console.log(`${coinName}  ${coinPrice}  ${coinImage}`);
        
    })
    .catch((error) =>{
        console.log(error);
    })
    .then(() =>{console.log("Executed")})
    }
    useEffect(()=>{
        coindata()
        // console.log(initialValues)
    },[]);
    
    // const initialValues = {name:"", price:"", coinlogo:""}
    
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)
    const [coins, getCoins] = useState();
    console.log(formValues);
    const handleChange = (event) => {
        // console.log(e.target);
        const { name , value } = event.target;
        setFormValues({...formValues,
            [event.target.name]:(event.target.name !== 'coinlogo' ? event.target.value : event.target.files[0]),
        })
        console.log('formValues');

        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", formValues.name)
        // formData.append("price", formValues.price)
        // formData.append("coinlogo", formValues.coinlogo)
        formData.append("description", formValues.description)
        formData.append("coinlogo", formValues.coinlogo);
        setFormErrors(validate(formValues))
        setIsSubmit(true)
        axios({
            method: "put",
            url: `http://localhost:8080/update/${params.id}`,
            data: formData,
            headers: { "encType": "multipart/form-data" },
          }).then(
              navigate('/view')
          ).catch(
              (error) => {
                  console.log(error)
              }
          )         

    };

   

    const validate =(values) =>{
        const errors = {}
        if(!formValues.name){
            errors.name = "name is required"
        }
        // if(!formValues.price){
        //     errors.price = "Price is required"
        // }
        if(!formValues.description){
            errors.description = "Description is required"
        }
        if(!formValues.coinlogo){
            errors.coinlogo = "Image is required"
        }
       
        return errors

    }
    return(
        <section  id="home-section-7" className="darkblue form-section">
            <SocialShare />
            <div className="container">
            <div class="d-flex  items-centre flex-column">
            <div class="form-text" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <div class="update-heading">
                    <h4>Update Coins</h4>
                </div>
            </div>
            <div className="main-form form-middle top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <div class="form-blue-box blue-box">
                    <Form  onSubmit={handleSubmit} action="" method="POST">
                    
                        <Form.Group className="form">
                                <Form.Label  className="form-label">Coin</Form.Label>
                                <Form.Control
                                    disabled 
                                    type="text" 
                                    name="name" 
                                    value={formValues.name}  
                                    className="form-control" 
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.name}</p>
                            
                                {/* <Form.Label className="form-label">Price</Form.Label>
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
                                    // value=""
                                    
                                />
                               
                               
                                 {typeof formValues.coinlogo === 'object'?null:<span>Current File: {formValues.coinlogo}</span>}

                                <p className="error">{formErrors.coinlogo}</p>
                            
                            
                                <Button variant="primary" type="submit"  className="button">
                                    Update
                                </Button>
                            
                        </Form.Group>
                    
                    </Form>
                </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default UpdateCoin
