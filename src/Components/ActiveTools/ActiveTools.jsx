import React from "react";
import styled from "styled-components";

// Social Icons //
import Social_Icon_1 from "../../asset/images/social_icons/face.webp";
import Social_Icon_2 from "../../asset/images/social_icons/insta.webp";
import Social_Icon_3 from "../../asset/images/social_icons/google.webp";
import Social_Icon_4 from "../../asset/images/social_icons/twitter.webp";

const ActiveTools = () => {
  return (
    <ActiveContainer>
      <span>Active Tools</span>
      <div className="social-icons">
        <img src={Social_Icon_1} alt="FaceBook" />
        <img src={Social_Icon_2} alt="Instagram" />
        <img src={Social_Icon_3} alt="Google" />
        <img src={Social_Icon_4} alt="Twitter" />
      </div>
    </ActiveContainer>
  );
};

export default ActiveTools;

const ActiveContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-weight: 700;
  }

  .social-icons {
    display: flex;
    gap: 10px;
    cursor: pointer;

    img {
      max-width: 45px;
    }
  }
`;
