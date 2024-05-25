import React from 'react'
import styled, { keyframes, css } from "styled-components";
function LogoSlider() {
    const row1 = [
        "/Images/logo-slider-image-1.png",
        "/Images/logo-slider-image-2.png",
        "/Images/logo-slider-image-3.png",
        "/Images/logo-slider-image-4.png",
        "/Images/logo-slider-image-5.png",
        "/Images/logo-slider-image-6.png"
        
    
      ];
    
      const row2 = [
        "/Images/logo-slider-image-7.png",
        "/Images/logo-slider-image-8.png",
        "/Images/logo-slider-image-9.png",
        "/Images/logo-slider-image-10.png",
        "/Images/logo-slider-image-11.png",
      ];
  return (
    <>
       <AppContainer>
    
    <Wrapper>
    
      <Text>Our Partners & Collabrators</Text>
      <Note>We greatly value the contributions and collabration of our esteemed partners and collaborators</Note>
      <Marquee>
        <MarqueeGroup>
          {row1.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
      </Marquee>
      <Marquee>
        <MarqueeGroup2>
          {row2.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup2>
        <MarqueeGroup2>
          {row2.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        
        </MarqueeGroup2>
      </Marquee>
    </Wrapper>
  </AppContainer>
    </>
  )
}

export default LogoSlider

const AppContainer = styled.div`
 
  color: #000000;
 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
 
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;


const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

