import { useMemo, useState } from "react";
import {
  SectionHeader,
  SectionHeaderBar,
  SectionTitle,
} from "../About/About.style";
import {
  Container,
  Main,
  Image,
  Wrapper,
  ImageContainer,
} from "./Skills.style";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <SectionHeader>
          <SectionTitle index={2}>Skills</SectionTitle>
          <SectionHeaderBar />
        </SectionHeader>
        <Main>
          <ImageContainer>
            <Image
              src={`${process.env.PUBLIC_URL}/assets/illustration-skills.png`}
              alt="illustration construction"
            />
          </ImageContainer>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Skills;
