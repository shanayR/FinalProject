import React from "react";
import CoinDisplay from "./testapi";

function Coins(){
    return(
        <section id="home-section-2" className="section-padding hundred darkblue">
            <div className="container">
                <div className="d-flex center items-centre wrap">

                    <div className="bitcoin-rate details relative blue-box"data-aos="fade-up" data-aos-easing="linear"data-aos-duration="1000">
                        <div className="d-flex space-around items-centre heading">
                            <img src={process.env.PUBLIC_URL + "/images/logo_bitcoin.png"} alt="bitcoin" />
                            <h3 className="white-text">
                            Bitcoin
                            </h3>
                        </div>
                        <div className="button-btc d-flex center button details-button">
                            <a href="coindetail"> MORE DETAILS</a>
                        </div>

                    </div>
                    <div className="bitcoin-rate details relative blue-box"data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                        <div className="d-flex space-around items-centre heading">
                            <img src={process.env.PUBLIC_URL + "/images/logo-eth.png"} alt="bitcoin" />
                            <h3 className="white-text">
                            Ethereum

                            </h3>
                        </div>
                        <div className="button-btc d-flex center button details-button">
                            <a href="coindetail"> MORE DETAILS</a>
                        </div>
                    </div>

                </div>
                <div className="d-flex center">
                    <a href="coinDisplay" className="all-button button">ALL COINS</a>
                </div>
                <CoinDisplay/>
            </div>

    </section>
    )
}

export default Coins