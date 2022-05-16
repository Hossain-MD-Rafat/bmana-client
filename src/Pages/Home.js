import React from "react";
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section>
        <div class="banner_main">
          <div class="banner_slider">
            <div class="banner">
              <div class="container">
                <div class="banner_wrapper">
                  <div class="row">
                    <div class="col-lg-10">
                      <div class="banner_wrap">
                        <div
                          class="banner_search"
                          data-aos="fade-up-left"
                          data-aos-easing="ease"
                          data-aos-duration="5s"
                        >
                          <h4>Lorem ipsum dolor sit amet.</h4>
                          <h5>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="sideBar d-lg-block d-none">
          <div class="container">
            <div class="sideBar_wrapper">
              <div class="sideBar_contain">
                <div class="logo text-center">
                  <img src="images/bmana.png" alt="" />
                </div>
                <div class="login_btn text-center">
                  <a href="#">
                    {" "}
                    <span>
                      <i class="fa-solid fa-user"></i>
                    </span>{" "}
                    Member Login
                  </a>
                </div>
                <div class="nav_list">
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <span>
                          <i class="fa-solid fa-house"></i>
                        </span>{" "}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>
                          <i class="fa-solid fa-circle-info"></i>
                        </span>{" "}
                        About US
                        <span class="droppper">
                          <i class="fa-solid fa-caret-down"></i>
                        </span>
                      </a>
                      <ul class="sub_down">
                        <li>
                          <a href="#">About BMANA</a>
                        </li>
                        <li>
                          <a href="#">Mission and Vision</a>
                        </li>
                        <li>
                          <a href="#">President’s Message</a>
                        </li>
                        <li>
                          <a href="#">Executive Committee</a>
                        </li>
                        <li>
                          <a href="#">Honorees</a>
                        </li>
                        <li>
                          <a href="#">BMANA Alliance</a>
                        </li>
                        <li>
                          <a href="#">BMANA Constitution</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>
                          <i class="fa-solid fa-user-group"></i>
                        </span>{" "}
                        Mambership
                        <span class="droppper">
                          <i class="fa-solid fa-caret-down"></i>
                        </span>
                      </a>
                      <ul class="sub_down">
                        <li>
                          <a href="#">About BMANA</a>
                        </li>
                        <li>
                          <a href="#">Mission and Vision</a>
                        </li>
                        <li>
                          <a href="#">Honorees</a>
                        </li>
                        <li>
                          <a href="#">BMANA Alliance</a>
                        </li>
                        <li>
                          <a href="#">BMANA Constitution</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>
                          <i class="fa-solid fa-photo-film"></i>
                        </span>{" "}
                        Media
                        <span class="droppper">
                          <i class="fa-solid fa-caret-down"></i>
                        </span>
                      </a>
                      <ul class="sub_down">
                        <li>
                          <a href="#">About BMANA</a>
                        </li>
                        <li>
                          <a href="#">Mission and Vision</a>
                        </li>
                        <li>
                          <a href="#">President’s Message</a>
                        </li>
                        <li>
                          <a href="#">BMANA Alliance</a>
                        </li>
                        <li>
                          <a href="#">BMANA Constitution</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>
                          <i class="fa-solid fa-calendar-check"></i>
                        </span>{" "}
                        Events
                        <span class="droppper">
                          <i class="fa-solid fa-caret-down"></i>
                        </span>
                      </a>
                      <ul class="sub_down">
                        <li>
                          <a href="#">About BMANA</a>
                        </li>
                        <li>
                          <a href="#">Executive Committee</a>
                        </li>
                        <li>
                          <a href="#">Honorees</a>
                        </li>
                        <li>
                          <a href="#">BMANA Alliance</a>
                        </li>
                        <li>
                          <a href="#">BMANA Constitution</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>
                          <i class="fa-brands fa-react"></i>
                        </span>{" "}
                        Resources
                        <span class="droppper">
                          <i class="fa-solid fa-caret-down"></i>
                        </span>
                      </a>
                      <ul class="sub_down">
                        <li>
                          <a href="#">About BMANA</a>
                        </li>
                        <li>
                          <a href="#">Mission and Vision</a>
                        </li>
                        <li>
                          <a href="#">President’s Message</a>
                        </li>
                        <li>
                          <a href="#">BMANA Constitution</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>
                          <i class="fa-solid fa-file"></i>
                        </span>{" "}
                        Chapters
                        <span class="droppper">
                          <i class="fa-solid fa-caret-down"></i>
                        </span>
                      </a>
                      <ul class="sub_down">
                        <li>
                          <a href="#">About BMANA</a>
                        </li>
                        <li>
                          <a href="#">Mission and Vision</a>
                        </li>
                        <li>
                          <a href="#">President’s Message</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>
                          <i class="fa-solid fa-phone"></i>
                        </span>{" "}
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="feature">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="section_header">
                  <h4>FEATURED EVENTS</h4>
                </div>
              </div>
            </div>
            <div class="feature_wrapper">
              <div class="row">
                <div
                  class="col-lg-6"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="feature_wrap">
                    <h5>Friday</h5>
                    <h5>July 1 - July 3</h5>
                    <h6>BMANA 41ST ANNUAL CONVENTION 2022</h6>
                    <p>
                      BMANA 41st Annual Convention 2022 will be held in New York
                      on July 1-3 at Marriott Marquis Hotel. This year’s
                      convention is being organized by Central...
                    </p>
                    <a href="#">Attend Annual Convention & Upcoming Events</a>
                  </div>
                </div>
                <div
                  class="col-lg-6 text-end"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="feature_wrap_2">
                    <div class="feature_box">
                      <h4>30</h4>
                      <h4>MAY</h4>
                    </div>
                    <h6>BMANA 41ST ANNUAL CONVENTION 2022</h6>
                    <p>
                      BMANA 41st Annual Convention 2022 will be held in New York
                      on July 1-3 at Marriott Marquis Hotel. This year’s
                      convention is being organized by Central...
                    </p>
                    <a href="#">11:00 AM to 08:00 PM</a>
                    <div class="qcode_img">
                      <img src="images/qrcode.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="mission">
          <div class="container">
            <div class="mission_wrapper">
              <div class="row">
                <div class="col-md-6 col-lg-4 text-center">
                  <div class="mission_item">
                    <h4> MISSION</h4>
                    <p>
                      To bring together and to improve communication between the
                      physicians…
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 text-center">
                  <div class="mission_item">
                    <h4> VISION</h4>
                    <p>
                      To bring together and to improve communication between the
                      physicians…
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 text-center">
                  <div class="mission_item">
                    <h4>Constitution</h4>
                    <p>
                      To bring together and to improve communication between the
                      physicians…
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_wrapper">
              <div class="row card_slider">
                <div class="col-lg-4 text-center">
                  <div class="slider_item">
                    <div class="sl_img">
                      <img src="images/s3.jpg" alt="" />
                    </div>
                    <h4>YOUNG PHYSICIAN CAREER</h4>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div class="col-lg-4 text-center">
                  <div class="slider_item">
                    <div class="sl_img">
                      <img src="images/s4.jpg" alt="" />
                    </div>
                    <h4> PANDEMIC OF COVID-19 </h4>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div class="col-lg-4 text-center">
                  <div class="slider_item">
                    <div class="sl_img">
                      <img src="images/1.jpg" alt="" />
                    </div>
                    <h4> COVID 19 </h4>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div class="col-lg-4 text-center">
                  <div class="slider_item">
                    <div class="sl_img">
                      <img src="images/2.jpg" alt="" />
                    </div>
                    <h4>BMANA CONVENTION </h4>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="portocol"
              data-aos="fade-up-right"
              data-aos-easing="ease"
              data-aos-duration="5s"
            >
              <div class="row">
                <div class="col-lg-12 text-center">
                  <a href="#">
                    Corona virus management and protocol{" "}
                    <span>
                      <i class="fa-solid fa-download"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="committe">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="section_header">
                  <h4> EXECUTIVE COMMITTEE</h4>
                </div>
              </div>
            </div>
            <div class="committe_wrapper">
              <div class="row">
                <div
                  class="col-sm-6 col-md-4 col-lg-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="committe_wrap">
                    <div class="profile_img text-center">
                      <div class="p_img">
                        <img src="images/profileMAn.png" alt="" />
                      </div>
                      <h4>President - Elect</h4>
                    </div>
                    <div class="profile_info">
                      <h5>Lorem Ipsum</h5>
                      <h6>presidentelect@bmana.org</h6>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 col-md-4 col-lg-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="committe_wrap">
                    <div class="profile_img text-center">
                      <div class="p_img">
                        <img src="images/profileMAn.png" alt="" />
                      </div>
                      <h4>President - Elect</h4>
                    </div>
                    <div class="profile_info">
                      <h5>Lorem Ipsum</h5>
                      <h6>presidentelect@bmana.org</h6>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 col-md-4 col-lg-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="committe_wrap">
                    <div class="profile_img text-center">
                      <div class="p_img">
                        <img src="images/profileMAn.png" alt="" />
                      </div>
                      <h4>President - Elect</h4>
                    </div>
                    <div class="profile_info">
                      <h5>Lorem Ipsum</h5>
                      <h6>presidentelect@bmana.org</h6>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 col-md-4 col-lg-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="committe_wrap">
                    <div class="profile_img text-center">
                      <div class="p_img">
                        <img src="images/profileMAn.png" alt="" />
                      </div>
                      <h4>President - Elect</h4>
                    </div>
                    <div class="profile_info">
                      <h5>Lorem Ipsum</h5>
                      <h6>presidentelect@bmana.org</h6>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 col-md-4 col-lg-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="committe_wrap">
                    <div class="profile_img text-center">
                      <div class="p_img">
                        <img src="images/profileMAn.png" alt="" />
                      </div>
                      <h4>President - Elect</h4>
                    </div>
                    <div class="profile_info">
                      <h5>Lorem Ipsum</h5>
                      <h6>presidentelect@bmana.org</h6>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 col-md-4 col-lg-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="committe_wrap">
                    <div class="profile_img text-center">
                      <div class="p_img">
                        <img src="images/profileMAn.png" alt="" />
                      </div>
                      <h4>President - Elect</h4>
                    </div>
                    <div class="profile_info">
                      <h5>Lorem Ipsum</h5>
                      <h6>presidentelect@bmana.org</h6>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 col-md-4 col-lg-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="committe_wrap">
                    <div class="profile_img text-center">
                      <div class="p_img">
                        <img src="images/profileMAn.png" alt="" />
                      </div>
                      <h4>President - Elect</h4>
                    </div>
                    <div class="profile_info">
                      <h5>Lorem Ipsum</h5>
                      <h6>presidentelect@bmana.org</h6>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 col-md-4 col-lg-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div class="committe_wrap">
                    <div class="profile_img text-center">
                      <div class="p_img">
                        <img src="images/profileMAn.png" alt="" />
                      </div>
                      <h4>President - Elect</h4>
                    </div>
                    <div class="profile_info">
                      <h5>Lorem Ipsum</h5>
                      <h6>presidentelect@bmana.org</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="mambership">
          <div class="container">
            <div class="mamber_wrapper">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h4>Whatever your Passion, We cater to your unique needs.</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centu
                  </p>
                  <div class="mamber_adder">
                    <a href="#">Become A Mamber</a>
                    <span>
                      <a href="#" class="mamber_add">
                        <i class="fa-solid fa-user-plus"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="resourcs">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="section_header">
                  <h4> RESOURCES FOR BMANA MEMBERS </h4>
                </div>
              </div>
            </div>
            <div class="resources_wrapper" data-aos="fade-up">
              <div class="row">
                <div class="col-md-6 col-lg-4">
                  <div class="resource_wrap">
                    <div class="top_wrap text-center">
                      <i class="fa-solid fa-chalkboard-user"></i>
                      <h4>CAREER OPPORTUNITIES</h4>
                    </div>
                    <div class="bottom_wrap">
                      <p>
                        Access tools designed to help you succeed in your
                        practice no matter the stage of your career.Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="resource_wrap">
                    <div class="top_wrap text-center">
                      <i class="fa-solid fa-map-location"></i>
                      <h4>ADVOCACY</h4>
                    </div>
                    <div class="bottom_wrap">
                      <p>
                        Access tools designed to help you succeed in your
                        practice no matter the stage of your career.Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="resource_wrap">
                    <div class="top_wrap text-center">
                      <i class="fa-solid fa-lightbulb"></i>
                      <h4>ALUMNI</h4>
                    </div>
                    <div class="bottom_wrap">
                      <p>
                        Access tools designed to help you succeed in your
                        practice no matter the stage of your career.Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="sponsor">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="section_header">
                  <h4> BMANA SPONSORS </h4>
                </div>
              </div>
            </div>
            <div class="sponsor_wrapper" data-aos="fade-up">
              <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="sponsor_wrap">
                    <img src="images/spon_1.png" alt="" />
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="sponsor_wrap">
                    <img src="images/spon_1.png" alt="" />
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="sponsor_wrap">
                    <img src="images/spon_1.png" alt="" />
                  </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="sponsor_wrap">
                    <img src="images/spon_1.png" alt="" />
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="sponsor_wrap">
                    <img src="images/spon_1.png" alt="" />
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="sponsor_wrap">
                    <img src="images/spon_1.png" alt="" />
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="sponsor_wrap">
                    <img src="images/spon_1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="news">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="section_header">
                  <h4> NEWS AND ANNOUNCEMENT </h4>
                </div>
              </div>
            </div>
            <div class="news_wrapper">
              <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-10">
                  <div class="news_imgSlide">
                    <div class="news_img">
                      <img src="images/ss.png" alt="" />
                    </div>
                    <div class="news_img">
                      <img src="images/ss2.png" alt="" />
                    </div>
                    <div class="news_img">
                      <img src="images/ss3.png" alt="" />
                    </div>
                    <div class="news_img">
                      <img src="images/ss4.png" alt="" />
                    </div>
                    <div class="news_img">
                      <img src="images/ss5.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="news_info text-center">
                  <h4>BMANA 41st Annual Convention 2022</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="convention">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="convention_wrapper text-center">
                  <h4>
                    41st BMANA Convention 2022 – Where Great Minds Unite.{" "}
                  </h4>
                  <a href="#">bmanaconvention.org</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="donate_banner">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="section_header">
                  <h4>DONATE TO BMANA DISASTER RELIEF FUND</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="donate">
          <div class="container">
            <div class="donate_wrapper">
              <div class="row">
                <div class="donate_textWrap">
                  <h3>Dear Colleagues,</h3>
                  <p>
                    Please stay safe and practice best medicine in this critical
                    moments of our social and clinical life around COVID-19. Our
                    physicians in Bangladesh are in dire needs of Personal
                    Protective Equipment(PPE). There will be also need of
                    ventilators, clinical advice and knowledge exchange. We
                    created a task force which is working diligently with
                    physicians in USA and Bangladesh. We are requesting your
                    help and donations to BMANA disaster fund. Please donate
                    your time and money as you have done previously during
                    natural disasters locally and in Bangladesh.
                  </p>
                  <p>
                    It is time to extend humanitarian assistance and help them
                    to the best of our ability.
                  </p>
                </div>
              </div>
              <div class="donate_site">
                <div class="row align-items-center">
                  <div class="col-md-6 col-lg-6 text-center">
                    <div class="donate_marker">
                      <div class="donate_entry"></div>
                    </div>
                    <a href="#">Donate Here</a>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <div class="donate_right">
                      <h4>Mail to :</h4>
                      <ul>
                        <li>Mr. Abdul Kalam</li>
                        <li>Treasurer BMANA</li>
                        <li>504 Medford Avenue</li>
                        <li>Patchogue NY 11772</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="newsletter">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="section_header">
                  <h4>NEWSLETTER SIGN UP</h4>
                  <p> Subscribe to our newsletter for regular updates</p>
                </div>
                <div class="newsletter_wrapper">
                  <div class="row">
                    <div class="col-lg-12 text-center">
                      <div class="newsletter_search">
                        <form action="#">
                          <input
                            class="form_control"
                            type="text"
                            placeholder="yourmail@mail.com"
                          />
                        </form>
                        <div class="news_serchBtn">
                          <a href="#">Subscribe</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
