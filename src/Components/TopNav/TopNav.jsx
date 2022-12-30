import React from "react";
import { TopNavContainer } from "./TopNav.styles";

const TopNav = ({ title, padding }) => {
  return (
    <TopNavContainer StylePro={padding}>
      <h2>{title}</h2>
      <hr />
    </TopNavContainer>
  );
};

export default TopNav;
