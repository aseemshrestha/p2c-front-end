import React from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import {
  LOGO_NAME,
  SESSION_STORAGE_TOKEN,
  SESSION_STORAGE_USERNAME
} from "../constants/Constants";

class Navbar extends React.Component {
  state = {
    isLoggedInUser: false
  };
  componentDidMount() {
    if (sessionStorage.getItem(SESSION_STORAGE_USERNAME)) {
      this.setState({
        isLoggedInUser: true
      });
    }
  }
  logoutHandler() {
    sessionStorage.removeItem(SESSION_STORAGE_TOKEN);
    sessionStorage.removeItem(SESSION_STORAGE_USERNAME);
     window.location.href = "/";
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom static-top">
          <div className="container">
          {this.state.isLoggedInUser === true ? ( 
            <Link className="navbar-brand" to="/dashboard">
              {LOGO_NAME}
            </Link>) :( <Link className="navbar-brand" to="/">
              {LOGO_NAME}
            </Link>)}
           
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {this.state.isLoggedInUser === true ? (
                    <Link className="nav-link" to="/dashboard">
                      Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  ) : (
                    <Link className="nav-link" to="/">
                      Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  )}
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                {this.state.isLoggedInUser === true ? (
                  <li className="nav-item">
                    <Link
                      to=""
                      className="nav-link"
                      onClick={this.logoutHandler}
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
