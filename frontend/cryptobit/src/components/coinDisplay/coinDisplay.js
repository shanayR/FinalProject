import React, {useEffect, useState} from "react";
import axios from "axios"
import SocialShare from "../common/social-share";
import { Link } from "react-router-dom"
import dotenv from "dotenv/config"


function CoinDisplay() {
    const [coins, getCoins] = useState();
  
    const coindisplay = () =>{
      axios.get(`${process.env.SERVER_PATH}view/`)
      .then(function (response){
       
        getCoins(response.data)
      })
      .catch((error) =>{
        console.log(error);
      })
      .then(() =>{console.log("Executed")})
    }
    useEffect(()=>{
        coindisplay()
    },[]);
  
      return (
       
        <section id="coinDisplay" className="section-padding hundred darkblue ">
          <SocialShare />
          <div className="container">
            <div className="coindisplay d-flex center items-centre wrap flex-wrap">
       {coins && coins.map((data,key)=>{
        const coinImage = data.image
        return(

              <div className="bitcoin-rate details relative blue-box"data-aos="fade-up" data-aos-easing="linear"data-aos-duration="1000">
                <div className="d-flex space-around items-centre heading bitcoin-rate-box">
                  <img src={`${process.env.PUBLIC_URL}/images/coinlogos/${coinImage}`}  alt={data.name} />
                  <h3 className="white-text">{data.name }</h3>
                </div>
                <div className="button-btc d-flex center button-buy-2 details-button">
                    <Link to={`/coindetail/${data._id}`}>MORE DETAILS</Link>
                </div>

              </div>


)
})}
            </div>
            
            
          </div>     

        </section>
      );
    }
    
export default CoinDisplay;
