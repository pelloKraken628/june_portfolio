import styled from 'styled-components';
import { Section } from '../About/About.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled(Section)`
  
`;
const Wrapper = styled.div`
  max-width:900px;
  margin: 0 auto;
`;
const Main = styled.div`
    margin: -24px -25px 0;
    display:flex;
`;
const Col = styled.div`
  width:50%;
  padding:0 25px;
`;
const Skillcontainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 -8px;
`;
const SkillWrapper = styled.div`
width:50%;
padding:8px;
display:flex;
justify-content:space-between;
flex-wrap:wrap;  
  `;
const SkillText = styled.h6`
  
`;
const SkillPercentContainer = styled.div`
  height:5px;
  width:100%;
  flex-basis:100%;
  border-radius:5px;
  background-color:#e9ecef;
  `;
interface SkillPercentProps {
  percentage: number;
  color: string;
}
const SkillPercent = styled.div<SkillPercentProps>`
border-radius:5px;
width:${({ percentage }) => percentage}%;
background-color:#${({ color }) => color};
height:100%;
`;
// experiences column
const ExperienceHeader = styled.div`
  display:flex;
  border:1px solid ${({ theme }) => theme.palette.primary.darker};
  border-radius:${({ theme }) => theme.borderRadius.medium};
  margin-bottom:40px;
  `;
interface ExperienceHeaderBtnProps {
  selected: boolean;
}
const ExperienceMain = styled.div`
`;
const ExperienceMainWrapper = styled.div`
  margin:-12px -12px 0;
  display:flex;
  flex-wrap:wrap;
`;
const Experience = styled.div`
  padding: 0 12px;
  width:50%;
  margin-top:12px;
`;
const ExperienceHeaderBtn = styled.button<ExperienceHeaderBtnProps>`
  width:50%;
  padding:16px;
  font-size:1.25rem;
  border-radius:${({ theme }) => theme.borderRadius.medium};
  color:${({ theme, selected }) => selected ? theme.palette.common.white : theme.palette.common.black};
  background-color:${({ selected, theme }) => selected ? theme.palette.primary.darker : "transparent"};
  border:none;
  height:100%;
  cursor:pointer;
  transition: all 150ms ease-in-out;
`;
const ExperienceTitle = styled.h5`
  font-size:1.2rem;
  font-weight:normal;
  margin-bottom:8px;
  color:${({ theme }) => theme.palette.common.white};
  position:relative;
  ::after {
    content:"";
  background-color:${({ theme }) => theme.palette.primary.darker};
  position:absolute;
  width:10%;
  height:1px;
  left:0;
  bottom:0;
  }
`;
const Date = styled.p`
  color:${({ theme }) => theme.palette.primary.darker};
  margin-bottom:4px;
`;
const Job = styled.p`
  color:${({ theme }) => theme.palette.common.white};
  margin-bottom:4px;
`;
export {
  Container,
  Wrapper,
  Main,
  Col,
  Skillcontainer,
  SkillWrapper,
  SkillText,
  SkillPercentContainer,
  SkillPercent,
  ExperienceHeader,
  ExperienceHeaderBtn,
  ExperienceMain,
  ExperienceMainWrapper,
  Experience,
  ExperienceTitle,
  Date,
  Job,
}