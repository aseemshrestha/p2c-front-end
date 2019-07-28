import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import _ from "lodash";
class Welcome extends Component {
  postHandler = () => {
    this.props.history.push("/post");
  };
  render() {
    const name = _.startCase(_.camelCase(this.props.name));

    return (
      <div>
        <div className="alert alert-success" role="alert">
          <p className="mb-0">
            Hey {name}, You haven't posted anything yet. Save, share your
            beautiful moments so that you cherish later.
            <br />
            <br />
            <button
              type="button"
              class="btn btn-info"
              onClick={this.postHandler}
            >
              POST
            </button>
          </p>
        </div>
      </div>
    );
  }
}
export default withRouter(Welcome);
