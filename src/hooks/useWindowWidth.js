import { useEffect, useState } from 'react';
export const useWindowWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateWindowDimensions = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [updateWindowDimensions]);

  return [screenWidth];
};
