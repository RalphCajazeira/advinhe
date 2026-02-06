import styles from "./app.module.css"

import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Tip } from "./components/Tip"
import { LettersUsed } from "./components/LettersUsed"

export default function App() {
  function handleRestart() {
    alert("Reiniciar o jogo!")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart} />

        <Tip tip="A dica dessa palavra é algo que eu vou ver depois como é que fica, esse texto" />

        <div className={styles.words}>
          <Letter value="R" />
          <Letter value="" />
          <Letter value="" />
          <Letter value="" />
          <Letter value="" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button
            title={"Confirmar"}
            onClick={() => {
              alert("Confirmado")
            }}
          />
        </div>

        <LettersUsed />
      </main>
    </div>
  )
}
