import React from "react";
import { Container } from "../Project/Project.style";
import {
  SectionHeader,
  SectionHeaderBar,
  SectionTitle,
  Wrapper,
} from "../About/About.style";
import { ContactBtn, Title } from "./Contact.style";

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <SectionHeader>
          <SectionTitle index={4}>Contact me</SectionTitle>
          <SectionHeaderBar />
        </SectionHeader>
        <Title>
          As a junior full-stack developer experienced in React and Node.js, I'm
          interested in all opportunities, including those for developers
          specialized in only React or Node.js. If you have any inquiries or
          questions, please don't hesitate to reach out to me. I will provide a
          comprehensive and prompt response.
        </Title>
        <ContactBtn href="mailto:idembele70@gmail.com">Send message</ContactBtn>
      </Wrapper>
    </Container>
  );
};

export default Contact;
