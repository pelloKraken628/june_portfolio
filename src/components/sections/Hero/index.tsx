import React from "react";
import { Container, Image, SubTitle, Title, Wrapper } from "./Hero.style";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src={`${process.env.PUBLIC_URL}/assets/ma-photo.png`}
          alt="hero"
        />
        <Title>Ibrahim Dembele</Title>
        <SubTitle>Web Developer</SubTitle>
      </Wrapper>
    </Container>
  );
};

export default Hero;
