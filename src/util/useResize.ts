import { useEffect, useState } from 'react';

export const useResize = (ref: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref?.current?.offsetWidth ?? 0);
      setHeight(ref?.current?.offsetHeight ?? 0);
    };

    if (ref.current !== null) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return { width, height };
};
