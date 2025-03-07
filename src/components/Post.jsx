import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ppedrolucas.png" />
          <div className={styles.authorInfo}>
            <strong>Pedro Lucas</strong>
            <span>Developer</span>
          </div>
        </div>
        <time title="03 de Fevereiro às 7:45h" dateTime="2024-02-03 12:53:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </form>
    </article>
  );
}
