import React from "react";

function News(){
    return(
        <section id="home-section-6" class="section-padding darkblue hundred">
            <div class="container">
                <div class="d-flex center">
                    <h2 class="fontsize40 fontweight400 margin-bottom80 white-text" data-aos="fade-up" data-aos-duration="500" data-aos-delay="">Latest News</h2>
                </div>
                <div class="d-flex center margin-bottom80">
                    <div class="blue-box news-box border-radius20 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" >
                        <img src={process.env.PUBLIC_URL+"/images/news1.jpg"} alt="news1" class="image-news"/>
                        <div class="news-content">
                            <div class="date">
                                <i class="far fa-calendar"></i> January 21, 2021
                            </div>

                            <h3 class="white-text">Report about team's trip to the road show</h3>
                            <p class="margin-bottom26">Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.</p>
                            <a href="#" class="blue-text  fontweight700">READ MORE <i class="fa fa-arrow-circle-right"></i></a>
                        </div>

                    </div>
                    <div class="blue-box news-box border-radius20 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" >
                        <img src={process.env.PUBLIC_URL+"/images/news2.jpg"} alt="news2" class="image-news "/>
                        <div class="news-content">
                            <div class="date">
                                <i class="far fa-calendar"></i> January 21, 2021
                            </div>
                            <h3 class="white-text">Report about team's trip to the road show</h3>
                            <p class="margin-bottom26">Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.</p>
                            <a href="#" class="blue-text fontweight700">READ MORE <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>

                    <div class="blue-box news-box border-radius20 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL+"/images/news3.jpg"} alt="news3" class="image-news "/> 
                        <div class="news-content">
                            <div class="date">
                                <i class="far fa-calendar"></i> January 21, 2021
                            </div>
                            <h3 class="white-text">Report about team's trip to the road show</h3>
                            <p class="margin-bottom26">Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.</p>
                            <a href="#" class="blue-text fontweight700">READ MORE <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                        
                    </div>
                </div>

                <div class=" d-flex center ">
                    <a href="#" class="all-button button ">ALL NEWS</a>
                </div>

            </div>
        </section>
    )
}

export default News