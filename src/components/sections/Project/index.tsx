import React, { useMemo } from "react";
import {
  Container,
  ImageWrapper,
  Overlay,
  OverlayIcon,
  OverlayIconLink,
  OverlayWrapper,
  SlideContainer,
  SlideImage,
  SlideItem,
  SlideWrapper,
} from "./Project.style";
import { Wrapper } from "../Skills/Skills.style";
import { Settings } from "react-slick";
import {
  SectionHeader,
  SectionHeaderBar,
  SectionTitle,
} from "../About/About.style";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  //slide items
  interface ISlideItem {
    github: string;
    link: string;
    img: string;
  }
  const slideItems: ISlideItem[] = useMemo(
    () => [
      {
        github: "https://github.com/idembele70/finanza",
        link: "https://idembele70.github.io/finanza/",
        img: "https://raw.githubusercontent.com/idembele70/finanza/main/public/assets/design/app.png",
      },
      {
        github: "https://github.com/idembele70/insure-template-htmlcodex",
        link: "idembele70.github.io/insure-template-htmlcodex/",
        img: "https://raw.githubusercontent.com/idembele70/insure-template-htmlcodex/main/public/assets/design/app.png",
      },
      {
        github: "https://github.com/idembele70/pokedex",
        link: "https://idembele70.github.io/pokedex",
        img: "https://raw.githubusercontent.com/idembele70/pokedex/main/public/assets/design/Desktop.png",
      },
      {
        github: "https://github.com/idembele70/tiny-moviez-design",
        link: "https://idembele70.github.io/tiny-moviez-design",
        img: "https://raw.githubusercontent.com/idembele70/tiny-moviez-design/master/public/assets/design/app.png",
      } /* 
      {
        github: "https://github.com/idembele70/",
        link: "https://idembele70.github.io/",
        img: "",
      }, */,
    ],
    []
  );
  //Slider settings
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container id="work">
      <Wrapper>
        <SectionHeader>
          <SectionTitle index={3}> Work</SectionTitle>
          <SectionHeaderBar />
        </SectionHeader>
        <SlideContainer {...settings}>
          {slideItems.map(({ github, link, img }, idx) => (
            <SlideWrapper key={idx}>
              <SlideItem>
                <ImageWrapper>
                  <SlideImage src={img} />
                  <Overlay>
                    <OverlayWrapper>
                      <OverlayIconLink href={github} target="_blank">
                        <OverlayIcon icon={faGithub} />
                      </OverlayIconLink>
                      <OverlayIconLink href={link} target="_blank">
                        <OverlayIcon icon={faLink} />
                      </OverlayIconLink>
                    </OverlayWrapper>
                  </Overlay>
                </ImageWrapper>
              </SlideItem>
            </SlideWrapper>
          ))}
        </SlideContainer>
      </Wrapper>
    </Container>
  );
};

export default Project;
