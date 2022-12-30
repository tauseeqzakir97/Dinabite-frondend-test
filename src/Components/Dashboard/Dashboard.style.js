import styled from "styled-components";

export const DashboardContainer = styled("div")`
  padding: 0px 30px;
  .container {
    display: flex;
  }

  .main-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;
    gap: 25px;
  }

  .notification-wrapper {
    position: absolute;
    right: 0;
    top: 0;
  }

  .info-box-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #222;

    button {
      border-radius: 8px;
    }
  }

  .box-item {
    display: flex;
    gap: 10px;
  }

  .box-text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 190px;

    span {
      font-size: 14px;
    }
  }
`;
