import React, { useState } from "react";
import styled from "styled-components";
import HeroComp from "../heroComp/HeroComp";
import Nav from "../nav/Nav";
import Projects from "../projects/Projects";

function HeroSection() {
  const [state, setState] = useState("home");
  return (
    <StyledHeroSection>
      {state === "home" ? (
        <HeroComp setState={setState} />
      ) : state === "projects" ? (
        <Projects />
      ) : null}

      <Nav setState={setState} />
    </StyledHeroSection>
  );
}

export default HeroSection;

const StyledHeroSection = styled.section`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: auto;
    flex-direction: column-reverse;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    margin: auto;
    padding-bottom: 30px;
    flex-direction: column-reverse;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background: red;
    width: 90%;
    flex-direction: column-reverse;
  }
`;
