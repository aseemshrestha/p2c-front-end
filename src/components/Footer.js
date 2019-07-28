import React from "react";
import { Link } from "react-router-dom";
import { DOMAIN_NAME} from "../constants/Constants";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small blue-grey lighten-5">
        <div style={{ "backgroundColor": "#1da1f2" }}>
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <Link to="#" style={{ color: "#ffffff" }}>
                  Terms & Conditions{" "}
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="#" style={{ color: "#ffffff" }}>
                  Blog
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="#" style={{ color: "#ffffff" }}>
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center text-black-20 py-3">
          © 2019 Copyright:
          <Link className="dark-grey-text" to="/">
            {" "}
            {DOMAIN_NAME}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
