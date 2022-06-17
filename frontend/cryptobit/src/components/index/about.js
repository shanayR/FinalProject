import React from "react";

function About(){
    return(
        <section id="home-section-4" className="section-padding hundred darkblue">
        <div className="container">
            <div className="d-flex">
                <div className="about-us col-sm-6">
                    <h2 className="fontsize40 margin-bottom26 fontweight400
                        white-text" data-aos="fade-up" data-aos-duration="2000">About
                        The Project</h2>
                    <p className="margin-bottom26" data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="100">Crypto Bit
                        is a lending and investment, multicurrency and
                        multifunctional online platform based on blockchain
                        technology. There investors and borrowers meet each
                        other and have the opportunity to lend money on mutually
                        beneficial.</p>
                    <p className="margin-bottom26" data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="200">Crypto Bit
                        is a unique service that allows individuals to access
                        loans from the comfort of their home in fiat currencies
                        or crypto-currencies.</p>
                    <p className="margin-bottom26" data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="300">Crypto Bit
                        is a multi-functional platform which allows each
                        participant to keep money in a multi-currency online
                        wallet, buy and sell currency on the exchange, invest
                        money, get a loan in a convenient currency.</p>
                    <div className="buttons d-flex items-center flex-start">
                        <div className="button">
                            <a href="register">REGISTER NOW</a>
                        </div>
                        <div className="button">
                            <a href="coinDisplay"> BUY CRYPTO NOW</a>
                        </div>
                    </div>


                </div>
                <div className="about-us-img col-sm-6">
                    <img src="public/images/about.png" alt="about us" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default About