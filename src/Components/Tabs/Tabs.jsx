import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Tabs = () => {
  const [tabs, setTabs] = useState({
    status_1: true,
    status_2: false,
  });
  return (
    <TabsContainer>
      <button
        className={tabs.status_1 ? "active" : "de-active"}
        onClick={() =>
          setTabs((prev) => ({
            ...prev,
            status_1: true,
            status_2: false,
          }))
        }
      >
        Yesterday
      </button>
      <button
        className={tabs.status_2 ? "active" : "de-active"}
        onClick={() =>
          setTabs((prev) => ({
            ...prev,
            status_1: false,
            status_2: true,
          }))
        }
      >
        Last 7 Days
      </button>
    </TabsContainer>
  );
};

export default Tabs;

const TabsContainer = styled("div")`
  display: flex;
  justify-content: center;
  padding: 20px;

  button {
    border-radius: 100px;
    padding: 15px 20px;
  }

  .active {
    color: #fff;
    font-weight: 700;
    background: #e74138;
  }

  .de-active {
    font-weight: 700;
    background: none;
    color: #a2a2a2;
  }
`;
