import { StrictMode } from "react"; //Importa todas as funcionalidades nativas do React, tudo de importante.
import { createRoot } from "react-dom/client"; //Importamos isso para integrar todas as funcionalidades nativas do React para funcionar na web.
import { App } from "./App.jsx";


// Este é um método do React que seleciona o elemento raiz no html, elemento que vai conter toda a estrutura e estilização da aplicação.
createRoot(document.getElementById("root")).render(
  // Componentes do React
  <StrictMode>
    {/* Este App é o arquivo que está sendo importado de App.jsx */}
    {/* Tudo aqui dentro é jogado para dentro do elemento root do html */}
    <App />
  </StrictMode>
);
