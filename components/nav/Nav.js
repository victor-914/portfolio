import React from "react";
import styled from "styled-components";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

function Nav({ setState }) {
  return (
    <StyledNav>
      <main className="navContainer">
        <li onClick={() => setState("home")}>
          <AiOutlineHome />
        </li>
        <li onClick={() => setState("projects")}>
          <BiCodeAlt />
        </li>
      </main>
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled.section`
  width: 4%;
  height: 20%;
  list-style: none;
  margin-left: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.5);

  li {
    background: transparent;
    width: 60%;
    margin: auto;
    padding: 4px;
    text-align: center;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    cursor: pointer;
  }

  li:hover {
    background: #4c2427;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .navContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-direction: column;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 80%;
    height: 14vh;
    margin: 0;
    border: none;
    padding: 0;
    justify-content: flex-start;

    .navContainer {
      width: 50%;
      height: 30%;
      padding: 3px;
      margin: 0;
      flex-direction: row;
      border-radius: 10px;
      border: 2px solid rgba(255, 255, 255, 0.5);
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 80%;
    height: 14vh;
    margin: 0;
    border: none;
    padding: 0;
    justify-content: flex-start;

    .navContainer {
      width: 50%;
      height: 30%;
      padding: 3px;
      margin: 0;
      flex-direction: row;
      border-radius: 10px;
      border: 2px solid rgba(255, 255, 255, 0.5);
    }

    li {
      font-size: 20px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }
`;
