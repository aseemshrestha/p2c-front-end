import React from "react";

export const RightMenu = () => {
  return (
    <div>
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
            aria-selected="false"
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
