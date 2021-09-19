import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { moveUp, hide, show } from '../../animations/animation.style';
export const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  justify-content: ${({ isMobile }) => (isMobile ? `space-between` : ``)};
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  border-radius: 1px;
  box-shadow: 0px 8px 4px rgba(255, 255, 255, 0.25);
  z-index: 10;
  height: 113px;
  animation: ${(props) => (props.show ? show : hide)} forwards 0.5s ease-in-out;

  a {
    color: #00113b;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
  }
  li {
    margin: 0 1.5rem;
    position: relative;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    margin-right: 24px;
    /* gap: 5rem; */
  }
`;

export const StyledLogo = styled(Logo)`
  width: 300px;
  border-right: 1px solid #00113b;
  &:hover {
    cursor: pointer;
    #Square {
      animation: ${moveUp} infinite 0.3s alternate;
    }
    #Triangle {
      animation: ${moveUp} infinite 0.4s alternate;
    }
    #Circle {
      animation: ${moveUp} infinite 0.5s alternate;
    }
  }
`;
