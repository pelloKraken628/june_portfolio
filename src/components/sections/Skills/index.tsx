import { useMemo, useState } from "react";
import {
  Paragraph,
  SectionHeader,
  SectionHeaderBar,
  SectionTitle,
} from "../About/About.style";
import {
  Col,
  Container,
  Experience,
  Date,
  ExperienceHeader,
  ExperienceHeaderBtn,
  ExperienceMain,
  ExperienceMainWrapper,
  ExperienceTitle,
  Main,
  SkillPercent,
  SkillPercentContainer,
  SkillText,
  SkillWrapper,
  Skillcontainer,
  Wrapper,
  Job,
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
          <Col>
            <Paragraph>
              I enjoy coding things from scratch and bringing ideas to life on
              the browser. I speak several languages and use some tools to
              practice them.
            </Paragraph>
            <Skillcontainer>
              {skillItems.map(({ title, percentage, color }, idx) => (
                <SkillWrapper key={idx}>
                  <SkillText>{title}</SkillText>
                  <SkillText>{percentage}%</SkillText>
                  <SkillPercentContainer>
                    <SkillPercent color={color} percentage={percentage} />
                  </SkillPercentContainer>
                </SkillWrapper>
              ))}
            </Skillcontainer>
          </Col>
          <Col>
            <ExperienceHeader>
              <ExperienceHeaderBtn
                onClick={() => handleSelect(0)}
                selected={selectedBtn === 0}
              >
                Experience
              </ExperienceHeaderBtn>
              <ExperienceHeaderBtn
                onClick={() => handleSelect(1)}
                selected={selectedBtn === 1}
              >
                Education
              </ExperienceHeaderBtn>
            </ExperienceHeader>
            <ExperienceMain>
              <ExperienceMainWrapper>
                <Experience>
                  <ExperienceTitle>UI Designer</ExperienceTitle>
                  <Date>2000 - 2045</Date>
                  <Job>Apex Software Inc</Job>
                </Experience>
                <Experience>
                  <ExperienceTitle>UI Designer</ExperienceTitle>
                  <Date>2000 - 2045</Date>
                  <Job>Apex Software Inc</Job>
                </Experience>
                <Experience>
                  <ExperienceTitle>UI Designer</ExperienceTitle>
                  <Date>2000 - 2045</Date>
                  <Job>Apex Software Inc</Job>
                </Experience>
                <Experience>
                  <ExperienceTitle>UI Designer</ExperienceTitle>
                  <Date>2000 - 2045</Date>
                  <Job>Apex Software Inc</Job>
                </Experience>
              </ExperienceMainWrapper>
            </ExperienceMain>
          </Col>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Skills;
