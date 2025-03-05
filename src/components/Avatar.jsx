import styles from "./Avatar.module.css";

// eslint-disable-next-line react/prop-types
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarBorder : styles.avatar}
      src={src}
    />
  );
}
