import React from 'react';

function VisaPerks(){
    return(
        <section id="visacard-section-2" className="darkblue section-padding">
            <div className="container">
                <div className="visacard-perks" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <h3> card benefits and perks</h3>
                </div>
                <div className="d-flex space-between items-centre">
                    <div className="visacard-image" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                        <img src={process.env.PUBLIC_URL +"/images/visacard.png"} alt="visacard" className="hundred" />
                    </div>


                    <div className="benefits d-flex">
                        <div className="text-padding d-flex flex-column col-sm-6" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                            <div className="visacard-benefits-image">
                                <img src={process.env.PUBLIC_URL +"/images/logo.png"} alt="logo"/>
                            </div>
                            <div className="visacard-benefits-heading">
                                <h3>Zero Fees</h3>
                            </div>
                            <div className="visacard-benefits-text">
                                <p>Your Binance Visa Card is completely free! Binance will 
                                    not charge any administrative or processing fees*.</p>
                            </div>

                            <div className="visacard-benefits-image">
                                <img src={process.env.PUBLIC_URL +"/images/logo.png"} alt="logo"/>
                            </div>
                            <div className="visacard-benefits-heading">
                                <h3>Hold crypto and exchange only when you need to</h3>
                            </div>
                            <div className="visacard-benefits-text">
                                <p>Hold crypto in your Binance Card wallet and exchange 
                                    only when you're making payments.</p>
                            </div>
                        </div>

                        <div className="text-padding d-flex flex-column col-sm-6" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                            <div className="visacard-benefits-image">
                                <img src={process.env.PUBLIC_URL +"/images/logo.png"} alt="logo"/>
                            </div>
                            <div className="visacard-benefits-heading">
                                <h3>Up to 8% cashback on your purchases</h3>
                            </div>
                            <div className="visacard-benefits-text">
                                <p>Get up to 8% cashback on all eligible purchases 
                                    made with your Binance Visa Card!</p>
                            </div>

                            <div className="visacard-benefits-image">
                                <img src={process.env.PUBLIC_URL +"/images/logo.png"} alt="logo"/>
                            </div>
                            <div className="visacard-benefits-heading">
                                <h3>Your funds are SAFU</h3>
                            </div>
                            <div className="visacard-benefits-text">
                                <p>All your Binance Card funds are protected by the highest security standards available at Binance. 
                                    Sleep tight, we've got you covered.</p>
                            </div>
                        </div>
                    </div>
                </div>
               


            </div>

        </section>
    )
}

export default VisaPerks