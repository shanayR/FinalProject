import React from "react";
import Faq from "../common/faq";
import ExpressForm from "./express-form";
import ExpressBanner from "./expressBanner";

function Express(){
    return(
        <>
            <ExpressBanner/>
            <ExpressForm/>
            <Faq/>
        </>
    )
}
export default Express