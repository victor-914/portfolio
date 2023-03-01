import Image from "next/image";
import bg from "../assets/bg.gif";
import styled from "styled-components";
import PictureHolder from "../components/pic/PictureHolder";
import HeroSection from "../components/HeroSection/HeroSection";
export default function Home() {
  return (
    <StyledIndex style={{}}>
      <Image src={bg} layout="fill" />
      <div className="cover"></div>
      <PictureHolder />
      <HeroSection />
    </StyledIndex>
  );
}

const StyledIndex = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  /* padding: ; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
