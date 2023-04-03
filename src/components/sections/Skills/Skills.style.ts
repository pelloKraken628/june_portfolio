import styled from 'styled-components';
import { Section } from '../About/About.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDDown } from '../../../styles/responsive';

const Container = styled(Section)`
  
`;
const Wrapper = styled.div`
  max-width:900px;
  margin: 0 auto;
`;
const Main = styled.div`
    display:flex;
`;
const ImageContainer = styled.div`
  width:100%;
  aspect-ratio:1;
`;

const Image = styled.img`
  max-width:100%;
`;
export {
  Container,
  Wrapper,
  Main,
  ImageContainer,
  Image,
}