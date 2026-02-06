import styles from "./styles.module.scss"

type Props = React.ComponentProps<"input">

export function Input({ ...rest }: Props) {
  return <input type="text" className={styles.input} {...rest} />
}
