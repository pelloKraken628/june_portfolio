import React from "react";
import { Container, Paragraph, Wrapper } from "./Copyright.style";

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

  return (
    <Container>
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
