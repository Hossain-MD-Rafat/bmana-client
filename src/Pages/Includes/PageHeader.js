import React from "react";
import { Link } from "react-router-dom";

export default function PageHeader(props) {
  return (
    <header>
      <div class="SubpageHeader">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="SubpageHeader_wrapper">
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
                                <Link to={`/page/${props.ms_id}/${navItem.id}`}>
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
                    <div class="login_btn text-center">
                      <a href="#">
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
  );
}
