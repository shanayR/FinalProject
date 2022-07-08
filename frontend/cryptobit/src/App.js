import {  BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/header/header';
import Loader from './components/loader/loader';
import Home from './components/index/home';
import Market from './components/market/market';
import Footer from './components/footer/footer';
import VisaCard from "./components/visacard/visacard";
import Express from "./components/express/express";
import Login from "./components/login/login";
import Forgot from "./components/forgotpassword/forgot_password";
import Register from "./components/register/register";
import Receipt from "./components/receipt/receipt";
import SubscribeUser from "./components/subscribe_user/subscribe_user";
import Thankyou from "./components/thank_you/thank_you";
import Add from "./components/admin/add_admin";
import UpdateCoin from "./components/admin/update_coin";
import View from "./components/admin/view_coins/view";
import { useEffect } from "react";
import AOS from "aos";
import CoinDisplay from "./components/coinDisplay/coinDisplay";

function App() {
  
  useEffect(()=>{
    AOS.init({
      // initialise with other settings
      once: true,
      // duration : 2000
    });

},[])
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Loader /> */}
        <Header />
        <Routes>
          <Route path="/"element={<Home />}></Route>
          <Route path="/market" element={<Market/>}></Route>
          <Route path="/visacard" element={<VisaCard/>}></Route>
          {/* <Route path="/express" element={<Express/>}></Route> */}
          <Route path="/coindisplay" element={<CoinDisplay/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/forgotpassword" element={<Forgot/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/receipt" element={<Receipt/>}></Route>
          <Route path="/subscribe" element={<SubscribeUser/>}></Route>
          <Route path="/thankyou" element={<Thankyou/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/update/:id" element={<UpdateCoin/>}></Route>
          <Route path="/view" element={<View/>}></Route>
          
        </Routes>
        <Footer />
      </BrowserRouter>
      

    </div>
  );
}

export default App;
