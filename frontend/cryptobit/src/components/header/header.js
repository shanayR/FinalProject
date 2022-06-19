import React from "react";


function Header() {
    return (

    <header className="fixed hundred darkblue">
        <div className="container">
            <div className="d-flex space-between items-centre">
                <div className=" d-flex items-centre">
                    <a href="/"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" class="logo" /></a>
                    <h1 class="white-text">CryptoBit</h1>
                </div>
                <div>
                    <nav className="main-navigation">
                        <ul className="d-flex space-around ">
                            <li><a href="/">Home</a> </li>
                            <li className="drop-down"><a href="/trade">Trade</a> </li>
                            <li><a href="/market"> Market</a></li>
                            
                            <li><a href="/visacard">Visa Card</a></li>
                            <li className="nav-login-button"><a href="/login" id="signinbut"> SIGN IN</a></li> 
                        </ul>
                    </nav>  
                </div>
            </div>
        </div>

    </header>
    )
}

export default Header