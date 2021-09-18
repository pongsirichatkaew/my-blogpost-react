import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { moveUp } from '../../animations/animation.style';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <Link to='/'>
        <StyledLogo />
      </Link>

      <ul>
        <li>
          <Link to='/about'>About me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/about' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/works'>Works</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/works' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/blog' ? '100%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  /* justify-content: space-between; */
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  border-radius: 1px;
  box-shadow: 0px 8px 4px rgba(255, 255, 255, 0.25);
  z-index: 10;
  height: 113px;
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

const StyledLogo = styled(Logo)`
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

const Line = styled(motion.div)`
  height: 5px;
  background: #5c527f;
  position: absolute;
  bottom: -10px;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default NavigationBar;
