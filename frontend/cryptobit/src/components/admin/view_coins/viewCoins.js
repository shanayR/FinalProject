import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function ViewCoin(){
        const navigate = useNavigate();
        const [coins, getCoins] = useState();

        const coindelete = (id) => {
            console.log(id);
            axios.delete("http://localhost:8080/delete/"+id)
            .then(function(){
                navigate("/view",{state:coindisplay() })
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    
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
        
        
  
    return(
        <>
        <div className="white-text fontsize40 heading-view">Coins</div>
            <div>
                <div>
        {coins && coins.map((data,key)=>{
            console.log(data)
            const id = data._id
            return(

                    <div class="row d-flex space-between hundred items-centre" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                        <div class="currency-name d-flex items-centre col-sm-2">
                            <h4 class="padding-right10">{data.name } &nbsp; &nbsp;</h4> 
                            {/* <p class="blue-text fontsize20">mcklmc</p> */}
                        </div>
                        <div class="price col-sm-2 d-flex">
                            <p class="fontsize20 white-smoke-text">&#36; {data.price.$numberDecimal} &nbsp; </p>
                        </div>
                        <div class="price col-sm-2 d-flex">
                            <p class="fontsize20 white-smoke-text">&#36; {data.coinlogo} &nbsp; </p>
                        </div>
                    
                        <div class="trade-button">
                            <div class="button">
                                <Link to={`/update/${data._id}`}>Edit</Link>
                                <button onClick={ () => coindelete(data._id)}>Delete</button>
                                {/* <button>Delete</button> */}

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