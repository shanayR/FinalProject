import React, { useEffect } from "react";
import axios from "axios";


function Add(){

    const submitAdd = (event)=>{
        event.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('name', document.querySelector('[name="name"]').value);
        bodyFormData.append('price',parseFloat(document.querySelector('[name="price"]').value));
        bodyFormData.append('coinLogo', "file.jpg");
        
        axios({
            method: "post",
            headers: { 'content-type': 'application/json' },
            url: "http://localhost:8080/add",
            data: bodyFormData,
          }).then(function (response) {
              //handle success
              console.log(response);
                return response;

            }).catch(function (response) {
              //handle error
              console.log(response);
            });
    }
    // useEffect(() => {
    //     // POST request using axios inside useEffect React hook
    //     // submitAdd()
        
    //         // .then(response => setArticleId(response.data.id));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
   

    return(
        <section  id="home-section-7" className="section-padding hundred navyblue">
            <div className="container">
            <div className="d-flex add-heading ">
                <h2 className="add-heading fontsize40 fontweight400 margin-bottom80 white-text"
                    data-aos="fade-up" data-aos-duration="1000">Add coins</h2>
            </div>
            <div className="form-sec">
            <form onSubmit={submitAdd} id="add_form" method="post" encType="multipart/form-data" data-aos="fade-up" data-aos-duration="1000"data-aos-delay="100">
                <div className="dflex center space-around width100 flex-column subscribe-form">
                    {/* <label className="white-text">Coin Name:</label>  */}
                    <input type="text" name="name" className="darkblue margin-bottom26 capitalize" placeholder="Name" /><br />
                    {/* <label className="white-text">Coin Price: $</label> */}
                    <input type="number" step="0.01" name="price"  className="darkblue margin-bottom26 capitalize" placeholder="Price"/><br />
                    {/* <label className="white-text">Coin Logo: </label> */}
                    <input type="file" name="coinLogo"  className="darkblue margin-bottom26 capitalize" placeholder="Coin Logo"/><br />
                    <input type="submit" className="button" />
                </div>
            </form>
            </div>
            </div>
        </section>
    )
}

export default Add