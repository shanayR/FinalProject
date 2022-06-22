import React from "react";
import ForgotForm from "./forgotForm";
import ForgotBanner from "./forgotBanner";

function Forgot(){
    return(
        <section id="forgotpass-section-1" class="darkblue form-section">
            <div id="share-bar"></div>
            <div class="container">
                <div class="d-flex space-around items-centre">
                    <ForgotBanner />
                    <ForgotForm />
                </div>  
            </div> 
    </section>
    )
}

export default Forgot
