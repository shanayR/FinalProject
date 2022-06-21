import React from "react"
import RegisterBanner from "./registerBanner"
import RegisterForm from "./registerForm"

function Register(){
    return(
        <section id="register-section-1" className="darkblue form-section">
            <RegisterBanner />
            <RegisterForm />
        </section>
    )
}

export default Register