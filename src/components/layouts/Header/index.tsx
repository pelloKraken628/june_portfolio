import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Blur,
  Container,
  HamburgerContainer,
  Logo,
  LogoContainer,
  Nav,
  NavItem,
  NavItemContainer,
  NavItemWrapper,
  Resume,
  ScrollTopBtn,
  ScrollTopBtnIcon,
  Wrapper,
} from "./Header.style";
import Hamburger from "./Hamburger";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // nav item
  const navItems: string[] = useMemo(
    () => ["about", "skills", "project", "contact"],
    []
  );
  const handleHover = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.currentTarget.classList.toggle("navLink-active");
  };
  // Menu toggler
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setToggleMenu(!toggleMenu);
    const { style } = document.body;
    if (toggleMenu) {
      // when menu is closed
      style.height = "auto";
      style.overflow = "auto";
    } else {
      style.height = "100vh";
      style.overflow = "hidden";
    }
  };
  // header scroll animation
  const [isNearSticky, setIsNearSticky] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 70) {
        //setDisplayScrollTop(true);
        setIsNearSticky(true);
        console.log("isNearSticky", window.scrollY);
      } else if (window.scrollY > 150) {
        setIsSticky(true);
        console.log("isSticky");
      } else {
        //setDisplayScrollTop(false);
        setIsSticky(false);
        setIsNearSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // scroll top handler
  const handleScrollTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };
  return (
    <>
      <ScrollTopBtn display={isSticky && !toggleMenu} onClick={handleScrollTop}>
        <ScrollTopBtnIcon icon={faArrowUp} />
      </ScrollTopBtn>
      <Container
        isMenuOpen={toggleMenu}
        isSticky={isSticky}
        isNearSticky={isNearSticky}
      >
        <Wrapper isMenuOpen={toggleMenu}>
          <LogoContainer to="/">
            <Logo>IKD</Logo>
          </LogoContainer>
          <HamburgerContainer onClick={handleToggleMenu}>
            <Hamburger ariaLabel="Main Menu" />
          </HamburgerContainer>
          <Nav isVisible={toggleMenu}>
            <NavItemContainer>
              <NavItemWrapper>
                {navItems.map((name, idx) => (
                  <NavItem
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                    index={(idx += 1)}
                    to={`#${name}`}
                  >
                    {name}
                  </NavItem>
                ))}
              </NavItemWrapper>
            </NavItemContainer>
            <Resume>Resume</Resume>
          </Nav>
        </Wrapper>
        <Blur isVisible={toggleMenu} />
      </Container>
    </>
  );
};

export default Header;
