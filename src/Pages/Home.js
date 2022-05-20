import React, { useContext, useEffect, useState } from "react";
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";
import Slider from "react-slick";
import { ModalContext, DataContext } from "../App";
import { Link } from "react-router-dom";

export default function Home() {
  const parser = new DOMParser();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "linear",
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    dots: true,
  };
  const settings_slide = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    dots: true,
  };
  const card = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    dots: false,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const { data, members } = useContext(DataContext);
  const { show, handleShow, handleClose } = useContext(ModalContext);

  return (
    <div>
      <Header mainNav={data.main_nav} ms_id={data.ms_id} />
      <section>
        <div className="banner_main">
          <Slider {...settings} className="banner_slider">
            {data.sliders &&
              data.sliders.map((slider) => {
                return (
                  <div className="banner">
                    <img
                      className="w-100"
                      src={`https://icircles.app/uploads/slider/${slider.microsite_id}/${slider.image}`}
                    ></img>
                    <div className="slider container">
                      <div className="banner_wrapper">
                        <div className="row">
                          <div className="col-lg-10">
                            <div className="banner_wrap">
                              <div className="banner_search">
                                <h4>{slider.title}</h4>
                                <h5>
                                  {
                                    parser.parseFromString(
                                      slider.description,
                                      "text/html"
                                    ).body.innerText
                                  }
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>

      <section>
        <div className="sideBar d-lg-block d-none">
          <div className="container">
            <div className="sideBar_wrapper">
              <div className="sideBar_contain">
                <div className="logo text-center">
                  <img src="assets/images/bmana.png" alt="" />
                </div>
                <div className="login_btn text-center">
                  <a href="#" onClick={handleShow}>
                    {" "}
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>{" "}
                    Member Login
                  </a>
                </div>
                <div className="nav_list">
                  <ul>
                    <li>
                      <a>
                        {" "}
                        <span>
                          <i className="fa-solid fa-house"></i>
                        </span>{" "}
                        Home
                      </a>
                    </li>

                    {data.main_nav &&
                      data.main_nav.map((navItem) => {
                        return (
                          <li>
                            <Link
                              to={`/page/${data.ms_id}/${navItem.id}`}
                              style={{
                                display: "block",
                                height: "100%",
                                width: "100%",
                              }}
                            >
                              {" "}
                              <span>
                                <i class="fa-solid fa-circle-info"></i>
                              </span>{" "}
                              {navItem.menu_name}
                              {navItem.sub_nav.length > 0 && (
                                <span class="droppper">
                                  <i class="fa-solid fa-caret-down"></i>
                                </span>
                              )}
                            </Link>

                            {navItem.sub_nav.length > 0 && (
                              <ul class="sub_down">
                                {navItem.sub_nav.map((item) => {
                                  return (
                                    <li>
                                      <Link to={`/page/${data.ms_id}/${item.id}`}>
                                        {item.menu_name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}

                    <li>
                      <Link to="/contact">
                        {" "}
                        <span>
                          <i className="fa-solid fa-phone"></i>
                        </span>{" "}
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="feature">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section_header">
                  <h4>FEATURED EVENTS</h4>
                </div>
              </div>
            </div>
            <div className="feature_wrapper">
              <div className="row">
                <div
                  className="col-lg-6"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div className="feature_wrap">
                    <h5>Friday</h5>
                    <h5>July 1 - July 3</h5>
                    <h6>BMANA 41ST ANNUAL CONVENTION 2022</h6>
                    <p>
                      BMANA 41st Annual Convention 2022 will be held in New York
                      on July 1-3 at Marriott Marquis Hotel. This year’s
                      convention is being organized by Central...
                    </p>
                    <a href="#" onClick={handleShow}>
                      Attend Annual Convention & Upcoming Events
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-6 text-end"
                  data-aos="fade-up-right"
                  data-aos-easing="ease"
                  data-aos-duration="5s"
                >
                  <div className="feature_wrap_2">
                    <div className="feature_box">
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
                    <div className="qcode_img">
                      <img src="assets/images/qrcode.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mission">
          <div className="container">
            <div className="mission_wrapper">
              <div className="row">
                {data.no_position &&
                  data.no_position.slice(0, 3).map((item) => {
                    return (
                      <div className="col-md-6 col-lg-4 text-center">
                        <div className="mission_item">
                          <h4>{item.menu_name}</h4>
                          <p>
                            {
                              parser.parseFromString(
                                item.body_content,
                                "text/html"
                              ).body.innerText
                            }
                          </p>
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="card_wrapper">
              <Slider {...card} className="row card_slider">
                {data.front_sections &&
                  data.front_sections.map((item) => {
                    return (
                      <div className="col-lg-4 text-center">
                        <div className="slider_item">
                          <div className="sl_img">
                            <img
                              src={`https://icircles.app/uploads/content/${item.microsite_id}/${item.featured_image}`}
                              alt=""
                            />
                          </div>
                          <h4>{item.menu_name}</h4>
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
            <div
              className="portocol"
              data-aos="fade-up-right"
              data-aos-easing="ease"
              data-aos-duration="5s"
            >
              <div className="row">
                <div className="col-lg-12 text-center">
                  <a href="#">
                    Corona virus management and protocol{" "}
                    <span>
                      <i className="fa-solid fa-download"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="committe">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section_header">
                  <h4> EXECUTIVE COMMITTEE</h4>
                </div>
              </div>
            </div>
            <div className="committe_wrapper">
              <div className="row">
                {members &&
                  members.map((member) => {
                    if (member.id == 1) {
                      return (
                        <div
                          class="col-sm-6 col-md-4 col-lg-3"
                          data-aos="fade-up-right"
                          data-aos-easing="ease"
                          data-aos-duration="5s"
                        >
                          <div class="committe_wrap">
                            <div class="profile_img text-center">
                              <div class="p_img">
                                <img
                                  src={"https://icircles.app/" + member.thumb}
                                  alt=""
                                />
                              </div>
                              <h4>
                                {member.designation} -{" "}
                                {member.firstname + " " + member.lastname}
                              </h4>
                            </div>
                            <div class="profile_info">
                              <h5>{member.about_member}</h5>
                              <h6 className="text-center">{member.email}</h6>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mambership">
          <div className="container">
            <div className="mamber_wrapper">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h4>Whatever your Passion, We cater to your unique needs.</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centu
                  </p>
                  <div className="mamber_adder">
                    <a href="#" onClick={handleShow}>
                      Become A Mamber
                    </a>
                    <span>
                      <a href="#" className="mamber_add" onClick={handleShow}>
                        <i className="fa-solid fa-user-plus"></i>
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
        <div className="resourcs">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section_header">
                  <h4> RESOURCES FOR BMANA MEMBERS </h4>
                </div>
              </div>
            </div>
            <div className="resources_wrapper" data-aos="fade-up">
              <div className="row">
                {data.no_position &&
                  data.no_position.slice(3, 6).map((item) => {
                    return (
                      <div className="col-md-6 col-lg-4">
                        <div className="resource_wrap">
                          <div className="top_wrap text-center">
                            <i className="fa-solid fa-chalkboard-user"></i>
                            <h4>{item.menu_name}</h4>
                          </div>
                          <div className="bottom_wrap">
                            {
                              parser.parseFromString(
                                item.body_content,
                                "text/html"
                              ).body.innerText
                            }
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="sponsor">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section_header">
                  <h4> OUR SPONSORS </h4>
                </div>
              </div>
            </div>
            <div className="sponsor_wrapper" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-1"></div>
                {data.sponsors &&
                  data.sponsors.map((item) => {
                    return (
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="sponsor_wrap">
                          <a href={item.website_url} target="_blank">
                            <img
                              src={`https://icircles.app/${item.sponsor_logo}`}
                              alt=""
                            />
                            <br></br>
                          </a>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="news">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section_header">
                  <h4> NEWS AND ANNOUNCEMENT </h4>
                </div>
              </div>
            </div>
            <div className="news_wrapper">
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                  <div className="news_imgSlide">
                    <Slider {...settings_slide} className="">
                      {data.no_position &&
                        data.no_position.slice(6, 10).map((item) => {
                          return (
                            <div className="news_slider">
                              <img
                                src={`https://icircles.app/uploads/content/${item.microsite_id}/${item.featured_image}`}
                              />
                              <div className="news_slider-overlay"></div>
                              <a href="#">
                                {
                                  parser.parseFromString(
                                    item.page_title,
                                    "text/html"
                                  ).body.innerText
                                }
                              </a>
                            </div>
                          );
                        })}
                    </Slider>
                  </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="news_info text-center">
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
        <div className="convention">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="convention_wrapper text-center">
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
        <div className="donate_banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section_header">
                  <h4>DONATE TO BMANA DISASTER RELIEF FUND</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="donate">
          <div className="container">
            <div className="donate_wrapper">
              <div className="row">
                <div className="donate_textWrap">
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
              <div className="donate_site">
                <div className="row align-items-center">
                  <div className="col-md-6 col-lg-6 text-center">
                    <div className="donate_marker">
                      <div className="donate_entry"></div>
                    </div>
                    <a href="#">Donate Here</a>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="donate_right">
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
        <div className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section_header">
                  <h4>NEWSLETTER SIGN UP</h4>
                  <p> Subscribe to our newsletter for regular updates</p>
                </div>
                <div className="newsletter_wrapper">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <div className="newsletter_search">
                        <form action="#">
                          <input
                            className="form_control"
                            type="text"
                            placeholder="yourmail@mail.com"
                          />
                        </form>
                        <div className="news_serchBtn">
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

      <Footer nav={data.foot_nav && data.foot_nav} />
    </div>
  );
}
