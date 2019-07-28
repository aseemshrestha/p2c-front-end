import React, { Component } from "react";
import "../css/App.css";
import ApiService from "../service/ApiService";
import { Redirect, Link } from "react-router-dom";
import {
  SESSION_STORAGE_TOKEN,
  SESSION_STORAGE_USERNAME
} from "../constants/Constants";
import { SideMenu } from "./pageComponents/SideMenu";
import { RightMenu } from "./pageComponents/RightMenu";
import Welcome from "./pageComponents/Welcome";
import { Alert } from "reactstrap";
import _ from "lodash";
import Moment from "react-moment";
import ChildModal from "./pageComponents/ChildModal";
import { Modal } from "react-bootstrap";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      child: [],
      redirect: false
    };
  }

  logoutHandler = e => {
    sessionStorage.removeItem(SESSION_STORAGE_TOKEN);
    sessionStorage.removeItem(SESSION_STORAGE_USERNAME);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      child: [],
      redirect: true,
      message: ""
    });
  };

  closeHandler = () => {
    this.setState({ showModal: false, message: "" });
  };

  openHandler = () => {
    this.setState({ showModal: true });
  };

  componentDidMount() {
    if (
      sessionStorage.getItem(SESSION_STORAGE_TOKEN) &&
      sessionStorage.getItem(SESSION_STORAGE_USERNAME)
    ) {
      const data = sessionStorage.getItem(SESSION_STORAGE_USERNAME);
      ApiService.getParentData(data).then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          child: response.data.child
        });
      });
    } else {
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }
    const fnameCamelcased = _.startCase(_.camelCase(this.state.firstName));
    const hasChild = this.state.child.length > 0;
    const children = hasChild ? (
      this.state.child.map(c => {
        return (
          <div className="alert alert-success" role="alert" key={c.id}>
            {c.firstName} is now <Moment date={c.dob} durationFromNow /> old.
          </div>
        );
      })
    ) : (
      <Alert color="info">
        {" "}
        {fnameCamelcased}, you haven't entered child details yet.
        <br />
      </Alert>
    );

    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.closeHandler}>
          <ChildModal />
        </Modal>
        <section className="section pt-4 pb-4 osahan-account-page">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="osahan-account-page-left shadow-sm bg-white h-100">  
                  {/* Site item component */}
                  <SideMenu
                    email={this.state.email}
                    fnameCamelcased={fnameCamelcased}
                    lastName={this.state.lastName}
                    children={children}
                    openHandler={this.openHandler}
                  />
                </div>
              </div>
              <div className="col-md-6" id="contentId">
                <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="orders"
                      role="tabpanel"
                      aria-labelledby="orders-tab"
                    >
                      <Welcome name={this.state.firstName} />
                    </div>
                  </div>
                </div>
              </div>
      
              <RightMenu />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Post;
