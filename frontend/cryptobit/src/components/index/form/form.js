import React,{useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';

function Message(){
    const initialValues = {subscribeName:"", subscribeNumber:"", subscribeEmail:""}
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
        const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(!formValues.subscribeName){
            errors.subscribeName = "Username is required"
        }
        if(!formValues.subscribeNumber){
            errors.subscribeNumber = "Phone Number is required"
        }
        else if(!phoneno.test(values.subscribeNumber)){
            errors.subscribeNumber ="Please enter correct number"}
        else if(values.subscribeNumber <= 11){
            errors.subscribeNumber ="Please enter correct number"}
        if(!formValues.subscribeEmail){
            errors.subscribeEmail = "Email is required"
        }else if(!regex.test(values.subscribeEmail)){
            errors.subscribeEmail ="Enter correct Email"
        }
        return errors

    }
    return(
    <section id="home-section-7" className="section-padding hundred navyblue">
    <div className="container">
    {Object.keys(formErrors).length === 0 && isSubmit && (
        <div className="white-text margin-bottom26">Thank you for messaging us!</div>
      )}
        <div className="d-flex">
            <h2 className="fontsize40 fontweight400 margin-bottom80 white-text"
                data-aos="fade-up" data-aos-duration="1000">Send us a
                message!</h2>
        </div>

            <Form id="subscribe" method="post" action="" onSubmit={ handleSubmit}enctype="multipart/form-data" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="100">
                <Form.Group className="dflex center space-around width100 flex-column subscribe-form">

                    <Form.Control 
                        type="text" 
                        name="subscribeName" 
                        placeholder="Your Name" 
                        className="darkblue margin-bottom26 capitalize" 
                        value={ formValues.subscribeName}
                        onChange={handleChange}
                    />
                    <p className="error margin-bottom26">{formErrors.subscribeName}</p>
                    <Form.Control 
                        type="number" 
                        name="subscribeNumber"
                        placeholder="Phone Number" 
                        className="darkblue margin-bottom26 capitalize" 
                        value={ formValues.subscribeNumber}
                        onChange={handleChange}
                    />
                     <p className="error margin-bottom26">{formErrors.subscribeNumber}</p>
                    <Form.Control 
                        type="email" 
                        name="subscribeEmail" 
                        placeholder="Email Address" 
                        className="darkblue margin-bottom26 capitalize" 
                        value={ formValues.subscribeEmail}
                        onChange={handleChange}
                    />
                     <p className="error margin-bottom26">{formErrors.subscribeEmail}</p>
                    <textarea name="subscribeMessage" placeholder="Type Your Message Here" className="darkblue margin-bottom26 capitalize"></textarea>
                </Form.Group>
                <Form.Control type="submit" value="SEND MESSAGE" className="button" />
            </Form>
    </div>
</section>
    )
}
export default Message