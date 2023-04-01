import styled from 'styled-components';
import { DefaultWrapper } from '../../Header.style';
import { LGDown, MDDown, SMDown, XLDown } from '../../../../../styles/responsive';

const Container = styled.section`
  height:calc(100vh - 70px);
  width:100%;
  padding: 0 12px;
`;
const Wrapper = styled(DefaultWrapper)`
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;
const Image = styled.img`
  border-radius:${({ theme }) => theme.borderRadius.rounded};
  margin-bottom:25px;
  ${SMDown({
  height: 150,
  width: 150,
  marginBottom: 15
})
  }
`;
const Title = styled.h1`
  font-size:7rem;
  text-transform:uppercase;
  text-shadow: 1px 3px 11px rgba(0,0,0,.3);
  ${XLDown({
  fontSize: "6rem",
  marginBottom: 5
})}
  ${LGDown({
  fontSize: "5rem"
})}
  ${MDDown({
  fontSize: "calc(0.3rem + 6vw)"
})}
`;
const SubTitle = styled.h2`
  font-size:3rem;
  text-transform:uppercase;
  text-shadow: 1px 3px 11px rgba(0,0,0,.3);
${XLDown({
  fontSize: "calc(0.2rem + 3.3vw)"
})}
`;
export {
  Container,
  Wrapper,
  Image,
  Title,
  SubTitle,
}