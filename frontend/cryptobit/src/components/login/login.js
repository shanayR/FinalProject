import React from "react"
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

function Login(){
    return(
        <section id="login-section-1" className="darkblue form-section">
        <div id="share-bar"></div>
        <div className="container">
            <div className="d-flex space-around items-centre">
                <div className="form-text" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="welcome-heading">
                        <h4>welcome</h4>
                    </div>
                    <div className="form-description" >
                        <h3>Login To Buy<br />
                            And Sell Crypto<br />
                            Easily</h3>
                    </div>
                </div>
                <div className="main-form top-border-form" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="form-blue-box blue-box" >
                        <h2>LOGIN</h2>
                        {/* <form id="loginForm" className="form login-form" >
                            <label>Email Address</label><br />
                            <input type="text" name="loginemail" /><br />
                        
                            <label>Password</label><br />
                            <input type="password" name="loginpwd" /><br />

                            <div className="forgot-password relative">
                                <Link to="/forgotpassword">Forgot password?</Link>
                            </div>
                            <p id="logmsg">  </p>
                            <button className="button">Login</button>
                        
                            <p>Don't have an account? <Link to="/register"> Sign Up</Link></p>
                        </form> */}
                        <Form>
                            <Form.Group id="loginForm" className="form login-form" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"  />
                                
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"/>
                            <div className="forgot-password relative">
                                <Link to="/forgotpassword">Forgot password?</Link>
                            </div>
                            <Button variant="primary" type="submit"  className="button">
                                Login
                            </Button>
                            <Form.Text>Don't have an account? <Link to="/register"> Sign Up</Link></Form.Text>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
          </div>
        </div>
    </section>
    )

}

export default Login