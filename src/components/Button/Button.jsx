import styles from '../../styles/components/Button.module.css'
import clsx from "clsx"

export default function ButtonComponent({ text, onSubmit, sm, lg, ...props}) { 

	return (
		<button className={clsx(styles.button, {
			[styles.button__sm] : sm,
			[styles.button__lg] : lg
		})}
		onSubmit
		{...props}
		>
			{text}
		</button>
	)

}