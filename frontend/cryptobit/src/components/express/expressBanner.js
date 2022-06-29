import React from "react";
import SocialShare from "../common/social-share";

function ExpressBanner(){
    return(
        <section id="express-section-1" className="section-padding firstsectionpadding darkblue">
        <SocialShare />
        <div className="express-banner navyblue margin-bottom50">
            <div className="container">
                <div className="express-heading-1" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="2000">
                    <h2>cryptobit express: buy your crypto locally</h2>
                </div>
                <div className="express-heading-2" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="2100">
                    <h4>Trade with Zero Fee</h4>
                </div>

            </div> 
        </div>
        </section>
    )
}
export default ExpressBanner