import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Header = ({ user }) => {
  const [userPaneVisibility, setUserPaneVisibility] = useState(false);
  const changeUserPaneVisibility = () => {
    setUserPaneVisibility(!userPaneVisibility);
  };

  return (
    <header>
      <div className="container">
        <p>
          Shopping<span>Bag</span>
        </p>
        <nav>
          <ul className="outer">
            <li>
              <NavLink
                to="/products"
                className={`navlink ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shops"
                className={`navlink ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                Shops
              </NavLink>
            </li>
            {user && (
              <Fragment>
                <li>
                  <NavLink
                    to="/my-bags"
                    className={`navlink ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    My-Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trash"
                    className={`navlink ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    Trash-bucket
                  </NavLink>
                </li>
              </Fragment>
            )}
            {user ? (
              <li className="user">
                <div className="flex-row" onClick={changeUserPaneVisibility}>
                  <FontAwesomeIcon icon={solid("user")} size="1x" />
                  <p className="capitalize">{user.lastName}</p>
                  <FontAwesomeIcon
                    icon={
                      userPaneVisibility
                        ? solid("caret-down")
                        : solid("caret-left")
                    }
                    size="1x"
                  />
                </div>
                <div
                  className={
                    userPaneVisibility
                      ? "user-deatails-pane user-details-pane-visible"
                      : "user-deatails-pane"
                  }
                  onMouseLeave={changeUserPaneVisibility}
                >
                  <div className="flex-row your-account">
                    <FontAwesomeIcon icon={solid("user")} size="1x" />
                    <p>Your Account</p>
                  </div>
                  <div className="flex-row customer-detail">
                    <p title={`${user.firstName} ${user.lastName}`}>CUSTOMER</p>
                    <p className="capitalize">
                      {`${user.firstName} ${user.lastName}`.length > 15
                        ? `${user.firstName} ${user.lastName}`.substring(
                            0,
                            15
                          ) + "..."
                        : `${user.firstName} ${user.lastName}`}
                    </p>
                  </div>
                  <div className="flex-row username-detail">
                    <p title={user.sub}>USERNAME</p>
                    <p>
                      {`${user.sub}`.length > 15
                        ? `${user.sub}`.substring(0, 15) + "..."
                        : `${user.sub}`}
                    </p>
                  </div>
                  <hr />
                  <ul className="inner">
                    <li>
                      <div className="pane-record">
                        <p className="profile">Profile</p>
                      </div>
                    </li>
                    <li>
                      <div className="pane-record">
                        <NavLink className={"logout"} to={"/logout"}>
                          Sign out
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <li>
                <Link to="/login" style={linkStyle}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#707070",
};

export default Header;
