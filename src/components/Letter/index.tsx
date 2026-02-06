import styles from "./styles.module.scss"

type Props = {
  value?: string
  size?: "default" | "small"
  color?: "default" | "correct" | "wrong"
}

export function Letter({
  value = "",
  size = "default",
  color = "default",
}: Props) {
  return (
    <div
      className={`
    ${styles.letter} 
    ${size === "small" && styles.letterSmall} 
    ${color === "correct" && styles.letterCorrect}
    ${color === "wrong" && styles.letterWrong}
    `}
    >
      <h2>{value}</h2>
    </div>
  )
}
