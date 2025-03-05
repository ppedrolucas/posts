import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ppedrolucas.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Lucas</strong>
              <time
                title="03 de Fevereiro às 7:45h"
                dateTime="2024-02-03 12:53:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, nota 2!</p>
        </div>
        <section>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </section>
      </div>
    </div>
  );
}
