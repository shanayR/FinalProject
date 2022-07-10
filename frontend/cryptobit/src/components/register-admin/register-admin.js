import React from "react"
import RegisterBanner from "./registerBanner"
import RegisterForm from "./registerForm"
import SocialShare from "../common/social-share"

function RegisterAdmin(){
    return(
        <section id="reg-admin-section" className="darkblue form-section">
            <SocialShare />
            <div className="container">
                <div className="d-flex space-around ">
                    <RegisterBanner />
                    <RegisterForm />
                </div>
            </div>
        </section>
    )
}

export default RegisterAdmin
