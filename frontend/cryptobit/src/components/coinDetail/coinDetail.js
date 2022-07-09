import React ,{ useState , useEffect}from "react";
import SocialShare from "../common/social-share";
import axios from "axios"
import { Link } from "react-router-dom"

function CoinDetail(){
    const [coins, getCoins] = useState();
  
    const coindetail = () =>{
      axios.get("http://localhost:8080/view")
      .then(function (response){
       
        getCoins(response.data)
      })
      .catch((error) =>{
        console.log(error);
      })
      .then(() =>{console.log("Executed")})
    }
    useEffect(()=>{
        coindetail()
    },[]);
    return (
        <section id="details-section-1" className="darkblue section-padding firstsectionpadding">
            <SocialShare />
            <div className="container">
            {coins && coins.map((data,key)=>{
                const coinImage = data.image
                return(
                    <>
                    <div className="coin-specify-box d-flex space-between">
                        <div className="d-flex items-centre" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="2000">
                            <Link to="index.html"><img src={process.env.PUBLIC_URL+"images/coinlogos/"+coinImage} alt={data.name} /> </Link>
                            <h2 className="white-text detail-heading">{data.name}</h2>
                        </div>
                        <div className="coin-price-box d-flex items-centre center" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="2000">
                            <h5 className="blue-text">{data.name} Price</h5>
                            <h3 className="green-text items-centre">$ 567</h3>
                        </div>
                    </div>
                    <div id="details-section-2" className="coin-text" >
                        <div className="coin-explanation" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" data-aos-delay="2000">
                            <h2 className="white-text">What is {data.name}?</h2>
                            <p className="coin-para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        </div>

                        <div className="coin-working" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                            <h2 className="white-text">How does {data.name} work?</h2>
                            <p className="coin-para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                        <div className="coin-advantages" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                            <h2 className="white-text">Advantages of {data.name}</h2>
                            <p className="coin-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                        <div className="coin-disadvantages" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                            <h2 className="white-text">Disadvantages of {data.name}</h2>
                            <p className="coin-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>


                        <div className="d-flex center">
                            <Link to="{% url 'buy' coinId=coin.id %}" className="button-coins">BUY COINS</Link>
                        </div>
                    </div>
                    </>
                )
             })}
                </div>
        </section>
    )
}
export default CoinDetail
