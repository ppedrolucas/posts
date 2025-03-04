import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Pedro Lucas"
            content="Estudanto React com Diego Fernandes da Rocketseat"
          />
          <Post author="Paulo Muzy" content="Roberta" />
          <Post author="Renato Cariani" content="Eu quero eu posso" />
        </main>
      </div>
    </div>
  );
}
