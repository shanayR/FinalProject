import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ViewCoin(){
        const [coins, getCoins] = useState();
    
        const coindisplay = () =>{
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
            coindisplay()
        },[]);
        // const [delete,getdelete] = useState
        // const coindelete = () => {
        //     axios.get("http://localhost:8080/delete/:id").then(
        //         function (response){
        //         }
        //     )
        // }
  
    return(
        <>
        <div className="white-text fontsize40 heading-view">Coins</div>
            <div>
                <div>
        {coins && coins.map((data,key)=>{
            console.log(data)
            return(

                    <div class="row d-flex space-between hundred items-centre" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                        <div class="currency-name d-flex items-centre col-sm-2">
                            <h4 class="padding-right10">{data.name } &nbsp; &nbsp;</h4> 
                            {/* <p class="blue-text fontsize20">mcklmc</p> */}
                        </div>
                        <div class="price col-sm-2 d-flex">
                            <p class="fontsize20 white-smoke-text">&#36; {data.price.$numberDecimal} &nbsp; </p>
                        </div>
                    
                        <div class="trade-button">
                            <div class="button">
                                <Link to="#">Edit</Link>
                                <Link to="#">Delete</Link>
                                {/* <Link to="http://localhost:8080/delete/{data._id}">Delete</Link> */}

                            </div>
                        </div>
                    </div>
            )
        })}
                </div>
            </div>
            <div className="button-add">
                <Link to="/add">Add</Link>
            </div>
  
        </>
   
    )
}

export default ViewCoin