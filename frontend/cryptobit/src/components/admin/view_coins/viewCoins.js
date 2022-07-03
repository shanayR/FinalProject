import React from "react";

function ViewCoin(){
    return(
        <div>
        <div>
        <div class="row d-flex space-between hundred items-centre" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
            <div class="currency-name d-flex items-centre col-sm-2">
                <h4 class="padding-right10">mdlcmf &nbsp; &nbsp;</h4> <p class="blue-text fontsize20">mcklmc</p>
            </div>
            <div class="price col-sm-2 d-flex">
                <p class="fontsize20 white-smoke-text">&#36; huih &nbsp; </p>
            </div>
            {/* <div class="sparkline-img ">
            <img src="" alt="sparkline" class="hundred" />
            </div> */}
            <div class="trade-button">
                <div class="button">
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default ViewCoin