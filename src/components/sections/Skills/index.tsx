import { useLayoutEffect, useMemo, useRef, useState } from "react";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  const sectionEl = useRef<HTMLElement>(null);
  const sectionHeaderEl = useRef<HTMLDivElement>(null);
  const mainEl = useRef<HTMLDivElement>(null);
  const duration = 0.5;
  useLayoutEffect(() => {
    gsap.from(sectionHeaderEl.current, {
      opacity: 0,
      y: "100%",
      duration,
      scrollTrigger: {
        trigger: sectionEl.current,
        start: "top-=400px center",
      },
    });
    gsap.from(mainEl.current, {
      opacity: 0,
      duration,
      scrollTrigger: {
        trigger: sectionEl.current,
        start: "top-=320px center",
      },
    });
    return () => {};
  }, []);
  // image load function
  const handleLoad = () => {
    ScrollTrigger.refresh();
  };
  return (
    <Container ref={sectionEl} id="skills">
      <Wrapper>
        <SectionHeader ref={sectionHeaderEl}>
          <SectionTitle index={2}>Skills</SectionTitle>
          <SectionHeaderBar />
        </SectionHeader>
        <Main ref={mainEl}>
          <ImageContainer>
            <Image
              onLoad={handleLoad}
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
