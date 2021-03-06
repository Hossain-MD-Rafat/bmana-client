import React, { useContext } from "react";
import { DataContext } from "../App";
import Footer from "./Includes/Footer";
import PageHeader from "./Includes/PageHeader";

export default function Contact() {
  const { data } = useContext(DataContext);
  return (
    <div>
      <PageHeader mainNav={data.main_nav} ms_id={data.ms_id}/>
      <section>
        <div class="contact" id="contact">
          <div class="container">
            <div class="contact_wrapper">
              <div class="row">
                <div class="col-lg-12 p-0">
                  <div class="contect_info">
                    <h4>Contact Information</h4>
                    <p>
                      Content here, content here', making it look like readable
                      English. Many desktop publishing packages. Looking for
                      help? Fill the form and start a new adventure.
                    </p>
                    <div class="row">
                      <div class="col-lg-6">
                        <ul>
                          <li>
                            <a href="#">
                              <span>
                                <i class="fa-brands fa-whatsapp"></i>
                              </span>{" "}
                              987-654-321
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <i class="fa-solid fa-envelope"></i>
                              </span>{" "}
                              example@website.com
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <i class="fa-solid fa-link"></i>
                              </span>
                              www.website.com
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <i class="fa-solid fa-location-dot"></i>
                              </span>{" "}
                              New York, United States
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-6">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="form_wrapper">
                              <form action="#">
                                <input
                                  class="form_control"
                                  type="text"
                                  placeholder="Full Name"
                                />
                              </form>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="form_wrapper">
                              <form action="#">
                                <input
                                  class="form_control"
                                  type="text"
                                  placeholder="E-mail Address"
                                />
                              </form>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="form_wrapper">
                              <form action="#">
                                <textarea
                                  class="form_control massage"
                                  type="text"
                                  placeholder="Massage"
                                ></textarea>
                              </form>
                            </div>
                          </div>
                          <div class="col-lg-12 mt-5">
                            <div class="contact_btn text-end">
                              <a href="#">Contact</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="icons_linker">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa-brands fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-brands fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer nav={data.foot_nav && data.foot_nav}/>
    </div>
  );
}
