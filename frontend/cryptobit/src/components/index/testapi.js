import React, {useEffect, useState} from "react";
import axios from "axios"

function CoinDisplay() {
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
  
      return (
        <>
       <h1>Coinss</h1>
       <table>
       {coins && coins.map((data,key)=>{
        return(
         
            <tr>
              <td>{data.name }</td>
              <td>{data.price.$numberDecimal}</td>
            </tr>
         
        )
       })}
       </table>
        </>
      );
    }
    
export default CoinDisplay;