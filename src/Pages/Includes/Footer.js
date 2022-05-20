import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div>
      <section>
        <div class="copyright">
          <div class="container">
            <div class="copyright_wrapper">
              <div class="row">
                <div class="col-lg-7">
                  <h4>@copyright 2022. All Rights Reserved by iCircles LLC.</h4>
                </div>
                <div class="col-lg-5 d-flex justify-content-end align-items-center">
                  <h4>
                    {" "}
                    {props.nav && props.nav.map((item) => {
                      return (
                        <Link to={`/page/${item.microsite_id}/${item.id}`}>
                          {item.menu_name}
                        </Link>
                      );
                    })}
                  </h4>
                  <div class="icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="#" class="backtotop"></a>
    </div>
  );
}
