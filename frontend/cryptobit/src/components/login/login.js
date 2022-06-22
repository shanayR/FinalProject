import React from "react"
import LoginBanner from "./loginBanner"
import LoginForm from "./loginForm"


function Login(){
    return(
        <section id="login-section-1" className="darkblue form-section">
            <div className="container">
                <LoginBanner />
                <LoginForm />
            </div>
        </section>
    )

}

export default Login
