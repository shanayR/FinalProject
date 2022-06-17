import React from "react";

function Subscribe(){
    <section id="home-section-7" className="section-padding hundred navyblue">
    <div className="container">
        <div className="d-flex">
            <h2 className="fontsize40 fontweight400 margin-bottom80 white-text" data-aos="fade-up" data-aos-duration="1000">Send us amessage!</h2>
        </div>

            <form id="subscribe" method="post" action="{% url 'subscribe_submit'
                %}" data-aos="fade-up" data-aos-duration="1000"data-aos-delay="100">
                <div className="dflex center space-around width100 flex-column subscribe-form">

                    <input type="text" name="subscribeName" placeholder="Your Name" className="darkblue margin-bottom26 capitalize" />
                    <input type="number" name="subscribeNumber"placeholder="Phone Number" className="darkbluemargin-bottom26" />
                    <input type="email" name="subscribeEmail" placeholder="Email Address" className="darkblue margin-bottom26" />
                    <textarea name="subscribeMessage" placeholder="Type Your Message Here" className="darkblue margin-bottom capitalize"></textarea>
                </div>
                <input type="submit" value="SEND MESSAGE" className="button" />
            </form>
    </div>
</section>
}

export default Subscribe