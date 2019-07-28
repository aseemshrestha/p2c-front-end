import React from "react";
import { Link } from "react-router-dom";
import "../css/App.css";

const ForgotPassword = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-5 col-lg-6 bg-image" />
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
                      <h3 className="login-heading mb-4">Recover Password</h3>
                      <form>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputUsername"
                            className="form-control"
                            placeholder="username"
                          />
                          <label for="inputUsername">Username or Email</label>
                        </div>

                        <Link
                          to="#"
                          className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        >
                          SUBMIT
                        </Link>
                        <div className="text-center pt-3">
                          Don’t have an account ?{" "}
                          <Link className="font-weight-bold" to="/register">
                            Sign Up
                          </Link>
                        </div>
                        <div className="text-center pt-3">
                          Have password ?{" "}
                          <Link className="font-weight-bold" to="/">
                            Login Now
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
