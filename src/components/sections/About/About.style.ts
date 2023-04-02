// About style
import styled from 'styled-components';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { LGDown, MDDown, SMDown, XSDown, XXSDown } from '../../../styles/responsive';
const Container = styled.section`
  padding: 48px 150px;
  max-width:1600px;
  margin: 0 auto;
  ${MDDown({
  padding: "48px 100px"
})}
  ${SMDown({
  padding: "48px 50px"
})}
  ${XSDown({
  padding: "48px 25px"
})}
  `;
const Wrapper = styled.div`
max-width:900px;
margin:0 auto;
`;
const SectionHeader = styled.div`
`;
interface SectionTitleProps {
  index: number;
}
const SectionTitle = styled.h2<SectionTitleProps>`
  font-size:2rem;
  position: relative;
  margin-bottom:40px;
  text-transform:capitalize;
  display:flex;
  align-items:center;
  white-space:nowrap;
  z-index:-1;
  ${XXSDown({
  whiteSpace: "initial"
})}
  ${SMDown({
  fontSize: "calc(0.9rem + .8vw)"
})}
  ::before {
    content:"0${({ index }) => index}.";
    position:relative;
    margin-right:8px;
    bottom:0px;
    color:${({ theme }) => theme.palette.primary.darker};
  }
  ::after {
    content:"";
    display:block;
    position:relative;
    margin-left:20px;
    box-sizing:inherit;
    height:1px;
    width:400px;
    background-color:${({ theme }) => theme.palette.secondary.darker};
    ${LGDown({
  width: 300
})
  }
    ${XSDown({
    width: "30vw"
  })
  }
    
  }
`;
const Main = styled.div`
  display:flex;
  margin: 0 -12px;
  ${MDDown({
  flexDirection: "column",
  alignItems: "center"
})}
`;
const ParagraphContainer = styled.div`
  flex:1;
  padding:0 12px;
  margin-top:24px;
  ${MDDown({
  order: 2,
})}
`;

const Paragraph = styled.p`
  margin-bottom:16px;
  text-align:justify;
`;
const Strong = styled.strong`
  color:${({ theme }) => theme.palette.primary.main};
  font-weight:normal;
  cursor:pointer;
  transition:all 0.25s ease;
  position:relative;
  z-index:-1;
  ::after {
    content:"";
    position:absolute;
    bottom:-3px;
    left:0;
    height:1px;
    background-color: ${({ theme }) => theme.palette.primary.darker};
  }
  &:hover {
    ::after {
      width:100%;
    }
  }
`;
const ImageContainer = styled.div`
  padding:0 12px;
  margin-top:24px;
  `;
const ImageWrapper = styled.div`
position:relative;
${MDDown({
  marginBottom: 18
})
  }
  z-index:-1;
::after {
z-index:-1;
border: 2px solid ${({ theme }) => theme.palette.primary.darker};
content:"";
height:100%;
width:100%;
position:absolute;
left:15px;
top:15px;
}
`;
const Image = styled.img`
border-radius:${({ theme }) => theme.borderRadius.small};
  width:100%;
  height:100%;
  display:block;
  `;
export {
  Container,
  Wrapper,
  Paragraph,
  Strong,
  SectionHeader,
  SectionTitle,
  Main,
  ParagraphContainer,
  ImageContainer,
  ImageWrapper,
  Image
}
