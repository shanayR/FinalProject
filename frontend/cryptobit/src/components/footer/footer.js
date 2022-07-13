import React from "react"
import {Link} from "react-router-dom"

function Footer(){
    return(
        <footer className="footerblue hundred">
            <div className="container">
                <div className="d-flex space-between items-centre">
                    <div className="footer-items">
                        <p>Copyright <i className="fal fa-copyright"></i> 2021 <Link to="#">www.cryptobit.com</Link>. All rights reserved.</p>
                    </div>

                    <nav className="footer-navigation">
                        <div className="footer-items">
                            <ul>
                                <li><Link to="#">Terms and Conditions</Link></li>
                                <li><Link to="#"> Return Policy  </Link></li>
                                <li><Link to="#"> Careers</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    </footer>   
    )
}

export default Footer