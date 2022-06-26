import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Countdown from "../common/countdown";
import bgAnimation from "./bgAnimation";
// import share from "jquery-social-share-bar";
import $ from "jquery"
import SocialShare from "../common/social-share";

function Banner(){
    useEffect(
        ()=>{

            bgAnimation();
            // document.getElementById("share-bar").share()
            // $("#share-bar").share();
        }
    )
    
    return(
        <section className="home-banner section-padding hundred relative d-flex"id="home-section-1">
                {/* <div id="share-bar"></div> */}
                <SocialShare />
                <canvas id="stars" className="absolute"></canvas>
                <div className="container relative">
                    <div className="two-col d-flex">
                    <div className="col col1">


                        <div className="heading" data-aos="fade-right"data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="2000">
                            <h2>Crypto Bit-Lending & Investmensts Platform</h2>
                        </div>
                        <div className="buttons d-flex items-center flex-start"data-aos="fade-up"data-aos-duration="1500" data-aos-delay="2500">
                            <div className="button-buy">
                                <Link to="register">REGISTER NOW</Link>
                            </div>
                            <div className="button-buy">
                                <Link to="coinDisplay"> BUY CRYPTO NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col2">
                        <Countdown/>
                        {/* <div className="countdown d-flex"id="countdown"
                            data-aos="fade-left" data-aos-easing="linear"
                            data-aos-duration="1500" data-aos-delay="2000">
                            <div>
                                <div className="days count-down d-flex center
                                    items-centre"></div>
                                <div className="text-center">Days</div>
                            </div>
                            <div>
                                <div className="hours count-down d-flex center
                                    items-centre"></div>
                                <div className="text-center">Hours</div>
                            </div>
                            <div>
                                <div className="minutes count-down d-flex center
                                    items-centre"></div>
                                <div className="text-center">Minutes</div>
                            </div>
                            <div>
                                <div className="seconds count-down d-flex center
                                    items-centre"></div>
                                <div className="text-center">Seconds</div>
                            </div>



                        </div> */}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner