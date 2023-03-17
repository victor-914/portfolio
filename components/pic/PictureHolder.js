import React from "react";
import styled from "styled-components";
import Picture from "../../assets/profiePicture.png";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

function PictureHolder() {
  return (
    <StyledPictureHolder>
      <main className="mainContainer">
        <header className="mainHeader">
          <span className="victor">Victor</span>
          <span className="dev">Full stack web developer</span>
        </header>

        <main className="imgContainer">
          <Image src={Picture} layout="responsive" />
        </main>

        <div className=" intro openRemote">Open to remote work</div>
        <div className=" intro base">Base in Abuja, Nigeria</div>

        <aside className="iconContainer">
          <a
            className="icon"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/victor-914"
          >
            <BsGithub id="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/okafor-victor-a40971232"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <AiFillLinkedin />
          </a>
        </aside>

        <a href="/myResume.pdf" className="cv" target="_blank">
          download cv
        </a>
      </main>
    </StyledPictureHolder>
  );
}
const StyledPictureHolder = styled.div`
  width: 450px;
  height: auto;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .mainContainer {
    width: 90%;
    box-shadow: -1px 1px 100px 10px rgba(0, 0, 0, 0.7);
    height: 95%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.23);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.4px);
    -webkit-backdrop-filter: blur(5.4px);
    border: 1px solid rgba(255, 255, 255, 0.81);
    padding-bottom: 10px;
  }

  .mainHeader {
    width: 100%;
    height: 10%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .victor {
    font-size: 40px;
    font-weight: 700;
  }

  .imgContainer {
    width: 70%;
    height: auto;
    margin: auto;
    border-radius: 8px;
    position: relative;
    padding: 10px;
  }

  .intro {
    width: 100%;
    line-height: 2;
    font-weight: 500;
    height: 10%;
    text-align: center;
  }

  .cv {
    padding: 10px 0px;
    width: 80%;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    margin: auto;
    border-radius: 8px;
    outline: none;
    border: 2px solid transparent;
    background: #4c2427;
    cursor: pointer;
  }

  .cv:hover {
    border: 2px solid #fff;
  }

  .iconContainer {
    display: flex;
    justify-content: space-evenly;
    font-size: 30px;
    align-items: center;
    cursor: pointer;
  }

  .icon:hover {
    cursor: pointer;
    transform: translateY(-4px);
    box-shadow: -1px 1px 100px 10px rgba(0, 0, 0, 1);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 95%;
    height: 70vh;
    margin: auto;

    .victor {
      font-size: 30px;
      padding-top: 8px;
      width: 100%;
      letter-spacing: 0.5px;
      text-align: center;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 95%;
    height: 70vh;
    margin: auto;

    .victor {
      font-size: 30px;
      padding-top: 8px;
      width: 100%;
      letter-spacing: 0.5px;
      text-align: center;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 80%;
    height: 90vh;
    margin: auto;
  }
`;
export default PictureHolder;
