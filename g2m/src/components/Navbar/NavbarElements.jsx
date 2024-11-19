import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import ImgLogo from '../../images/logo-g2m/g2m-transparente.png';

// Contenedor principal del navbar
export const Nav = styled.nav`
  background-color: #fd8b06;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; /* Alinea a la izquierda en dispositivos móviles */
    padding: 10px 20px;
  }
`;

// Logo
export const Logo = styled.img.attrs({
  src: ImgLogo,
  alt: 'Logo de G2M',
})`
  width: 70px;
  height: auto;
  margin: 10px;
`;

// Icono móvil (hamburguesa)
export const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

// Menú principal (oculto en móviles)
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 66px;
    left: 0;
    width: 100%;
    background: #fd8b06;
    padding: 20px 0;
    flex-direction: column;
    align-items: flex-start; /* Asegura la alineación a la izquierda */
  }
`;

// Elementos del menú
export const NavIcon = styled.div`
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    margin: 10px 20px;
  }
`;

// Link estilizado
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: 530;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #f0f0f0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    font-weight: 570;
  }

  @media screen and (max-width: 768px) {
    width: 100%; /* Ocupa todo el ancho */
    padding: 10px 20px; /* Espaciado consistente */
    text-align: left; /* Alinea el texto a la izquierda */
  }
`;

// Wrapper para DropdownMenus
export const DropdownMenuWrapper = styled.div`
  position: relative;
`;
