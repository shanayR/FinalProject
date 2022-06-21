import React from "react"
import ForgotForm from "./forgotForm"

function Forgot(){
    return(
        <section id="forgotpass-section-1" class="darkblue form-section">
        <div id="share-bar"></div>
        <div class="container">
            <div class="d-flex space-around items-centre">
                <div class="form-text" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                    <div class="welcome-heading">
                        <h4>welcome</h4>
                    </div>
                    <div class="form-description">
                        <h3>Set New Password To
                            Login Easily</h3>
                    </div>
                </div>
        <div class="main-form top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <div class="form-blue-box blue-box">
        <h2>NEW PASSWORD</h2>
          <ForgotForm/>
        </div>       
      </div>  
      </div>  
      </div> 
    </section>
    )
}

export default Forgot