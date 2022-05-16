import React from "react";

export default function () {
  return (
    <div>
      <header>
        <div class="header">
          <div class="container">
            <div class="row d-lg-block d-none">
              <div class="col-lg-12 text-end">
                <div class="header_wrapper">
                  <div class="header_search">
                    <form action="#">
                      <input
                        class="form_control"
                        type="text"
                        placeholder="Search"
                      />
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </form>
                  </div>
                  <div class="language">
                    <a href="#">
                      ENG{" "}
                      <span>
                        <i class="fa-solid fa-caret-down"></i>
                      </span>
                    </a>
                    <ul class="sub_dom">
                      <li>
                        <a href="#">BAN</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row d-block d-lg-none">
              <div class="col-lg-12 text-end">
                <a
                  href="#"
                  class="moble_navbar d-block d-lg-none nav_toggol"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight2"
                  aria-controls="offcanvasRight2"
                >
                  {" "}
                  <i class="fa-solid fa-bars"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header>
        <div class="headerPartTwo d-lg-block d-none">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="headerPartTwo_wrapper">
                  <div class="sideBar_wrapper">
                    <div class="sideBar_contain">
                      <div class="logo text-center">
                        <img src="images/bmana.png" alt="" />
                      </div>
                      <div class="nav_list">
                        <ul>
                          <li>
                            <a href="index.html">
                              {" "}
                              <span>
                                <i class="fa-solid fa-house"></i>
                              </span>{" "}
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="about.html">
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
                                <a href="about.html">About BMANA</a>
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
                            <a href="mambership.html">
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
                            <a href="media.html">
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
                            <a href="event.html">
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
                            <a href="resource.html">
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
                            <a href="chapter.html">
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
                            <a href="contact.html">
                              {" "}
                              <span>
                                <i class="fa-solid fa-phone"></i>
                              </span>{" "}
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="login_btn text-center">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop2"
                        >
                          {" "}
                          <span>
                            <i class="fa-solid fa-user"></i>
                          </span>{" "}
                          Member Login
                        </a>
                      </div>
                      <div class="header_search">
                        <form action="#">
                          <input
                            class="form_control"
                            type="text"
                            placeholder="Search"
                          />
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div class="navbar_toggoler">
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight2"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <img src="images/bmana.png" alt="" />
              <h5 id="offcanvasRightLabel"></h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="nav_list">
                <div class="dropdown">
                  <a href="#">Home</a>
                </div>
              </div>
              <div class="nav_list">
                <div class="dropdown">
                  <a href="#" class="js-link1">
                    About Us<i class="fa fa-chevron-down"></i>
                  </a>
                  <ul class="js-dropdown-list1">
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
                </div>
              </div>
              <div class="nav_list">
                <div class="dropdown">
                  <a href="#" class="js-link2">
                    Mambership<i class="fa fa-chevron-down"></i>
                  </a>
                  <ul class="js-dropdown-list2">
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
                </div>
              </div>
              <div class="nav_list">
                <div class="dropdown">
                  <a href="#" class="js-link3">
                    Media <i class="fa fa-chevron-down"></i>
                  </a>
                  <ul class="js-dropdown-list3">
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
                </div>
              </div>
              <div class="nav_list">
                <div class="dropdown">
                  <a href="#" class="js-link4">
                    Events<i class="fa fa-chevron-down"></i>
                  </a>
                  <ul class="js-dropdown-list4">
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
                </div>
              </div>
              <div class="nav_list">
                <div class="dropdown">
                  <a href="#" class="js-link5">
                    Resources <i class="fa fa-chevron-down"></i>
                  </a>
                  <ul class="js-dropdown-list5">
                    <li>
                      <a href="#">About BMANA</a>
                    </li>
                    <li>
                      <a href="#">Mission and Vision</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="nav_list">
                <div class="dropdown">
                  <a href="#" class="js-link6">
                    Chapters <i class="fa fa-chevron-down"></i>
                  </a>
                  <ul class="js-dropdown-list6">
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
                  </ul>
                </div>
              </div>
              <div class="nav_list">
                <div class="dropdown">
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
