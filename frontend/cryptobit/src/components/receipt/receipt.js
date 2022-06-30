import React from "react";
import SocialShare from "../common/social-share";

function Receipt(){
    return(
    <section className="section-height section-padding hundred relative d-flex darkblue" id="register-section-1">
        <SocialShare />
        <div className="container">
            <div className="d-flex space-around items-centre">
                <h2 className="thankyou white-text aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="easi-in-out" data-aos-delay="2000">Transaction Successful</h2>
            <div className="receipt-aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="easi-in-out" data-aos-delay="2000">
                <h3 className="white-text margin-bottom26"> Transaction Summary</h3>
                <div>
                    <table>
                        <tr>
                            <td className="white-text">Coin Name:</td>
                            <td >Flow </td>

                        </tr>
                        <tr>
                            <td className="white-text">Quantity:</td>
                            <td>1 </td>
                        </tr>
                        <tr>
                            <td className="white-text">Price per coin:</td>
                            <td>$ 23.09 </td>
                        </tr>
                        <tr>
                            <td className="white-text">Total Amount:</td>
                            <td>$ 23.09 </td>
                        </tr>
                        <tr>
                            <td className="white-text">Full Name:</td>
                            <td>first last </td>
                        </tr> 
                        
                        <tr>
                            <td className="white-text">Email Address:</td>
                            <td>xyz@gmail.com </td>
                        </tr>
                        <tr>
                            <td className="white-text">Account Number: </td>
                            <td>1111111111111 </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Receipt