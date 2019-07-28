import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import ApiService from "../service/ApiService";
import {
  SESSION_STORAGE_TOKEN,
  SESSION_STORAGE_USERNAME
} from "../constants/Constants";

class Home extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  focusHandler = e => {
    this.setState({
      message: ""
    });
  };

  submitHandler = e => {
    e.preventDefault();
    ApiService.login(this.state)
      .then(response => {
        if (response.status === 200) {
          sessionStorage.setItem(
            SESSION_STORAGE_TOKEN,
            response.headers.authorization
          );
          let username = this.state.username;
          sessionStorage.setItem(SESSION_STORAGE_USERNAME, username);
          window.location.href = "/dashboard";
        }
      })
      .catch(error => {
        if (error.response !== undefined && error.response.status === 401) {
          this.setState({
            message: `Wrong username and password. Please try again.`
          });
        } else {
          console.log("Unavailable !");
        }
      });
  };

  render() {
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
                        <h3 className="login-heading mb-4">Sign In</h3>
                        {this.state.message && (
                          <div className="text-left pt-4 text-danger">
                            {this.state.message}
                          </div>
                        )}
                        <form onSubmit={this.submitHandler}>
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputUsername"
                              className="form-control"
                              placeholder="username"
                              name="username"
                              onChange={this.changeHandler}
                              onFocus={this.focusHandler}
                              required
                            />
                            <label htmlFor="inputUsername">Email</label>
                          </div>
                          <div className="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              className="form-control"
                              placeholder="Password"
                              name="password"
                              onChange={this.changeHandler}
                              onFocus={this.focusHandler}
                              required
                            />
                            <label htmlFor="inputPassword">Password</label>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                          >
                            Sign in
                          </button>
                          <div className="text-center pt-3">
                            Don’t have an account ?{" "}
                            <Link className="font-weight-bold" to="/register">
                              Sign Up
                            </Link>
                          </div>
                          <div className="text-center pt-3">
                            Forgot Password ?{" "}
                            <Link
                              className="font-weight-bold"
                              to="/forgotpassword"
                            >
                              Let's get it back
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
  }
}

export default Home;
