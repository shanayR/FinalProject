import React from "react";

function Loader(){
    return(
        <div className="loader d-flex center items-centre fixed">
        <img src="{% static 'images/loader.gif' %}" alt="Loader"  className="loader-img" />
    </div>
    )
}

export default Loader
