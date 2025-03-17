import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

//author; {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/ppedrolucas.png",
      name: "Pedro Lucas",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-02-03 00:00:00"),
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/lauragrassig.png",
      name: "Laura Grassi",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Pra descobrir quem é fofoqueiro é só espalhar uma mentira diferente pra cada um. A mentira que chegar até você de volta é do fofoqueiro",
      },
      { type: "link", content: "kibum.com.br/links" },
    ],
    publishedAt: new Date("2025-03-02 17:00:00"),
  },
  {
    id: 3,
    author: {
      avatar_url: "https://github.com/orodrigogo.png",
      name: "Rodrigo Gonçalves",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala deeeeev 👋" },
      {
        type: "paragraph",
        content:
          "I'm a Software Engineer. My specialty is developing Android and iOS Mobile Apps with React Native I also have knowledge with Web development",
      },
      { type: "link", content: "react-native" },
    ],
    publishedAt: new Date("2025-03-17 17:00:00"),
  },
  {
    id: 4,
    author: {
      avatar_url: "https://github.com/leandrocostalti.png",
      name: "Leandro Costa",
      role: "Professor de informática obcecado por Linux",
    },
    content: [
      { type: "paragraph", content: "Olá turma 👋" },
      {
        type: "paragraph",
        content: "Se você desconfia que tal produto ta caro, não compre.",
      },
      { type: "link", content: "https://www.youtube.com/ltitreinamento" },
    ],
    publishedAt: new Date("2025-03-17 17:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
