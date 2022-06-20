import React from 'react'

function MarketRates(){
    return(
        <div>
                    <div class="row d-flex space-between hundred items-centre" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                        <div class="currency-name d-flex items-centre col-sm-2">
                            <h4 class="padding-right10">Bitcoin &nbsp; &nbsp;</h4> <p class="blue-text fontsize20">BTC</p>
                        </div>

                        <div class="price col-sm-2 d-flex">
                            <p class="fontsize20 white-smoke-text">$40,249.80 &nbsp; </p>
                            <p class="red-text fontsize10">-0.77%</p>
                        </div>
                        
                        <div class="col-sm-2">
                            <p class="fontsize20 white-smoke-text">$753,636,634,658.38</p>
                        </div>
                        <div class="sparkline-img ">
                            <img src={process.env.PUBLIC_URL+"/images/sparkline2.png"} alt="sparkline" class="hundred"/>
                        </div>
                        <div class="trade-button">
                            <div class="button">
                                <a href="express.html">Trade</a>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex space-between hundred items-centre" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                        <div class="currency-name d-flex items-centre col-sm-2">
                            <h4 class="padding-right10">Ethereum &nbsp; &nbsp;</h4> <p class="blue-text fontsize20">ETH</p>
                        </div>
                        <div class="price col-sm-2 d-flex">
                            <p class="fontsize20 white-smoke-text">$2,588.29 &nbsp; </p>
                            <p class="green-text fontsize10">+2.03%</p>
                        </div>
                        
                        <div class="col-sm-2">
                            <p class="fontsize20 white-smoke-text">$299,825,353,678.62</p>
                        </div>
                        <div class="sparkline-img ">
                            <img src={process.env.PUBLIC_URL + "/images/sparkline.png"} alt="sparkline" class="hundred"/>
                        </div>
                        <div class="trade-button">
                            <div class="button">
                                <a href="express.html">Trade</a>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default MarketRates