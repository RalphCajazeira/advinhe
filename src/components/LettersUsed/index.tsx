import styles from "./styles.module.scss"

import { Letter } from "../Letter"

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras Utilizadas</h5>

      <div>
        <Letter value="R" size="small" color="correct" />
        <Letter value="A" size="small" color="wrong" />
      </div>
    </div>
  )
}
