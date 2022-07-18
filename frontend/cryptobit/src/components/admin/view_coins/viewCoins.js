import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function ViewCoin(){
        const navigate = useNavigate();
        const [coins, getCoins] = useState();

        const coindelete = (id) => {
            console.log(id);
            axios.delete(`${process.env.REACT_APP_SERVER_PATH}delete/${id}`)
            .then(function(){
                navigate("/view",{state:coindisplay() })
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    
        const coindisplay = () =>{
        axios.get(`${process.env.REACT_APP_SERVER_PATH}view`)
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
            <div>
                <div>
        {coins && coins.map((data,key)=>{
            console.log(data)
            // const id = data._id
            const coinImages = data.image
            return(

                    <div className="row d-flex space-between hundred items-centre" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                        <div className="currency-name d-flex items-centre col-sm-3 ">
                            <img src={process.env.PUBLIC_URL+"/images/coinlogos/"+ coinImages} class="blue-text fontsize20"  alt={data.name}/>
                            <h4 className="padding-right10 coin-box-heading">{data.name }</h4> 
                        </div>
                        <div className="price col-sm-2 d-flex">
                            {/* <p className="fontsize20 white-smoke-text">&#36; {data.price.$numberDecimal} </p> */}
                        </div>
                    
                        <div className="trade-button">
                            <div className="button">
                                <Link to={`/update/${data._id}`}>Edit</Link>
                                <button  className="delete-button" onClick={ () => coindelete(data._id)}>Delete</button>
                                {/* <button>Delete</button> */}

                            </div>
                        </div>
                    </div>
            )
        })}
                </div>
            </div>
  
        </>
   
    )
}

export default ViewCoin