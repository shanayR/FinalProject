import {  BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/header/header';
import Loader from './components/loader/loader';
import Index from './components/index/index';
import Market from './components/market/market';
import Footer from './components/footer/footer';
import VisaCard from "./components/visacard/visacard";
import Express from "./components/express/express";
import Login from "./components/login/login";
import Forgot from "./components/forgotpassword/forgot_password";
import Register from "./components/register/register";
import { useEffect } from "react";
import AOS from "aos";

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
          <Route path="/"element={<Index />}></Route>
          <Route path="/market" element={<Market/>}></Route>
          <Route path="/visacard" element={<VisaCard/>}></Route>
          <Route path="/express" element={<Express/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/forgotpassword" element={<Forgot/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      

    </div>
  );
}

export default App;
