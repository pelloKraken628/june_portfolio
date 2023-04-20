import React, { useLayoutEffect, useRef } from "react";
import { Container, Paragraph, Wrapper } from "./Copyright.style";
import { gsap } from "gsap";
import { fromFadeIn } from "../../shared/gsap";

const Copyright = () => {
  const year = new Date().getFullYear();
  const lastDigit = Number(year.toString().slice(-1));
  const digits = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const containerTween = gsap.from(containerEl.current, {
      ...fromFadeIn,
      delay: 0.1,
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top-=570px center",
      },
    });

    return () => {
      containerTween.scrollTrigger?.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Wrapper>
        <Paragraph>Crafted by me using handiwork</Paragraph>
        <Paragraph>
          &nbsp;&copy; TweentyTweenty
          {digits[lastDigit]}
        </Paragraph>
      </Wrapper>
    </Container>
  );
};

export default Copyright;
