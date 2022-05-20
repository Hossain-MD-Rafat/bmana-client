import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModalContext } from "../../App";

export default function (props) {
  const { show, handleShow, handleClose } = useContext(ModalContext);
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
                            <Link to="/">
                              {" "}
                              <span>
                                <i class="fa-solid fa-house"></i>
                              </span>{" "}
                              Home
                            </Link>
                          </li>
                          {props.mainNav &&
                            props.mainNav.map((navItem) => {
                              return (
                                <li>
                                  <Link
                                    to={`/page/${props.ms_id}/${navItem.id}`}
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
                                            <Link
                                              to={`/page/${props.ms_id}/${navItem.id}`}
                                            >
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
                        </ul>
                      </div>
                      <div class="login_btn text-center">
                        <a href="" onClick={handleShow}>
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
                  <Link to="/">Home</Link>
                </div>
              </div>
              {props.mainNav &&
                props.mainNav.map((navItem) => {
                  return (
                    <div class="nav_list">
                      <div class="dropdown">
                        <Link
                          to={`/page/${props.ms_id}/${navItem.id}`}
                          className="js-link1"
                        >
                          {navItem.menu_name}
                          {navItem.menu_name}
                          <i class="fa fa-chevron-down"></i>
                        </Link>

                        {navItem.sub_nav.length > 0 && (
                          <ul class="js-dropdown-list1">
                            {navItem.sub_nav.map((item) => {
                              return (
                                <li>
                                  <Link to={`/page/${props.ms_id}/${item.id}`}>
                                    {item.menu_name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              <div class="nav_list">
                <div class="dropdown">
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} id="modal_1" size="lg">
        <Modal.Header closebutton>
          <Modal.Title></Modal.Title>
          <button
            variant="secondary"
            className="modal-close"
            onClick={handleClose}
          >
            <i class="fas fa-times"></i>
          </button>
        </Modal.Header>

        <Modal.Body>
          <div class="row">
            <div class="col-12 col-xl-12">
              <div class="modal-body">
                <div class="header_info">
                  <img src="assets/images/bmana.png" alt="" />
                  <h5>
                    Bmana - Bangladesh Medical Association of North America
                  </h5>
                </div>
                <ul
                  class="nav nav-pills mb-3 text-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Sign In
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Sign Up
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div class="row">
                      <div class="col-lg-2"></div>
                      <div class="col-lg-8">
                        <div class="signIn_body">
                          <div class="signin_form">
                            <div class="row">
                              <div class="col-lg-12">
                                <form action="#">
                                  <input
                                    type="text"
                                    class="form_control"
                                    placeholder="Email / Username"
                                  />
                                </form>

                                <form action="#">
                                  <input
                                    type="password"
                                    class="form_control"
                                    placeholder="Password"
                                  />
                                </form>
                                <div class="continue_btn">
                                  <a href="#">
                                    {" "}
                                    <img src="assets/images/logo.png" alt="" />
                                    Log In
                                  </a>
                                </div>
                                <div class="forget_setion">
                                  <span>
                                    <input type="checkbox" /> Remember Me
                                  </span>

                                  <a href="#" style={{ color: "#0069cf" }}>
                                    Forgot Password
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2"></div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div class="signUp_body">
                      <div class="signUp_form">
                        <div class="row">
                          <div class="col-lg-12">
                            <form action="#" class="d-flex">
                              <input
                                type="text"
                                style={{ marginRight: "10px" }}
                                class="form_control"
                                placeholder="First Name"
                              />
                              <input
                                type="text"
                                class="form_control"
                                placeholder="Last Name"
                              />
                            </form>

                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="Home Address"
                              />
                            </form>
                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="Office Address"
                              />
                            </form>
                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="Faculty Affiliations & Speciations"
                              />
                            </form>
                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="Telephone"
                              />
                            </form>
                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="Call"
                              />
                            </form>
                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="E-mail"
                              />
                            </form>
                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="Medical School"
                              />
                            </form>
                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="State of Medical Licensure"
                              />
                            </form>
                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="License"
                              />
                            </form>
                            <form action="#">
                              <input
                                type="text"
                                class="form_control"
                                placeholder="Date"
                              />
                            </form>
                            <div class="statement">
                              <ul>
                                <li>
                                  <a href="#">
                                    <form action="#">
                                      <input type="checkbox" /> To The Best of
                                      my knowledge, the information is the
                                      correct status of my professional
                                      activity.
                                    </form>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <form action="#">
                                      <input type="checkbox" /> I agree to
                                      disclose above information's for BMANA
                                      membership registry & publication.
                                    </form>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="continue_btn">
                              <a href="#">
                                {" "}
                                <img src="assets/images/logo.png" alt="" />
                                Registration
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
