import React from "react";

function Visa(){
    return(
        <section id="home-section-5" className="hundred fullscreen-bg relative">
        <video playsinline autoplay muted loop class="bg-video absolute">
            <source src="public/images/visacard.mp4" type="video/mp4" />
        </video>
        <div className="visacard-home-section relative">
            <div className="container">
                <div className="heading-1" data-aos="fade-up" data-aos-duration="500">
                    <h3 className="white-text">CryptoBit VISA CARD</h3>
                </div>

                <div className="heading-2" data-aos="fade-up" data-aos-duration="500">
                    <h2 className="white-text">The only card you need</h2>
                </div>

                <div className="card-description" data-aos="fade-up" data-aos-duration="500">
                    <p>Enjoy up to 8% back on all spending with your sleek, pure
                        metal card.
                        No annual fees. Top-up with fiat or crypto.</p>
                </div>

                <div className="card-button d-flex space-around" data-aos="fade-up" data-aos-duration="500">
                    <a href="visacard">More About Card <i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Visa