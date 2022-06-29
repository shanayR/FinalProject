import React from "react";

function Form(){
    return(
    //     <section  id="home-section-7" classNameName="section-padding hundred navyblue">
    //     <div classNameName="container">
    //     <div className="d-flex add-heading ">
    //         <h2 className="add-heading fontsize40 fontweight400 margin-bottom80 white-text"
    //             data-aos="fade-up" data-aos-duration="1000">Send Us A Message!</h2>
    //     </div>
    //     <div classNameName="form-sec">
    //     <form action="add" method="post" enctype="multipart/form-data" id="subscribe" data-aos="fade-up" data-aos-duration="1000"data-aos-delay="100">
    //         <div classNameName="dflex center space-around width100 flex-column subscribe-form">
    //             {/* <label classNameName="white-text">Coin Name:</label>  */}
    //             <input type="text" name="name" classNameName="darkblue margin-bottom26 capitalize" placeholder="Name" /><br />
    //             {/* <label classNameName="white-text">Coin Price: $</label> */}
    //             <input type="number" step="0.01" name="price"  classNameName="darkblue margin-bottom26 capitalize" placeholder="Price"/><br />
    //             {/* <label classNameName="white-text">Coin Logo: </label> */}
    //             <input type="file" name="coinLogo"  classNameName="darkblue margin-bottom26 capitalize" placeholder="Coin Logo"/><br />
    //             <input type="submit" value="SEND MESSAGE" classNameName="button" />
    //         </div>
    //     </form>
    //     </div>
    //     </div>
    // </section>
    <section id="home-section-7" className="section-padding hundred navyblue">
    <div className="container">
        <div className="d-flex">
            <h2 className="fontsize40 fontweight400 margin-bottom80 white-text"
                data-aos="fade-up" data-aos-duration="1000">Send us a
                message!</h2>
        </div>

            <form id="subscribe" method="post" action=""  enctype="multipart/form-data" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="100">
                <div className="dflex center space-around width100 flex-column
                    subscribe-form">

                    <input type="text" name="subscribeName" placeholder="Your Name" className="darkblue margin-bottom26 capitalize" />
                    <input type="number" name="subscribeNumber"
                        placeholder="Phone Number" className="darkblue
                        margin-bottom26 capitalize" />
                    <input type="email" name="subscribeEmail" placeholder="Email Address" className="darkblue margin-bottom26 capitalize" />
                    <textarea name="subscribeMessage" placeholder="Type Your Message Here" className="darkblue margin-bottom26 capitalize"></textarea>
                </div>
                <input type="submit" value="SEND MESSAGE" className="button" />
            </form>
    </div>
</section>
    )
}
export default Form