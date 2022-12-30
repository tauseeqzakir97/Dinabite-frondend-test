import React from "react";
import { Container } from "./Sidebar.style";
import { Link, NavLink } from "react-router-dom";

import { menu_icon_array_1 } from "../../JasonData/Nav_routes";

import Acc_Icon_gray from "../../asset/images/account_gray.svg";
import Acc_Icon_color from "../../asset/images/account_color.svg";

import Chat_Icon_gray from "../../asset/images/chat_gray.svg";
import Chat_Icon_color from "../../asset/images/chat_color.svg";

import Logout_Icon_gray from "../../asset/images/logout_gray.svg";
import Logout_Icon_color from "../../asset/images/logout_color.svg";

import Logo from "../../asset/logo/dinabite.png";
import { useState } from "react";

const SidebarItems = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className={`sidebar__item-inner ${active}`}>
      <img src={active ? props.icon : props.white} width={24} alt="images" />
      <span>{props.title}</span>
      {active && <span></span>}
    </div>
  );
};

const Sidebar = (props) => {
  const [show, setShow] = useState(false);
  const activeItems = menu_icon_array_1.findIndex(
    (item) => item.route === props.location.pathname
  );

  const active_1 = window.location.pathname === "/account" ? "active_1" : "";
  const active_2 = window.location.pathname === "/help" ? "active_1" : "";

  const handle = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Container>
        <NavLink to="/" className="sidebar_logo">
          <img src={Logo} width={130} alt="Dinabite" />
        </NavLink>
        <hr />
        <div className="wrapper-link">
          {menu_icon_array_1.map((item, index) => (
            <Link to={item.route} key={index}>
              <SidebarItems
                title={item.display_name}
                icon={item?.icon}
                white={item?.white}
                active={index === activeItems}
              />
            </Link>
          ))}
          <hr />
          <NavLink to="/account">
            <div className={`sidebar__item-inner ${active_1}`}>
              <img
                src={active_1 ? Acc_Icon_color : Acc_Icon_gray}
                width={24}
                alt="images"
              />
              <span>Account</span>
              {active_1 && <span></span>}
            </div>
          </NavLink>
          <NavLink to="/help">
            <div className={`sidebar__item-inner ${active_2}`}>
              <img
                src={active_2 ? Chat_Icon_color : Chat_Icon_gray}
                width={24}
                alt="images"
              />
              <span>Help</span>
              {active_2 && <span></span>}
            </div>
          </NavLink>
          <hr />
          <button onClick={handle}>
            <img
              src={show ? Logout_Icon_color : Logout_Icon_gray}
              width={24}
              alt="images"
            />
            <span className={show ? "active" : ""}>Logout</span>
          </button>
        </div>
      </Container>
    </>
  );
};

export default Sidebar;
