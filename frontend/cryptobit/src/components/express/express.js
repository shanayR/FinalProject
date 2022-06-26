import React from "react";
import Faq from "../common/faq";
import ExpressForm from "./express-form";
import ExpressBanner from "./expressBanner";
import SocialShare from "../common/social-share";

function Express(){
    return(
        <>
            <ExpressBanner/>
            <SocialShare />
            <ExpressForm/>
            <Faq/>
        </>
    )
}
export default Express