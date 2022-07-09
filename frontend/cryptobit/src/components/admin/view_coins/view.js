import React from "react";
import SocialShare from "../../common/social-share";
import ViewCoin from "./viewCoins";
import { Link } from "react-router-dom";

function View(){
    return(
        <section id="market-section-1" className="hundred section-padding darkblue">
            <SocialShare />
            <div className="container">
            <h2 className="white-text fontsize40 heading-view">Coins</h2>
            <div className="button-add">
                <Link to="/add">Add</Link>
            </div>
                <ViewCoin />
            </div>
        </section>
    )
}

export default View