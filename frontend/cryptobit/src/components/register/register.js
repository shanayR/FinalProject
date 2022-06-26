import React from "react"
import RegisterBanner from "./registerBanner"
import RegisterForm from "./registerForm"
import SocialShare from "../common/social-share"

function Register(){
    return(
        <section id="login-section-1" className="darkblue form-section">
            {/* <div id="share-bar"></div> */}
            <SocialShare />
            <div className="container">
                <div className="d-flex space-around items-centre">
                    <RegisterBanner />
                    <RegisterForm />
                </div>
            </div>
        </section>
    )
}

export default Register
