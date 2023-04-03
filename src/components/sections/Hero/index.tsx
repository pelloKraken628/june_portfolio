import React from "react";
import {
  Container,
  Image,
  ImageContainer,
  SubTitle,
  Title,
  Wrapper,
} from "./Hero.style";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/ma-photo.png`}
            alt="hero"
          />
        </ImageContainer>
        <Title>Ibrahim Dembele</Title>
        <SubTitle>Web Developer</SubTitle>
      </Wrapper>
    </Container>
  );
};

export default Hero;
