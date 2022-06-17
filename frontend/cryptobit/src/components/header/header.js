import React from "react";

function Header() {
    return (

     
    <div className="fixed hundred darkblue">
        <div className="container">
            <div className="d-flex space-between items-centre">
                <div className=" d-flex items-centre">
                    <a href="index.html"><img src="assets/images/logo.png" alt="logo" class="logo" /></a>
                    <h1 class="white-text">CryptoBit</h1>
                </div>
                <div>
                    <nav className="main-navigation">
                        <ul className="d-flex space-around ">
                            <li><a href="index.html">Home</a> </li>
                            <li className="drop-down"><a href="pages/express.html">Trade</a> </li>
                            <li><a href="pages/market.html"> Market</a></li>
                            
                            <li><a href="pages/visacard.html">Visa Card</a></li>
                            <li className="nav-login-button"><a href="pages/login.html" id="signinbut"> SIGN IN</a></li> 
                        </ul>
                    </nav>  
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header