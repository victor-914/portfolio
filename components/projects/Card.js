import React from "react";
import styled from "styled-components";
import Image from "next/image";

// import Project from "../../utils/Project";
function Card({ props }) {
  return (
    <StyledCard>
      {/* <main className="imgContainer">
        <Image layout="fill" src={props.img} />
      </main> */}
      <div className="desc">{props.title}</div>
      <aside className="propsDesc">{props.description}</aside>
      <div className="stackContainer">
        {props.technology.map((item) => (
          <button id="techButton">{item}</button>
        ))}
      </div>

      <div className="linkContainer">
        <button> git</button>
        <button> live</button>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  width: 43%;
  height: auto;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  border: 1px solid rgba(255, 255, 255, 0.81);

  .propsDesc {
    padding: 10px 8px 10px 8px;
    font-weight: 400;
    text-align: flex-start;
    word-spacing: 2px;
    width: auto;
    margin: auto;
    margin: 20px 0px;
    /* color: rgba(255, 255, 255, 0.7); */
  }

  .stackContainer {
    display: flex;
    width: 95%;
    margin: auto;
    /* background: red; */
    justify-content: space-around;
    padding: 8px;
    flex-wrap: wrap;
  }

  #techButton {
    width: auto;
    font-size: 10px;
    font-weight: 600;
    margin: 8px;
  }

  .imgContainer {
    width: 100%;
    margin: auto;
    height: 200px;
    position: relative;
  }

  .desc {
    width: 100%;
    line-height: 2;
    text-align: center;
    text-transform: capitalize;
    font-weight: 800;
  }

  button {
    width: 80%;
    line-height: 2;
    margin: auto;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid transparent;
    text-transform: uppercase;
    background: #4c2427;
    color: #fff;
  }

  button:hover {
    border: 2px solid #fff;
  }

  .linkContainer {
    display: flex;
    width: 80%;
    justify-content: space-between;
    font-size: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 80%;
    margin-top: 30px;

    .imgContainer {
      width: 90%;
    }

    .propsDesc {
      font-weight: 400;
      text-align: flex-start;
      word-spacing: 2px;
      width: 90%;
      margin: auto;
      margin: 20px 0px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export default Card;
