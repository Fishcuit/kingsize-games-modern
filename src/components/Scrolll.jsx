import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scrolll = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default Scrolll;