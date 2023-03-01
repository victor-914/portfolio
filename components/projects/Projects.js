import React from "react";
import styled from "styled-components";
import { BiCodeAlt } from "react-icons/bi";
import Card from "./Card";
function Projects() {
  return (
    <StyledProjects>
      <header className="header">
        <span>
          <BiCodeAlt />
        </span>
        Projects
      </header>
      <main className="projectContainer">
        <Card />
        <Card />
        <Card />
      </main>
    </StyledProjects>
  );
}

export default Projects;

const StyledProjects = styled.section`
  width: 70%;
  height: 90%;
  color: #fff;
  overflow-y: scroll;

  .header {
    border: 1px solid rgba(255, 255, 255, 0.4);
    width: 10em;
    padding: 3px;
    text-transform: uppercase;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    height: auto;
  }

  .projectContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding-top: 20px;
  }
`;
