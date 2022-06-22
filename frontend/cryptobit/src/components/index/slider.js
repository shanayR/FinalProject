import React , { Component } from "react";
import Slider from "react-slick";

export default class TokenSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
      };
      return (
        <Slider className="slider">
                <div className="slide">
                    <div className="d-flex items-center">
                        <div className="relative d-flex items-centre center">
                            <div className="piechart piechart-bitcoin d-flex
                                items-centre center">
                                <img src={process.env.PUBLIC_URL + "images/piechart-logo.png"} alt="bitcoin" />
                            </div>
                        </div>

                        <div className="graph-details d-flex flex-column col-sm-6
                            center">
                            <div className="lists">
                                <h4><i className="fa fa-circle"></i> 85%</h4>
                                <p>For participants of Pre-Sale and ICO</p>
                            </div>

                            <div className="lists">
                                <h4><i className="fa fa-circle"></i> 8%</h4>
                                <p>Reserved for the team.</p>
                            </div>

                            <div className="lists">
                                <h4><i className="fa fa-circle"></i> 4%</h4>
                                <p>Reserved for the consultants.</p>
                            </div>

                            <div className="lists">
                                <h4><i className="fa fa-circle"></i> 3%</h4>
                                <p>Bounty campaign</p>
                            </div>
                        </div>

                    </div>


                </div>

                <div className="slide">
                    <div className="d-flex">
                        <div className="relative d-flex items-centre center">
                            <div className="piechart piechart-eth d-flex
                                items-centre center">
                                <img src={process.env.PUBLIC_URL + "images/logo-eth.png"} alt="eth logo" className="graph-ethlogo" />
                            </div>
                        </div>

                        <div className="graph-details d-flex flex-column col-sm-6
                            center">
                            <div className="lists">
                                <h4><i className="fa fa-circle"></i> 85%</h4>
                                <p>For participants of Pre-Sale and ICO</p>
                            </div>

                            <div className="lists">
                                <h4><i className="fa fa-circle"></i> 8%</h4>
                                <p>Reserved for the team.</p>
                            </div>

                            <div className="lists">
                                <h4><i className="fa fa-circle"></i> 4%</h4>
                                <p>Reserved for the consultants.</p>
                            </div>

                            <div className="lists">
                                <h4><i className="fa fa-circle"></i> 3%</h4>
                                <p>Bounty campaign</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Slider>
      );
    }
  }