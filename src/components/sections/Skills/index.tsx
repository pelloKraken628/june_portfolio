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
  // Languages item
  interface ISkillItem {
    title: string;
    percentage: number;
    color: string;
  }
  const skillItems: ISkillItem[] = useMemo(
    () => [
      {
        title: "HTML",
        percentage: 90,
        color: "e34c26",
      },
      {
        title: "CSS",
        percentage: 85,
        color: "264de4",
      },
      {
        title: "SASS",
        percentage: 60,
        color: "cc6699",
      },
      {
        title: "JavaScript",
        percentage: 80,
        color: "f0db4f",
      },
      {
        title: "TypeScript",
        percentage: 75,
        color: "007acc",
      },
      {
        title: "ReactJS",
        percentage: 85,
        color: "61dafb",
      },
      {
        title: "NodeJS",
        percentage: 65,
        color: "3c873a",
      },
    ],
    []
  );

  // experience button
  const [selectedBtn, setSelectedBtn] = useState(0);
  const handleSelect = (idx: number) => {
    setSelectedBtn(idx);
  };
  return (
    <Container>
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
