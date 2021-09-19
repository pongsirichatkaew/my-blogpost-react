import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Line = styled(motion.div)`
  height: 5px;
  background: #5c527f;
  position: absolute;
  bottom: -10px;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
