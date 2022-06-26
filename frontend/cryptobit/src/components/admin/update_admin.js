import React from "react";

function Update(){
    return(
        <section  id="home-section-7" className="section-padding hundred navyblue">
            <div className="container">
            <div class="d-flex add-heading ">
                <h2 class="add-heading fontsize40 fontweight400 margin-bottom80 white-text"
                    data-aos="fade-up" data-aos-duration="1000">Update</h2>
            </div>
            <div className="form-sec">
                <form action="/update/<%=coinData._id%>" method="POST">
                    <div className="dflex center space-around width100 flex-column subscribe-form">
                            {/* <label for="">Coin</label> */}
                            <input type="name" name="name" value="<%=coinData.name%>"  className="darkblue margin-bottom26 capitalize" placeholder="Coin Name"/>
                        
                            {/* <label for="">Price</label> */}
                            <input type="number" step="0.01" name="price" value="<%=coinData.price%>" className="darkblue margin-bottom26 capitalize" placeholder="Coin Price" />
            
                            {/* <label for="">Coin Logo</label> */}
                            <input type="file" name="coinLogo" className="darkblue margin-bottom26 capitalize" placeholder="Coin Logo" />
                        
                        
                            <input type="submit" value="Submit" className="button" />
                        
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Update