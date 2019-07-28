import React from "react";
import { Redirect, Link } from "react-router-dom";
export class SideMenu extends React.Component {
  render() {
    return (
      <div>
        <div className="border-bottom p-4">
          <div className="osahan-user text-center">
            <div className="osahan-user-media">
              <img
                className="mb-3 rounded-pill shadow-sm mt-1"
                src={require("../../img/profile-avatar.png")}
                alt={this.props.fnameCamelcased}
              />
              <div className="osahan-user-media-body">
                <h6 className="mb-2">{this.props.fnameCamelcased}</h6>
                <p className="mb-1">{this.props.lastName}</p>
                <p>{this.props.email}</p>
                <p className="mb-0 text-black font-weight-bold">
                  <Link
                    className="text-primary mr-3"
                    data-toggle="modal"
                    data-target="#edit-profile-modal"
                    to=""
                  >
                    <i className="icofont-ui-edit" /> EDIT
                  </Link>
                </p>
              </div>
              <hr />

              <div className="osahan-user-media-body">{this.props.children}</div>
              <button
                type="button"
                class="btn btn-info"
                onClick={this.props.openHandler}
              >
                SUBMIT CHILD DETAILS
              </button>
            </div>
          </div>
        </div>
        <ul
          className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="orders-tab"
              data-toggle="tab"
              href="#orders"
              role="tab"
              aria-controls="orders"
              aria-selected="true"
            >
              <i className="icofont-food-cart" /> Orders
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="offers-tab"
              data-toggle="tab"
              href="#offers"
              role="tab"
              aria-controls="offers"
              aria-selected="false"
            >
              <i className="icofont-sale-discount" /> Offers
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="favourites-tab"
              data-toggle="tab"
              href="#favourites"
              role="tab"
              aria-controls="favourites"
              aria-selected="false"
            >
              <i className="icofont-heart" /> Favourites
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="payments-tab"
              data-toggle="tab"
              href="#payments"
              role="tab"
              aria-controls="payments"
              aria-selected="false"
            >
              <i className="icofont-credit-card" /> Payments
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="addresses-tab"
              data-toggle="tab"
              href="#addresses"
              role="tab"
              aria-controls="addresses"
              aria-selected="false"
            >
              <i className="icofont-location-pin" /> Addresses
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
