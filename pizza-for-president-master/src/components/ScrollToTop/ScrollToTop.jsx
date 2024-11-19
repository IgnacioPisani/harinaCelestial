import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al inicio
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  return null; // Este componente no necesita renderizar nada
};

export default ScrollToTop;
