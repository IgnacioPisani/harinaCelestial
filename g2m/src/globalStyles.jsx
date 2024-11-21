import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Kanit", sans-serif;
    }

    /* Estructura principal */
    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .main-content {
        flex: 1; /* Hace que el contenido ocupe el espacio restante */
    }
        html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Oculta cualquier contenido que desborde horizontalmente */
}

`;
