import styles from '../../styles/components/Radio.module.css'

export default function Radio ({ options, value, setValue, ...props }) {
  return (
      <div className={styles.radio}>
          {options.map(option => 
          <>
            <input 
                className={styles.radio__input}
                key={option} 
                type="radio" 
                value={option}
                checked={value === option}
                onChange={({ target }) => setValue(target.value)}
                {...props}
            />
            
            <label className={styles.input__label} key={option}>
                {option}
            </label>
            </>
          )}
      </div>
  )
}

