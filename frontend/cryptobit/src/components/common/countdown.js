import React from 'react';

function Countdown(){
    return(
        <div className="countdown d-flex"id="countdown"
            data-aos="fade-left" data-aos-easing="linear"
            data-aos-duration="1500" data-aos-delay="2000">
            <div>
                <div className="days count-down d-flex center
                    items-centre"></div>
                <div className="text-center">Days</div>
            </div>
            <div>
                <div className="hours count-down d-flex center
                    items-centre"></div>
                <div className="text-center">Hours</div>
            </div>
            <div>
                <div className="minutes count-down d-flex center
                    items-centre"></div>
                <div className="text-center">Minutes</div>
            </div>
            <div>
                <div className="seconds count-down d-flex center
                    items-centre"></div>
                <div className="text-center">Seconds</div>
            </div>



        </div>
    )
}

export default Countdown