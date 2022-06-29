import React from "react";
import ForgotForm from "./forgotForm";
import ForgotBanner from "./forgotBanner";
import SocialShare from "../common/social-share";

function Forgot(){
    return(
        <section id="forgotpass-section-1" class="darkblue form-section">
            <SocialShare />
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
