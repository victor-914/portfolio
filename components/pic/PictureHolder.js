import React from "react";
import styled from "styled-components";
import img from "../../assets/defaultAvatar.png";
import Image from "next/image";
function PictureHolder() {
  return (
    <StyledPictureHolder>
      <main className="mainContainer">
        <header className="mainHeader">
          <span className="victor">Victor</span>
          <span className="dev">Fullstack web developer</span>
        </header>

        <main className="imgContainer">
          <Image src={img} layout="fill" />
        </main>

        <div className="intro email">Hello@Okaforv-914@gmail.com </div>

        <div className=" intro openRemote">Open to remote work</div>
        <div className=" intro base">Base in Abuja, Nigeria</div>

        <aside className="iconContainer">
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>
        </aside>

        <button className="cv">download cv</button>
      </main>
    </StyledPictureHolder>
  );
}
const StyledPictureHolder = styled.div`
  width: 450px;
  height: 100%;
  position: relative;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .mainContainer {
    width: 90%;
    box-shadow: -1px 1px 100px 10px rgba(0, 0, 0, 0.7);
    height: 90%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  .mainHeader {
    width: 100%;
    height: 10%;
    padding: 5px;
    /* background: red; */
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
    height: 30%;
    margin: auto;
    border-radius: 8px;
    position: relative;
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
`;
export default PictureHolder;
