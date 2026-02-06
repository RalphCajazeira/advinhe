import styles from "./styles.module.scss"

type Props = React.ComponentProps<"button"> & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <button className={styles.button} type="button" {...rest}>
      {title}
    </button>
  )
}
