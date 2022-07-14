import React from "react";
// import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


function Faq(){
    // useEffect(()=>{
    //     document.getElementById("accordion").accordion({
    //         collapsible: true,
    //         icon: true,
    //         active: false
    //     });
        
    // })

    
    return(
        
        <section id="faq-section" className="navyblue section-padding">
            <div className="container">
                <div className="faq-title">
                    <h3>These are the questions our customers ask most frequently!</h3>
                </div>
                <Accordion id="accordion" className="accordion">
                    <AccordionItem>
                        <AccordionItemHeading className="darkblue"> 
                        
                        <AccordionItemButton> <i class="fal fa-angle-down"></i>What is actually
                                cryptocurrency? </AccordionItemButton></AccordionItemHeading>
                        <AccordionItemPanel className="faq-paragraph">
                            <p>
                                Cryptocurrencies should not be seen as a currency. The name cryptocurrency is a misnomer.
                                They do not serve as an alternative to the Rupee or other fiat currency. They really are an
                                asset/software that is used to write on the blockchain and for incentivising the nodes – if
                                at all they serve as an instrument for payments, this use case is limited to within the
                                ecosystem to incentivise the nodes.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                    <AccordionItemHeading className="light-background"><AccordionItemButton><span><i className="fal fa-angle-down"></i></span>Who are the
                            users?</AccordionItemButton></AccordionItemHeading>
                    <AccordionItemPanel className="faq-paragraph">
                        <p>
                            The users are individuals or companies that submit transactions into the blockchain network
                            to be validated
                            and processed. The banking equivalent would be you logging in to your banking account and
                            submitting a
                            transaction to send money to another account.
                        </p>
                    </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>

                    <AccordionItemHeading className="darkblue"><AccordionItemButton><span><i className="fal fa-angle-down"></i></span>Will cryptocurrency
                            be widely accepted?</AccordionItemButton></AccordionItemHeading>
                    <AccordionItemPanel className="faq-paragraph">
                        <p>
                            Cryptocurrency has bloomed since 2009. Some commercial banks, including some investment
                            banks, introduce
                            their own cryptocurrencies for the purposes of settlements and transactions with certain
                            financial institutions and corporations. At the moment, Central banking is not interested
                            in cryptocurrencies, but this may change in the future.
                        </p>
                    </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                    <AccordionItemHeading className="light-background"><AccordionItemButton><span><i className="fal fa-angle-down"></i></span> What are the
                            government's concerns around use of cryptocurrency?</AccordionItemButton></AccordionItemHeading>
                    <AccordionItemPanel className="faq-paragraph">
                        <p>
                            The government is concerned about: </p>
                            <ul>
                                <li>The use of cryptocurrencies for illicit activities.</li>
                                <li>Tax evasion.</li>
                                <li>Money laundering.</li>
                                <li>Loss of control over monetary policy and flight of capital overseas.</li>
                            </ul>
                        
                    </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>

                    <AccordionItemHeading className="darkblue"><AccordionItemButton> <span><i className="fal fa-angle-down"></i></span> Are the government's
                            concerns valid?</AccordionItemButton></AccordionItemHeading>
                    <AccordionItemPanel className="faq-paragraph">
                        <p>
                            Yes. However, all new technologies pose risks. There were concerns around the
                            use of the printing press (jobs), automobiles and aeroplanes (safety), internet
                            (surveillance-free communication) as well, as with many new technologies such as
                            artificial intelligence, drones and robotics. A ban is usually not a good answer
                            to regulating new technologies.
                        </p>
                    </AccordionItemPanel>
                    </AccordionItem>

                </Accordion>
            </div>
    </section>
    )
}

export default Faq