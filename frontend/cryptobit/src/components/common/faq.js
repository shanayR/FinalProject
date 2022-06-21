import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Faq(){
        

    return(
        <section id="faq-section" className="navyblue section-padding">
            <div className="container">
                <div className="faq-title">
                    <h3>These are the questions our customers ask most frequently!</h3>
                </div>
                <div id="accordion" className="accordion">
                    <h3 className="darkblue"><Link to="#"> <span><i className="fal fa-angle-down"></i></span> What is actually
                            cryptocurrency?</Link></h3>
                    <div className="faq-paragraph">
                        <p>
                            Cryptocurrencies should not be seen as a currency. The name cryptocurrency is a misnomer.
                            They do not serve as an alternative to the Rupee or other fiat currency. They really are an
                            asset/software that is used to write on the blockchain and for incentivising the nodes – if
                            at all they serve as an instrument for payments, this use case is limited to within the
                            blockchain
                            ecosystem to incentivise the nodes.
                        </p>
                    </div>
                    <h3 className="light-background"><Link to="#"> <span><i className="fal fa-angle-down"></i></span>Who are the
                            users?</Link></h3>
                    <div className="faq-paragraph">
                        <p>
                            The users are individuals or companies that submit transactions into the blockchain network
                            to be validated
                            and processed. The banking equivalent would be you logging in to your banking account and
                            submitting a
                            transaction to send money to another account.
                        </p>
                    </div>
                    <h3 className="darkblue"><Link to="#"> <span><i className="fal fa-angle-down"></i></span>Will cryptocurrency
                            be widely accepted?</Link></h3>
                    <div className="faq-paragraph">
                        <p>
                            Cryptocurrency has bloomed since 2009. Some commercial banks, including some investment
                            banks, introduce
                            their own cryptocurrencies for the purposes of settlements and transactions with certain
                            financial institutions and corporations. At the moment, Central banking is not interested
                            in cryptocurrencies, but this may change in the future.
                        </p>
                    </div>
                    <h3 className="light-background"><Link to="#"> <span><i className="fal fa-angle-down"></i></span>What are the
                            government's concerns around use of cryptocurrency?</Link></h3>
                    <div className="faq-paragraph">
                        <p>
                            The government is concerned about: </p>
                            <ul>
                                <li>The use of cryptocurrencies for illicit activities.</li>
                                <li>Tax evasion.</li>
                                <li>Money laundering.</li>
                                <li>Loss of control over monetary policy and flight of capital overseas.</li>
                            </ul>
                        
                    </div>
                    <h3 className="darkblue"><Link to="#"> <span><i className="fal fa-angle-down"></i></span>Are the government's
                            concerns valid?</Link></h3>
                    <div className="faq-paragraph">
                        <p>
                            Yes. However, all new technologies pose risks. There were concerns around the
                            use of the printing press (jobs), automobiles and aeroplanes (safety), internet
                            (surveillance-free communication) as well, as with many new technologies such as
                            artificial intelligence, drones and robotics. A ban is usually not a good answer
                            to regulating new technologies.
                        </p>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Faq