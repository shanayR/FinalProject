import React from "react";

function Add(){
    return(
        <section  id="home-section-7" className="section-padding hundred navyblue">
            <div className="container">
            <div class="d-flex add-heading ">
                <h2 class="add-heading fontsize40 fontweight400 margin-bottom80 white-text"
                    data-aos="fade-up" data-aos-duration="1000">Add coins</h2>
            </div>
            <div className="form-sec">
            <form action="add" method="post" enctype="multipart/form-data" id="subscribe" data-aos="fade-up" data-aos-duration="1000"data-aos-delay="100">
                <div className="dflex center space-around width100 flex-column subscribe-form">
                    {/* <label className="white-text">Coin Name:</label>  */}
                    <input type="text" name="name" className="darkblue margin-bottom26 capitalize" placeholder="Name" /><br />
                    {/* <label className="white-text">Coin Price: $</label> */}
                    <input type="number" step="0.01" name="price"  className="darkblue margin-bottom26 capitalize" placeholder="Price"/><br />
                    {/* <label className="white-text">Coin Logo: </label> */}
                    <input type="file" name="coinLogo"  className="darkblue margin-bottom26 capitalize" placeholder="Coin Logo"/><br />
                    <input type="submit" className="button" />
                </div>
            </form>
            </div>
            </div>
        </section>
    )
}

export default Add