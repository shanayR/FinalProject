import React from "react"
import Subscribe from "./subcribe";
import News from "./news";
import Visa from "./visa";
import Banner from "./banner";
import About from "./about";
import CoinDisplayHome from "./coins";
import Tokens from "./tokens";
import Form from "./form/form";
// import Loader from "../loader/loader";

function Home(){
    return(
    <>
        <Banner />
        <CoinDisplayHome />
        <Tokens />
        <About />
        <Visa />
        <News />
        <Subscribe />
        <Form />
    </>
    )
}

export default Home