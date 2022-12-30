import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 240px;
  height: 100vh;

  .sidebar_logo {
    padding: 15px;
    align-self: center;
  }

  .wrapper-link {
    display: flex;
    gap: 20px;
    padding: 35px 20px 20px 35px;
    flex-direction: column;
  }

  .sidebar__item-inner {
    display: flex;
    align-items: center;
    gap: 14px;
    position: relative;

    span:nth-child(3) {
      position: absolute;
      width: 75px;
      height: 47px;
      border-radius: 29px;
      background-color: #e74138;
      transform: translate(163px, 0px);
    }
  }

  .active {
    color: #e74138;
    font-weight: 700;
  }
  .active_1 {
    color: #e74138;
    font-weight: 700;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 16px;
    font-family: "Comfortaa", cursive;
  }

  .wrapper-span {
    color: #fff;
    padding: 20px;
  }

  a {
    text-decoration: none;
    color: #9eadb9;
  }

  hr {
    border: none;
    height: 1px;
    width: 100%;
    background: #e5e5e5;
    max-width: 200px;
    margin: 0 auto;
  }

  .page {
    position: relative;
    width: 100%;
    height: 100vh;
    /* background: #081d2a; */
  }

  .content {
    width: 100%;
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 999999;
  }

  .page::after {
    content: "";
    position: absolute;
    z-index: 1;
    height: calc(100% - 20px);
    top: 10px;
    right: -1px;
    width: 8px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }

  .wrapper::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
  .wrapper::-webkit-scrollbar-track {
    background: transparent;
  }

  .wrapper::-webkit-scrollbar-thumb {
    background-color: #314552;
    border-right: none;
    border-left: none;
    border-radius: 10px;
  }

  .wrapper::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px;
  }

  .wrapper::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 9px;
  }
`;
