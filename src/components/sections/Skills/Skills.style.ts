import styled from 'styled-components';
import { Section } from '../About/About.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDDown } from '../../../styles/responsive';

const Container = styled(Section)`
  
`;
const Wrapper = styled.div`
  max-width:900px;
  margin: 0 auto;
  width: 50vw;
  `;
const CanvasContainer = styled.div`
  aspect-ratio: 1;
`;
export {
  Container,
  Wrapper,
  CanvasContainer,
}