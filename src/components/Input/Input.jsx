import styles from '../../styles/components/Input.module.css'
import clsx from "clsx"

export default function Input ({ id, label, setValue, ref, sm, lg, ...props}) {
  return (
      <div className={styles.container}>
        <label className={styles.container__label} htmlFor={id}>{label}</label>
        <input
         className={clsx(styles.container__input, {
            [styles.container__input__sm] : sm,
            [styles.container__input__lg] : lg
          })}
          id={id}
          name={id}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </div>
  )
}
