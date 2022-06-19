import React from "react";

function Loader(){
    return(
        <div className="loader d-flex center items-centre fixed">
            <img src={process.env.PUBLIC_URL + "/images/loader.gif"} alt="Loader"  className="loader-img" />
        </div>
    )
}

export default Loader
