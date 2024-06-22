import{ useEffect, useState } from 'react';

function useVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

  
    observer.observe(ref.current);
    

    return () => {
      observer.disconnect();
      
    };
  }, [ref]);

  return isIntersecting;
}

export default useVisible;
