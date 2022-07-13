import React from "react";
import SocialShare from "../common/social-share";
import MarketRates from "./marketRates";

function MarketSection(){
    return(
        <section id="market-section-1" className="hundred section-padding darkblue">
            <SocialShare />
            <div className="container">
                <div className="text-center margin-bottom80">
                    <p className="blue-text fontweight700 margin-bottom26" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2100" >SECURELY BUY, SELL and STORE</p>
                    <h2 className="margin-bottom26 white-text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000"> The World's Fastest Growing Crypto Currencies</h2>
                    <p className="paddingsides150 fontsize20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2100">Buy and sell 100+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</p>
                </div>

                {/* <div className=" margin-bottom50 navyblue col-sm-2 d-flex flex-column center items-centre border-radius10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay=""> 
                    <p className="white-smoke-text">
                        In the past 24 hours  
                    </p>
                    <p className="white-smoke-text">
                        Market is up <span className="green-text">6.66%</span>
                    </p>
                </div> */}

                <MarketRates/>
                {/* <div>
                    <div className="row d-flex space-between hundred items-centre" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                        <div className="currency-name d-flex items-centre col-sm-2">
                            <h4 className="padding-right10">Bitcoin &nbsp; &nbsp;</h4> <p className="blue-text fontsize20">BTC</p>
                        </div>

                        <div className="price col-sm-2 d-flex">
                            <p className="fontsize20 white-smoke-text">$40,249.80 &nbsp; </p>
                            <p className="red-text fontsize10">-0.77%</p>
                        </div>
                        
                        <div className="col-sm-2">
                            <p className="fontsize20 white-smoke-text">$753,636,634,658.38</p>
                        </div>
                        <div className="sparkline-img ">
                            <img src={process.env.PUBLIC_URL+"/images/sparkline2.png"} alt="sparkline" className="hundred"/>
                        </div>
                        <div className="trade-button">
                            <div className="button">
                                <a href="express.html">Trade</a>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex space-between hundred items-centre" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                        <div className="currency-name d-flex items-centre col-sm-2">
                            <h4 className="padding-right10">Ethereum &nbsp; &nbsp;</h4> <p className="blue-text fontsize20">ETH</p>
                        </div>
                        <div className="price col-sm-2 d-flex">
                            <p className="fontsize20 white-smoke-text">$2,588.29 &nbsp; </p>
                            <p className="green-text fontsize10">+2.03%</p>
                        </div>
                        
                        <div className="col-sm-2">
                            <p className="fontsize20 white-smoke-text">$299,825,353,678.62</p>
                        </div>
                        <div className="sparkline-img ">
                            <img src={process.env.PUBLIC_URL + "/images/sparkline.png"} alt="sparkline" className="hundred"/>
                        </div>
                        <div className="trade-button">
                            <div className="button">
                                <a href="express.html">Trade</a>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default MarketSection