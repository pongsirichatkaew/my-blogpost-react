import styled from 'styled-components';
import { ReactComponent as LandingImage } from '../../assets/landing_illustra.svg';
import { moveLeftRight, moveUpAndGone } from '../../animations/animation.style';
import { motion } from 'framer-motion';

export const StyledLandingPage = styled(motion.div)`
  min-height: 85vh;
  background: #1c092b;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledLandingImage = styled(LandingImage)`
  flex: 50%;
  #Cloud1 {
    animation: ${moveLeftRight} infinite 0.2s alternate;
  }
  #Cloud2 {
    animation: ${moveLeftRight} infinite 0.3s alternate;
  }
  #Cloud3 {
    animation: ${moveLeftRight} infinite 0.5s alternate;
  }
  #Rocket {
    animation: ${(props) => (props.view ? moveUpAndGone : '')} normal 5s
      ease-in-out;
  }
  @media (max-width: 800px) {
    flex: 100%;
  }
`;

export const StyledLandingText = styled.h1`
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 150%;
  text-align: center;
  flex: 50%;
  @media (max-width: 800px) {
    flex: 100%;
  }
`;
