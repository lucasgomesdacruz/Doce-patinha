import styles from "./Input.module.scss"

interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    label: string;
  }
  
  const Input = ({ type, placeholder, name, label }: InputProps) => {
    return (
      <div className={styles.containerInput}>
        <label htmlFor={name}>{label}</label>
        <input 
          id={name}
          type={type} 
          placeholder={placeholder}
          name={name}
        />
      </div>
    )
  }
  
  export default Input;
  