import React, {useEffect, useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function CoinDisplayHome() {
    const [coins, getCoins] = useState();
  
    const coindisplayhome = () =>{
      axios.get(`${process.env.REACT_APP_SERVER_PATH}view/`)
      .then(function (response){
       
        getCoins(response.data)
      })
      .catch((error) =>{
        console.log(error);
      })
      .then(() =>{console.log("Executed")})
    }
    useEffect(()=>{
        coindisplayhome()
    },[]);
  
      return (
       
        <section id="home-section-2" className="section-padding hundred darkblue">
          <div className="container">
            <div className="d-flex center items-centre wrap">
       {coins && coins.slice(0, 2).map((data,key)=>{
        return(

              <div className="bitcoin-rate details relative blue-box"data-aos="fade-up" data-aos-easing="linear"data-aos-duration="1000">
                <div className="d-flex space-around items-centre heading">
                  <img src={process.env.PUBLIC_URL + "/images/logo_bitcoin.png"} alt="bitcoin" />
                  <h3 className="white-text">{data.name }</h3>
                </div>
                <div className="button-btc d-flex center button-buy-2 details-button">
                    <Link to={`/coindetail/${data._id}`}>MORE DETAILS</Link>
                </div>

              </div>


)
})}
            </div>
            <div className="d-flex center">
                <Link to="/coindisplay" className="all-button button">ALL COINS</Link>
            </div>
            
          </div>     

        </section>
      );
    }
    
export default CoinDisplayHome;
