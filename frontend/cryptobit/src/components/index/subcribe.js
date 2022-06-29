import React from "react";

function Subscribe(){
    <section id="home-section-7" class="section-padding hundred navyblue">
    <div class="container">
        <div class="d-flex">
            <h2 class="fontsize40 fontweight400 margin-bottom80 white-text"
                data-aos="fade-up" data-aos-duration="1000">Send us a
                message!</h2>
        </div>

            <form id="subscribe" method="post" action="" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="100">
                <div class="dflex center space-around width100 flex-column
                    subscribe-form">

                    <input type="text" name="subscribeName" placeholder="Your Name" class="darkblue margin-bottom26 capitalize" />
                    <input type="number" name="subscribeNumber"
                        placeholder="Phone Number" class="darkblue
                        margin-bottom26" />
                    <input type="email" name="subscribeEmail" placeholder="Email Address" class="darkblue margin-bottom26" />
                    <textarea name="subscribeMessage" placeholder="Type Your Message Here" class="darkblue margin-bottom26
                        capitalize"></textarea>
                </div>
                <input type="submit" value="SEND MESSAGE" class="button" />
            </form>
    </div>
</section>

}

export default Subscribe