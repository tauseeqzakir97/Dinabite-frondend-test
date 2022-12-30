import React from "react";
import TopNav from "../TopNav/TopNav";
import { DashboardContainer } from "./Dashboard.style";
import Tabs from "../Tabs/Tabs";
import { Notifications_Data } from "../../JasonData/Notification_data";
import ActiveTools from "../ActiveTools/ActiveTools";
import Activity from "../Activity/Activity";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <TopNav title="Dashboard" />
      <div className="main-wrapper">
        <Tabs />
        <div className="notification-wrapper">
          <h3>Latest messages</h3>
          <div className="info-box-wrapper">
            {Notifications_Data.map((item, index) => {
              return (
                <div className="box" key={index}>
                  <div className="box-item">
                    <div>
                      <img src={item.icon} alt={item.icon_name} width={40} />
                    </div>
                    <div className="box-text">
                      <span>{item.user_name}</span>
                      <span>{item.user_comment}</span>
                    </div>
                  </div>
                  <button>{item.response_Status}</button>
                </div>
              );
            })}
          </div>
        </div>
        <ActiveTools />
        <Activity />
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
