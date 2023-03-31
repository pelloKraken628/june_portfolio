// Header Style
import styled from 'styled-components';
import { LGDown, MDDown, SMDown, XLDown, XSDown } from '../../../styles/responsive';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface ContainerProps {
  isNearSticky: boolean;
  isSticky: boolean;
  isMenuOpen: boolean;
}
const Container = styled.header<ContainerProps>`
width:100%;
padding: 0 12px;
display:flex;
justify-content:space-between;
position: ${({ isNearSticky, isSticky }) => isNearSticky || isSticky ? "fixed" : "initial"};
top: ${({ isNearSticky, isSticky }) => isNearSticky || isSticky ? 0 : "-100%"};
transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);
box-shadow: ${({ isSticky }) => isSticky ? "0 0" : "none"};
background-color:${({ isMenuOpen, theme, isSticky }) => isMenuOpen || !isSticky ? "transparent" : theme.palette.secondary.main};
box-shadow: ${({ isSticky }) => isSticky ? "0 2px 4px rgba(0,0,0,0.075)" : "none"};
`;

const DefaultWrapper = styled.div`
  max-width:1320px;
  width:100%;
  margin: 0 auto;
  padding: 0 12px;
  ${XLDown({
  maxWidth: 1140
})}
  ${LGDown({
  maxWidth: 960
})}
  ${MDDown({
  maxWidth: 720
})}
  ${SMDown({
  maxWidth: 540
})}
  ${XSDown({
  maxWidth: "auto"
})}
`;
interface WrapperProps {
  isMenuOpen: boolean;
}
const Wrapper = styled(DefaultWrapper) <WrapperProps>`
  padding:8px 12px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  transition:all 500ms ease;
  ${({ isMenuOpen }) => SMDown({
  maxWidth: isMenuOpen ? "100%" : ""
})};
`;
const LogoContainer = styled(Link)`
z-index:10;

`;
const Logo = styled.h1`
  font-size:2.25rem;
  color:${({ theme }) => theme.palette.common.white};
  font-family: "Tillana", "sans-serif";
  font-weight:400;
  color:${({ theme }) => theme.palette.primary.main};
`;
interface NavProps {
  isVisible: boolean;
}
const Nav = styled.nav<NavProps>`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  position:relative;
  z-index:9;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  ${({ theme, isVisible }) => SMDown({
  position: "fixed",
  backgroundColor: theme.palette.secondary.main,
  top: 0,
  right: isVisible ? 0 : "-100%",
  bottom: 0,
  width: "100%",
  maxWidth: 400,
  padding: "50px 0",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})}
`;
const NavItemContainer = styled.div`
  display:flex;
    ${({ theme }) => SMDown({
})
  }
`;
const NavItemWrapper = styled.div`
  display:flex;
  &:hover{
    //navlink
    & > a:not(.navLink-active) {
      opacity:0.5;
    }
    }
    ${({ theme }) => SMDown({
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
})}
`;
interface NavItemProps {
  index: number
}

const NavItem = styled(Link) <NavItemProps>`
  color:${({ theme }) => theme.palette.common.white};
  text-transform:Capitalize;
  padding:0 12px;
  position:relative;
  transition: all cubic-bezier(.4,0,.2,1) .4s;
  ::after {
    content:"${({ index }) => `0${index}`}";
    position:absolute;
    top:-12px;
    left:0;
    font-size:0.6rem;
    color:${({ theme }) => theme.palette.primary.main};
    ${SMDown({
  right: "0",
  top: 9,
})
  }
}
${SMDown({
    padding: "20px 12px",
    textAlign: "center",
    width: "100%"
  })
  }
`;
const Resume = styled.button`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  color:${({ theme }) => theme.palette.common.white};
  outline:0;
  padding: 6px 16px;
  background-color:${({ theme }) => theme.palette.primary.main};
  border-radius:${({ theme }) => theme.borderRadius.small};
  cursor:pointer;
  font-size:1rem;
  transition: all 500ms ease;
  margin-left:16px;
  &:hover {
    opacity:0.8;
  }
  &:focus {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.palette.primary.darker};
  }
  ${SMDown({
  marginLeft: 0,
  marginTop: 40,
})}
`;
const HamburgerContainer = styled.div`
 z-index:10;
  display: none;
  ${SMDown({
  display: "block"
})}
`;
interface BlurProps {
  isVisible: boolean;
}
const Blur = styled.div<BlurProps>`
  position:fixed;
  top:0;
  left:0;
  height:100vh;
  width:100vw;
  transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  backdrop-filter: ${({ isVisible }) => isVisible ? "blur(5px) brightness(0.7)" : "none"};
  visibility: ${({ isVisible }) => isVisible ? "visible" : "hidden"};
  z-index:5;
`;
// ScrollToTop Button
interface ScrollTopBtnProps {
  display: boolean;
}
const ScrollTopBtn = styled.button<ScrollTopBtnProps>`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.primary.darker};
  border: 1px solid ${({ theme }) => theme.palette.primary.darker};
  opacity: ${({ display }) => (display === true ? 1 : 0)};
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 0;
  cursor: pointer;
  transition: all 1000ms ease;
  visibility: ${({ display }) => display ? "visible" : "hidden"};
  z-index: 5;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.darker};
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgba(83, 118, 252, 0.5);
  }
`;
const ScrollTopBtnIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1.5rem;
`
export {
  Container,
  DefaultWrapper,
  Wrapper,
  LogoContainer,
  Logo,
  Nav,
  NavItemContainer,
  NavItemWrapper,
  NavItem,
  Resume,
  HamburgerContainer,
  Blur,
  ScrollTopBtn,
  ScrollTopBtnIcon,
}