import React from "react";
import styled from "styled-components";
import portfolio from "../../assets/portfolio.png";
import Image from "next/image";
function Card() {
  return (
    <StyledCard>
      <main className="imgContainer">
        <Image layout="fill" src={portfolio} />
      </main>
      <div className="desc">my portfolio</div>
      <button>view</button>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  width: 45%;
  height: 280px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.7);

  .imgContainer {
    width: 100%;
    margin: auto;
    height: 60%;
    position: relative;
  }

  .desc {
    width: 100%;
    text-align: center;
    text-transform: capitalize;
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
`;

export default Card;
