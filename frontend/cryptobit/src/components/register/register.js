import React from "react"
import {Form} from "react-bootstrap"
import RegisterForm from "./registerForm"

function Register(){
    return(
        <section id="register-section-1" className="darkblue form-section">
        <div className="container">
            <div className="d-flex space-around items-centre">
                <div className="form-text" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="welcome-heading">
                        <h4>welcome</h4>
                    </div>
                    <div className="form-description">
                        <h3>Register To Buy<br />
                            And Sell Crypto<br />
                            Easily</h3>
                    </div>
                </div>

                <div className="main-form top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="form-blue-box blue-box">
                        <h2>REGISTER</h2>
                        {/* <form id="registerForm" className="form">
                            <label>Email Address</label><br />
                           <input type="email" name="REGemail" id="regemail" /><br />

                           <label>Account Number</label><br />
                            <input type="number" name="accountNumber" id="regaccnum" /><br />

                            <label>Password</label><br />
                            <input type="password" name="regPassword" id="regpass" /><br />

                            <label>Confirm Password</label><br />
                            <input type="password" name="regConfirmPassword" /><br />
                            <p id="regmsg">  </p>
                            <button className="button">Register</button>
                        </form> */}
                        <RegisterForm/>

                    </div>
                   
                </div>

            </div>
            </div>

      
    </section>
    )
}

export default Register