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
        <HeroComp />
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
  /* background: red; */
  height: 90%;
  display: flex;
  align-items: center;
  /* justify-content: */
  position: relative;
`;
