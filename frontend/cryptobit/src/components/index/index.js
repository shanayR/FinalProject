import React from "React";
import Subscribe from "./subcribe";
import News from "./news";
import Visa from "./visa";
import Banner from "./banner";
import About from "./about";
import Coins from "./coins";
import Tokens from "./tokens";
import Loader from "../loader/loader";

function Index(){
    return(
    <>
        <Loader />
        <Banner />
        <Coins />
        <Tokens />
        <About />
        <Visa />
        <News />
        <Subscribe />
    </>
    )
}

export default Index