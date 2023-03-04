import React from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
function HeroComp({ setState }) {
  return (
    <StyledHeroComp>
      <header className="header">
        <span>
          <AiOutlineHome />
        </span>
        introduction
      </header>
      <div className="introText">
        <span className="hello">Hello from</span>
        <span className="name"> Victor,</span> <br />
        <span className="dev"> A fullstack web developer</span>
        <br />
      </div>
      <button className="projectButton" onClick={() => setState("projects")}>
        see projects
      </button>

      <main className="techStack">
        <header className="stackHeader">My technology stack are</header>
        <li>React</li>
        <li>Redux</li>
        <li>Tailwind CSS</li>
        <li>Express</li>
        <li>Node</li>
        <li>MongoDB</li>
      </main>

      <div id="design">
        I design, code and adhere strictly to recommended practice.{" "}
      </div>
    </StyledHeroComp>
  );
}

export default HeroComp;

const StyledHeroComp = styled.section`
  width: 70%;
  height: 90%;

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

  .introText {
    color: #fff;
    font-size: 50px;
    padding: 10px;
    width: 100%;
    line-height: 1.5;
  }

  .name {
    padding: 8px;
  }

  .hello {
    /* background: yellow; */
  }

  .dev {
    /* background: purple; */
  }

  #design {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 28px;
    /* background: red; */
    padding-left: 10px;
  }

  .projectButton {
    width: 40%;
    margin: auto;
    line-height: 3;
    margin-left: 10px;
    background: #4c2427;
    color: #fff;
    text-transform: uppercase;
    border-radius: 8px;
    outline: none;
    border: 2px solid transparent;
    cursor: pointer;
  }

  .projectButton:hover {
    border: 2px solid #fff;
    box-shadow: 1px 1px 100px 100px rgba(0, 0, 0, 0.3);
  }

  .techStack {
    margin-top: 20px;

    color: #fff;
    padding-left: 10px;
    list-style: none;
    line-height: 1.7;
    text-transform: uppercase;
  }

  .stackHeader {
    text-transform: uppercase;
    font-weight: 800;
    /* color: rgba(255, 255, 255, 0.7); */
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    margin: auto;
    padding-bottom: 30px;

    .name {
      margin-left: 100px;
    }

    .introText {
      font-size: 30px;
      padding: 10px;
      width: 100%;
      line-height: 1.5;
    }
  }
`;
