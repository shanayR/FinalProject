import React from "React";

function Index(){
    return(

        <div className="loader d-flex center items-centre fixed">
            <img src="images/loader.gif" alt="Loader"className="loader-img" />
        </div>
    <section class="home-banner section-padding hundred relative d-flex"
        id="home-section-1">
        <div id="share-bar"></div>
        <canvas id="stars" class="absolute"></canvas>
        <div class="container relative">
            <div class="two-col d-flex">
                <div class="col col1">


                    <div class="heading" data-aos="fade-right"
                        data-aos-duration="1000" data-aos-easing="ease-in-out"
                        data-aos-delay="2000">
                        <h2>Crypto Bit-Lending & Investmensts Platform</h2>
                    </div>
                    <div class="buttons d-flex items-center flex-start"data-aos="fade-up"
                        data-aos-duration="1500" data-aos-delay="2500">
                        <div class="button">
                            <a href="{% url 'register' %}">REGISTER NOW</a>
                        </div>
                        <div class="button">
                            <a href="{% url 'coinDisplay' %}"> BUY CRYPTO NOW</a>
                        </div>
                    </div>
                </div>
                <div class="col col2">
                    <div class="countdown d-flex"id="countdown"
                        data-aos="fade-left" data-aos-easing="linear"
                        data-aos-duration="1500" data-aos-delay="2000">
                        <div>
                            <div class="days count-down d-flex center
                                items-centre"></div>
                            <div class="text-center">Days</div>
                        </div>
                        <div>
                            <div class="hours count-down d-flex center
                                items-centre"></div>
                            <div class="text-center">Hours</div>
                        </div>
                        <div>
                            <div class="minutes count-down d-flex center
                                items-centre"></div>
                            <div class="text-center">Minutes</div>
                        </div>
                        <div>
                            <div class="seconds count-down d-flex center
                                items-centre"></div>
                            <div class="text-center">Seconds</div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    </section>

    <section id="home-section-2" class="section-padding hundred darkblue">
        <div class="container">
            <div class="d-flex center items-centre wrap">

                {% for coin in featured_coins %}
                <div class="bitcoin-rate details relative blue-box"
                    data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div class="d-flex space-around items-centre heading">
                        <img src="{{ coin.logo_image.url }}" alt="{{ coin.name
                            }}">
                        <h3 class="white-text">
                            {{ coin.name }}
                        </h3>
                    </div>
                    <div class="button-btc d-flex center button details-button">
                        <a href="{% url 'coindetail' coin_id=coin.id %}"> MORE
                            DETAILS</a>
                    </div>

                </div>

                {% endfor %}

            </div>
            <div class="d-flex center">
                <a href="{% url 'coinDisplay' %}" class="button">ALL COINS</a>
            </div>
        </div>

    </section>


    <section id="home-section-3" class="section-padding hundred navyblue
        relative">

        <div class="container">
            <div class="d-flex center fontsize40">
                <h2 class="fontweight400 fontsize40 margin-bottom80 white-text"
                    data-aos="fade-up" data-aos-duration="1500">Distribution Of
                    Tokens</h2>
            </div>

            <div class="slider">
                <div class="slide">
                    <div class="d-flex items-center">
                        <div class="relative d-flex items-centre center">
                            <div class="piechart piechart-bitcoin d-flex
                                items-centre center">
                                <img src="{% static 'images/piechart-logo.png' %}" alt="bitcoin">
                            </div>
                        </div>

                        <div class="graph-details d-flex flex-column col-sm-6
                            center">
                            <div class="lists">
                                <h4><i class="fa fa-circle"></i> 85%</h4>
                                <p>For participants of Pre-Sale and ICO</p>
                            </div>

                            <div class="lists">
                                <h4><i class="fa fa-circle"></i> 8%</h4>
                                <p>Reserved for the team.</p>
                            </div>

                            <div class="lists">
                                <h4><i class="fa fa-circle"></i> 4%</h4>
                                <p>Reserved for the consultants.</p>
                            </div>

                            <div class="lists">
                                <h4><i class="fa fa-circle"></i> 3%</h4>
                                <p>Bounty campaign</p>
                            </div>
                        </div>

                    </div>


                </div>

                <div class="slide">
                    <div class="d-flex">
                        <div class="relative d-flex items-centre center">
                            <div class="piechart piechart-eth d-flex
                                items-centre center">
                                <img src="{% static 'images/ethereum.png' %}"
                                    alt="eth logo" class="graph-ethlogo">
                            </div>
                        </div>

                        <div class="graph-details d-flex flex-column col-sm-6
                            center">
                            <div class="lists">
                                <h4><i class="fa fa-circle"></i> 85%</h4>
                                <p>For participants of Pre-Sale and ICO</p>
                            </div>

                            <div class="lists">
                                <h4><i class="fa fa-circle"></i> 8%</h4>
                                <p>Reserved for the team.</p>
                            </div>

                            <div class="lists">
                                <h4><i class="fa fa-circle"></i> 4%</h4>
                                <p>Reserved for the consultants.</p>
                            </div>

                            <div class="lists">
                                <h4><i class="fa fa-circle"></i> 3%</h4>
                                <p>Bounty campaign</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>



    <section id="home-section-4" class="section-padding hundred darkblue">
        <div class="container">
            <div class="d-flex">
                <div class="about-us col-sm-6">
                    <h2 class="fontsize40 margin-bottom26 fontweight400
                        white-text" data-aos="fade-up" data-aos-duration="2000">About
                        The Project</h2>
                    <p class="margin-bottom26" data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="100">Crypto Bit
                        is a lending and investment, multicurrency and
                        multifunctional online platform based on blockchain
                        technology. There investors and borrowers meet each
                        other and have the opportunity to lend money on mutually
                        beneficial.</p>
                    <p class="margin-bottom26" data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="200">Crypto Bit
                        is a unique service that allows individuals to access
                        loans from the comfort of their home in fiat currencies
                        or crypto-currencies.</p>
                    <p class="margin-bottom26" data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="300">Crypto Bit
                        is a multi-functional platform which allows each
                        participant to keep money in a multi-currency online
                        wallet, buy and sell currency on the exchange, invest
                        money, get a loan in a convenient currency.</p>
                    <div class="buttons d-flex items-center flex-start">
                        <div class="button">
                            <a href="{% url 'register' %}">REGISTER NOW</a>
                        </div>
                        <div class="button">
                            <a href="{% url 'coinDisplay' %}"> BUY CRYPTO NOW</a>
                        </div>
                    </div>


                </div>
                <div class="about-us-img col-sm-6">
                    <img src="{% static 'images/about.png' %}" alt="about us">
                </div>
            </div>
        </div>
    </section>





    <section id="home-section-5" class="hundred fullscreen-bg relative">
        <video playsinline autoplay muted loop class="bg-video absolute">
            <source src="{% static 'images/visacard.mp4' %}" type="video/mp4">
        </video>
        <div class="visacard-home-section relative">
            <div class="container">
                <div class="heading-1" data-aos="fade-up"
                    data-aos-duration="500">
                    <h3 class="white-text">CryptoBit VISA CARD</h3>
                </div>

                <div class="heading-2" data-aos="fade-up"
                    data-aos-duration="500">
                    <h2 class="white-text">The only card you need</h2>
                </div>

                <div class="card-description" data-aos="fade-up"
                    data-aos-duration="500">
                    <p>Enjoy up to 8% back on all spending with your sleek, pure
                        metal card.
                        No annual fees. Top-up with fiat or crypto.</p>
                </div>

                <div class="card-button d-flex space-around" data-aos="fade-up"
                    data-aos-duration="500">
                    <a href="{% url 'visacard' %}">More About Card <i class="fa
                            fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    <!-- NEWS SECTION-->

    <section id="home-section-6" class="section-padding darkblue hundred">
        <div class="container">
            <div class="d-flex center">
                <h2 class="fontsize40 fontweight400 margin-bottom80 white-text"
                    data-aos="fade-up" data-aos-duration="500"
                    data-aos-delay="">Latest News</h2>
            </div>
            <div class="d-flex center margin-bottom80">
                {% for news in news %}
                <div class="blue-box news-box border-radius20" data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="100">
                    <img src="{{ news.featured_image.url }}" alt="news1"
                        class="image-news">
                    <div class="news-content">
                        <div class="date">
                            <i class="far fa-calendar"></i> {{ news.publish_date
                            }}
                        </div>

                        <h3 class="white-text">{{ news.title }}</h3>
                        <p class="margin-bottom26">{{ news.content }}</p>
                        <a href="#" class="blue-text fontweight700">READ MORE <i
                                class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>

        <div class="d-flex center">
            <a href="#" class="button">ALL NEWS</a>
        </div>
    </section>

    <!--SUBSCRIBE US-->
    <section id="home-section-7" class="section-padding hundred navyblue">
        <div class="container">
            <div class="d-flex">
                <h2 class="fontsize40 fontweight400 margin-bottom80 white-text"
                    data-aos="fade-up" data-aos-duration="1000">Send us a
                    message!</h2>
            </div>

                <form id="subscribe" method="post" action="{% url 'subscribe_submit'
                    %}" data-aos="fade-up" data-aos-duration="1000"
                    data-aos-delay="100">
                    <div class="dflex center space-around width100 flex-column
                        subscribe-form">
                        {% csrf_token %}
    
                        <input type="text" name="subscribeName" placeholder="Your Name" class="darkblue margin-bottom26 capitalize">
                        <input type="number" name="subscribeNumber"
                            placeholder="Phone Number" class="darkblue
                            margin-bottom26">
                        <input type="email" name="subscribeEmail" placeholder="Email Address" class="darkblue margin-bottom26">
                        <textarea name="subscribeMessage" placeholder="Type Your Message Here" class="darkblue margin-bottom26
                            capitalize"></textarea>
                    </div>
                    <input type="submit" value="SEND MESSAGE" class="button" />
                </form>
        </div>
    </section>
    )
}