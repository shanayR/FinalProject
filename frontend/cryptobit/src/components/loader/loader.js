import React, { useEffect } from "react";
import $ from 'jquery'
function Loader(){
    useEffect(
        ()=>{
            setTimeout(() => {
                $('.loader').remove();
            }, 2000);
        }
    )
    
    return(
        <div className="loader d-flex center items-centre fixed">
            <img src={process.env.PUBLIC_URL + "/images/loader.gif"} alt="Loader"  className="loader-img" />
        </div>
    )
}

export default Loader
