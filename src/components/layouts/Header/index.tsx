import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Blur,
  Container,
  HamburgerContainer,
  Logo,
  LogoContainer,
  Mail,
  MailContainer,
  Nav,
  NavItem,
  NavItemContainer,
  NavItemWrapper,
  Resume,
  ScrollTopBtn,
  ScrollTopBtnIcon,
  SocialContainer,
  SocialContainerBar,
  SocialIcon,
  SocialIconContainer,
  Wrapper,
} from "./Header.style";
import Hamburger from "./Hamburger";
import { IconDefinition, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
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
        setIsNearSticky(true);
      } else if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
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
  // Social Media container
  interface ISocialICon {
    icon: IconDefinition;
    link: string;
  }

  const socialIcons: ISocialICon[] = useMemo(
    () => [
      {
        icon: faGithub,
        link: "https://github.com/idembele70/",
      },
      {
        icon: faInstagram,
        link: "https://www.instagram.com/playmaker1710/",
      },
      {
        icon: faTwitter,
        link: "https://twitter.com/Playmaker26_7",
      },
      {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/ibrahim-dembele-2a91351b3/",
      },
    ],
    []
  );
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
        <Wrapper>
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
                    href={`#${name}`}
                    onClick={(e) => {
                      if (window.innerWidth < 768) handleToggleMenu(e);
                    }}
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
      <SocialContainer>
        {socialIcons.map(({ icon, link }, idx) => (
          <SocialIconContainer target="_blank" key={idx} href={link}>
            <SocialIcon icon={icon} />
          </SocialIconContainer>
        ))}
      </SocialContainer>
      <MailContainer>
        <Mail href="mailto:idembele70@gmail.com">idembele70@gmail.com</Mail>
      </MailContainer>
    </>
  );
};

export default Header;
