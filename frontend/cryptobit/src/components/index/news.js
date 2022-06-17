import React from "react";

function News(){
    return(
        <section id="home-section-6" class="section-padding darkblue hundred">
        <div className="container">
            <div className="d-flex center">
                <h2 className="fontsize40 fontweight400 margin-bottom80 white-text" data-aos="fade-up" data-aos-duration="500" data-aos-delay="">Latest News</h2>
            </div>
            <div className="d-flex center margin-bottom80">
                <div className ="blue-box news-box border-radius20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <img src="public/images/news1.jpg" alt="news1" className="image-news" />
                    <div className="news-content">
                        <div class="date">
                            <i className="far fa-calendar"></i>  January 21, 2021
                        </div>

                        <h3 className="white-text">Report about team's trip to the road show</h3>
                        <p className="margin-bottom26">Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.</p>
                        <a href="#" className="blue-text fontweight700">READ MORE <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <>
        <div className="d-flex center margin-bottom80">
                <div className ="blue-box news-box border-radius20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <img src="public/images/news2.jpg" alt="news1" className="image-news" />
                    <div className="news-content">
                        <div class="date">
                            <i className="far fa-calendar"></i>  January 21, 2021
                        </div>

                        <h3 className="white-text">Report about team's trip to the road show</h3>
                        <p className="margin-bottom26">Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.</p>
                        <a href="#" className="blue-text fontweight700">READ MORE <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        </>
        <>
         <div className="d-flex center margin-bottom80">
         <div className ="blue-box news-box border-radius20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
             <img src="public/images/news3.jpg" alt="news1" className="image-news" />
             <div className="news-content">
                 <div class="date">
                     <i className="far fa-calendar"></i>  January 21, 2021
                 </div>

                 <h3 className="white-text">Report about team's trip to the road show</h3>
                 <p className="margin-bottom26">Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.</p>
                 <a href="#" className="blue-text fontweight700">READ MORE <i className="fa fa-arrow-circle-right"></i></a>
             </div>
         </div>
     </div>
     </>


        <div className="d-flex center">
            <a href="#" className="button">ALL NEWS</a>
        </div>
    </section>
    )
}

export default News