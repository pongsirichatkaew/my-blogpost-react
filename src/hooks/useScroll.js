import { useInView } from 'react-intersection-observer';

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.4 });
  return [element, view];
};
