# Iniciando meu primeiro projeto React com o Vite

## Configuração inicial
Dentro da pasta `src` deve-se deletar qualquer arquivo diferente de `App.jsx` e `main.jsx`, seguida tanto o `App.jsx` quanto o `main.jsx` deve-se retirar a importação do `index.css` e do `favicon.svg` se houver.

Em `src/App.jsx` pode-se tirar todo o html dentro de `return()` e começar a contruir sua aplicação. E pode-se tirar o código de `useState(0)` e a última importação que existir até o momento.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
