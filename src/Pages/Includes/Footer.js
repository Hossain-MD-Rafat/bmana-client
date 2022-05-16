import React from "react";

export default function Footer() {
  return (
    <div>
      <section>
        <div class="copyright">
          <div class="container">
            <div class="copyright_wrapper">
              <div class="row">
                <div class="col-lg-7">
                  <h4>
                    @copyright 2022. All Rights Reserved by iCircles USA
                    Bangladesh Ltd.
                  </h4>
                </div>
                <div class="col-lg-5 d-flex justify-content-end align-items-center">
                  <h4>
                    {" "}
                    <a href="#">Privecy</a> <a href="#">Service</a>{" "}
                    <a href="#"> Terms</a>
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
