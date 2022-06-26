import React from "react"
import SocialShare from "../common/social-share"
import LoginBanner from "./loginBanner"
import LoginForm from "./loginForm"


function Login(){
    return(
        <section id="login-section-1" className="darkblue form-section">
            {/* <div id="share-bar"></div> */}
            <SocialShare />
            <div className="container">
                <div className="d-flex space-around items-centre">
                    <LoginBanner />
                    <LoginForm />
                </div>
            </div>
        </section>
    )

}

export default Login
