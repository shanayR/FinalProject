import React from "react";
import SocialShare from "../../common/social-share";
import ViewCoin from "./viewCoins";
import ViewBanner from "./view_banner";

function View(){
    return(
        <section id="market-section-1" class="hundred section-padding darkblue">
            <SocialShare />
            <div class="container">
                <ViewBanner />
                <ViewCoin />
            </div>
        </section>
    )
}

export default View