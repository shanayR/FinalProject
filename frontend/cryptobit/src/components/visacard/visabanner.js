import React from 'react';
import Countdown from '../common/countdown';

function VisaBanner(){
    return(
        <section className="section-padding firstsectionpadding hundred relative d-flex darkblue" id="visacard-section-1">
        <div className="container relative">
            <div className="two-col d-flex items-centre">
                <div className="visacard-text">
                    <h2 data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1500" data-aos-delay="2000">buy the
                        things you love with <span className="blue-color">CRYPTO</span></h2>
                    <div data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1500" data-aos-delay="2500">
                        <p>With the cryptoBit Visa Card, you can convert and
                            spend your favorite cryptocurrencies
                            at more than 60 million merchants worldwide. Just
                            transfer crypto from your spot wallet
                            to your card wallet, and you're ready to go. Spend
                            your crypto anytime, anywhere.</p>
                        <p>*Please refer to the <span className="blue-color">cryptoBit
                                Card FAQ</span> for the supported
                            cryptocurrencies</p>

                    </div>
                </div>
                <div className="col col2">
                    <Countdown/>
                </div>
            </div>

        </div>
    </section>
    )
}

export default VisaBanner