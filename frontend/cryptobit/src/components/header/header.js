import React from "react";
import {Link} from "react-router-dom";


function Header() {
    return (

    <header className="fixed hundred darkblue">
        <div className="container">
            <div className="d-flex space-between items-centre">
                <div className=" d-flex items-centre">
                    <Link to="/"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" className="logo" /></Link>
                    <h1 className="white-text">CryptoBit</h1>
                </div>
                <div>
                    <nav className="main-navigation">
                        <ul className="d-flex space-around ">
                            <li><Link to="/">Home</Link> </li>
                            <li className="drop-down"><Link to="/trade">Trade</Link> </li>
                            <li><Link to="/market"> Market</Link></li>
                            
                            <li><Link to="/visacard">Visa Card</Link></li>
                            <li className="nav-login-button"><Link to="/login" id="signinbut"> SIGN IN</Link></li> 
                        </ul>
                    </nav>  
                </div>
            </div>
        </div>

    </header>
    )
}

export default Header