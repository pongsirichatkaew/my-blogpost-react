import { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const hide = keyframes`
0%{
  transform: translateY(0px);

}
100%{
  transform: translateY(-113px);
}
`;

export const show = keyframes`
0%{
  transform: translateY(-113px);
}
100%{
  transform: translateY(0px);
}
`;

export const moveUp = keyframes`
 from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
`;

export const moveUpAndGone = keyframes`
 from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const moveLeftRight = keyframes`
 from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-3px);
  }
`;

export const fade = keyframes`
    0% {
        fill:#61DAFB;
    }
    50% {
        fill:black;
    }
    100%{
        fill:#61DAFB;
    }
`;

export const pulse = keyframes`
    0% {
    transform: scale(0);
    opacity: 1;
    transform-origin: center;
    }
    100% {
    transform: scale(4.5);
    opacity: 0;
    transform-origin: center;
    }
`;
