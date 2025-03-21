import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/ppedrolucas.png"/>
        <strong>Pedro Lucas</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          {/* Propriedades do icone size={tamanho} color="cor" weight="largura" */}
          <PencilLine size={20} />
          Editar ser perfil
        </a>
      </footer>
    </aside>
  );
}
