import React from "react"

function Footer(){
    return(
        <footer className="footerblue hundred">
            <div className="container">
                <div className="d-flex space-between items-centre">
                    <div className="footer-items">
                        <p>Copyright <i class="fal fa-copyright"></i> 2021 <a href="index.html">www.cryptobit.com</a>. All rights reserved.</p>
                    </div>

                    <nav className="footer-navigation">
                        <div className="footer-items">
                            <ul>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#"> Return Policy  </a></li>
                                <li><a href="#"> Careers</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    </footer>   
    )
}

export default Footer