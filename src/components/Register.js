import React from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import ApiService from "../service/ApiService";

class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    ApiService.createNewAccount(this.state)
      .then(response => {
        if (response.status === 201) {
          this.setState({
            firstName: "",
            lastName: "",
            password: "",
            email: ""
          });
          this.setState({
            message: `Account has been successfully created. You may now login.`
          });
        }
      })
      .catch(error => {
        if (error.response.status === 409) {
          this.setState({
            message: error.response.data.message + ". Please try again."
          });
        } else {
          console.log("Unavailable !");
        }
      });
  };

  render() {
    const { firstName, lastName, password, email } = this.state;
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
                        {this.state.message && (
                          <div className="text-left pt-4 text-danger">
                            {this.state.message}
                          </div>
                        )}
                        <h3 className="login-heading mb-4">Create Account</h3>
                        <form onSubmit={this.submitHandler}>
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputFirstName"
                              className="form-control"
                              placeholder="firstName"
                              name="firstName"
                              onChange={this.changeHandler}
                              value={firstName}
                            />
                            <label htmlFor="inputFirstName">FirstName</label>
                          </div>
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputLastName"
                              className="form-control"
                              placeholder="lastname"
                              name="lastName"
                              onChange={this.changeHandler}
                              value={lastName}
                            />
                            <label htmlFor="inputLastName">LastName</label>
                          </div>
                        
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputEmail"
                              className="form-control"
                              placeholder="email"
                              name="email"
                              onChange={this.changeHandler}
                              value={email}
                            />
                            <label htmlFor="inputEmail">Email</label>
                          </div>
                          <div className="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              className="form-control"
                              placeholder="Password"
                              name="password"
                              onChange={this.changeHandler}
                              value={password}
                            />
                            <label htmlFor="inputPassword">Password</label>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                          >
                            Sign up
                          </button>
                          <div className="text-center pt-3">
                            Already have an account ?{" "}
                            <Link className="font-weight-bold" to="/">
                              Sign In
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

export default Register;
