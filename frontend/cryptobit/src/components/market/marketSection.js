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
               

            </div>
        </section>
    )
}

export default MarketSection