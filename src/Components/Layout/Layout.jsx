import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Routes from "../Routes";
import styled from "styled-components";
import Scrollbars from "react-custom-scrollbars";

const ContainerWrapper = styled("div")`
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .wrapper-main {
    display: flex;
    flex-direction: row;
  }

  .glass-wrapper {
    background: #fef4f5;
    border-radius: 15px 0px 0px 0px;
    width: 100%;
  }

  .main {
    width: 100%;
    z-index: 999999;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.1);
    border-radius: 15px 0px 0px 0px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
  }
`;

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <ContainerWrapper>
            <div className="container">
              <div className="wrapper-main">
                <div className="left-sidebar">
                  <Sidebar {...props} />
                </div>
                <div className="glass-wrapper">
                  <div className="main" style={{ height: "100vh" }}>
                    <Scrollbars style={{ height: "100vh" }}>
                      <Routes />
                    </Scrollbars>
                  </div>
                </div>
              </div>
            </div>
          </ContainerWrapper>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
