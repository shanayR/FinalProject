import React from 'react';

function ExpressForm(){
    return(
        <div className="buy-form">
        <div id="tabs" className="blue-box tab-box " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="">
            <ul className="tab-list d-flex center items-start">
                <li><a href="#tabs-1" className="active">ETH</a></li>
                <li><a href="#tabs-2" >BTC</a></li>
            </ul>
            <div id="tabs-1">
            
                <form id="ebuy" className="d-flex center flex-column items-start">
                    <label>I want to buy</label>
                    <input type="number" placeholder="How many coins would you like?" name="pay" id="eb" />

                    
                    <p>You will use $ <span id="edol"> </span> of your balance.</p>

                    <input type="submit" value="Buy with 0 Fee" className="button hundred" name="ebuy" />
                </form>

            
                <form id="esell" className="d-flex center flex-column items-start" >
                    <label>I want to sell</label>
                    <input type="number" placeholder="How many coins are you selling?" name="pay" id="es" />

                
                    <p>You will get $ <span id="esdol"> </span> in your balance.</p>
                    <input type="submit" value="Sell with 0 Fee" className="button hundred" name="esell" />
                </form>

            </div>

            <div id="tabs-2">
            
            
                <form id="bbuy" className="d-flex center flex-column items-start">
                    <label>I want to buy</label>
                    <input type="number" placeholder="How many coins would you like?" name="pay" id="bb" />
        
                    
                        <p>You will use $ <span id = "bdol"> </span> of your balance.</p>
            
                    <input type="submit" value="Buy with 0 Fee" classNameName="button hundred" name="ebuy" />
                </form>
                <form id="bsell" className="d-flex center flex-column items-start">
                    <label>I want to sell</label>
                    <input type="number" placeholder="How many coins are you selling?" name="pay" id="bs" />

            
                    <p>You will get $ <span id="bsdol"> </span> in your balance.</p>
                    <input type="submit" value="Sell with 0 Fee" className="button hundred" name="esell" />
                </form>
            </div>
        </div>
    </div>
    )
}

export default ExpressForm
