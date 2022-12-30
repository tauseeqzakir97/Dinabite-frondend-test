import React from "react";
import styled from "styled-components";

const Activity = () => {
  return (
    <ActivityContainer>
      <span>Activity</span>
      <div className="activity-wrapper">
        <div className="activity-box">
          <span>New Posts</span>
          <span>0</span>
        </div>
        <div className="activity-box">
          <span>Ad Spend</span>
          <span>$0.00</span>
        </div>
      </div>
      <span>Reach and Engagement</span>
      <div className="activity-wrapper">
        <div className="activity-box">
          <span>Views</span>
          <span>0</span>
          <span>%0</span>
        </div>
        <div className="activity-box">
          <span>Engagement</span>
          <span>0</span>
          <span>%0</span>
        </div>
      </div>
    </ActivityContainer>
  );
};

export default Activity;

const ActivityContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .activity-wrapper {
    display: flex;
    gap: 20px;

    .activity-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      width: 100%;
      max-width: 190px;
      min-height: 110px;
      padding: 20px 0px;
      border-radius: 8px;
      gap: 5px;

      span:nth-child(1) {
        color: #999a9d;
        font-family: "Poppins", sans-serif;
      }
      span:nth-child(2) {
        color: #000;
        font-size: 32px;
        font-family: "Poppins", sans-serif;
      }
      span:nth-child(3) {
        color: #d6d6d6;
        font-size: 16px;
        font-family: "Poppins", sans-serif;
      }
    }
  }
  span {
    font-weight: 700;
  }
`;
