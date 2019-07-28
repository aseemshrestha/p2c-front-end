import React, { Component } from "react";
import _ from "lodash";
import { Modal } from "react-bootstrap";
import ApiService from "../../service/ApiService";

class ChildModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childFirstName: "",
      childLastName: "",
      childGender: "",
      childDob: ""
    };
  }
  
  submitFormHandler = e => {
    e.preventDefault();
    let childObj = {
      firstName: this.state.childFirstName,
      lastName: this.state.childLastName,
      gender: this.state.childGender,
      dob: this.state.childDob
    };
    ApiService.registerChild(childObj)
      .then(response => {
        if (response.status === 201) {
          this.setState({
            childFirstName: "",
            childLastName: "",
            childGender: "",
            childDob: ""
          });
          this.setState({
            message: `Thank you for your submission.`
          });
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Child details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.message && (
            <div className="text-left pt-4 text-danger">
              {this.state.message}
              <br />
            </div>
          )}

          <form onSubmit={this.submitFormHandler}>
            <div className="form-group">
              <label htmlFor="text">Child FirstName</label>
              <input
                type="text"
                className="form-control"
                id="text"
                name="childFirstName"
                onChange={this.changeHandler}
                value={this.state.childFirstName}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="text">Child LastName</label>
              <input
                type="text"
                className="form-control"
                id="text"
                name="childLastName"
                onChange={this.changeHandler}
                value={this.state.childLastName}
              />
            </div>
            <select
              className="custom-select"
              name="childGender"
              onChange={this.changeHandler}
              value={this.state.childGender}
            >
              <option value>Gender</option>
              <option value="MALE">Boy</option>
              <option value="FEMALE">Girl</option>
            </select>
            <br />
            <br />
            <div className="form-group">
              <label htmlFor="date">Date Of Birth</label>
              <input
                className="form-control"
                type="date"
                name="childDob"
                value={this.state.childDob}
                onChange={this.changeHandler}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </div>
    );
  }
}
export default ChildModal;
