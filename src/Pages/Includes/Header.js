import React from "react";

export default function (props) {
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
                          {props.mainNav &&
                            props.mainNav.map((navItem) => {
                              return (
                                <li>
                                  <a href="about.html">
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
                                  </a>
                                  {navItem.sub_nav.length > 0 && (
                                    <ul class="sub_down">
                                      {navItem.sub_nav.map((item) => {
                                        return (
                                          <li>
                                            <a href="about.html">
                                              {item.menu_name}
                                            </a>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  )}
                                </li>
                              );
                            })}
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
              {props.mainNav &&
                props.mainNav.map((navItem) => {
                  return (
                    <div class="nav_list">
                      <div class="dropdown">
                        <a href="#" class="js-link1">
                          {navItem.menu_name}
                          <i class="fa fa-chevron-down"></i>
                        </a>

                        {navItem.sub_nav.length > 0 && (
                          <ul class="js-dropdown-list1">
                            {navItem.sub_nav.map((item) => {
                              return (
                                <li>
                                  <a href="#">{item.menu_name}</a>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
