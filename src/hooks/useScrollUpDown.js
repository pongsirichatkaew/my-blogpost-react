import { useEffect, useState } from 'react';
export const useScrollUpDown = () => {
  const [show, setShow] = useState(true);

  let oldScrollY = window.scrollY;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (window.scrollY <= 200 || window.scrollY < oldScrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return [show];
};
