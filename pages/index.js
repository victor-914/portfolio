import Image from "next/image";
import bg from "../assets/bg.gif";
import styled from "styled-components";
import PictureHolder from "../components/pic/PictureHolder";
import HeroSection from "../components/HeroSection/HeroSection";
export default function Home() {
  return (
    <StyledIndex style={{}}>
      <Image src={bg} layout="fill" alt="" priority={true} />
      <div className="cover"></div>
      <div className="cont">
        <PictureHolder />
        <HeroSection />
      </div>
    </StyledIndex>
  );
}

const StyledIndex = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .cont {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 150vh;
    .cont {
      flex-direction: column;
      height: auto;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
     height: 150vh;
    .cont {
      flex-direction: column;
      height: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
      height: 150vh;
    .cont {
      flex-direction: column;
      height: auto;
    }
  }
`;
