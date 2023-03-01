import React from "react";
import styled from "styled-components";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

function Nav({ setState }) {
  return (
    <StyledNav>
      <li onClick={() => setState("home")}>
        <AiOutlineHome />
      </li>
      <li onClick={() => setState("projects")}>
        <BiCodeAlt />
      </li>
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled.section`
  width: 4%;
  height: 20%;
  /* background: red; */
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
`;
