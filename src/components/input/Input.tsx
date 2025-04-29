import styles from "./Input.module.scss"
import { RegisterOptions, UseFormRegister } from "react-hook-form"


interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}
  
const Input = ({ type, placeholder, name, label, register, rules, error }: InputProps) => {
  return (
    <div className={styles.containerInput}>
      <label htmlFor={name}>{label}</label>
      <input 
        id={name}
        type={type} 
        placeholder={placeholder}
        {...register(name, rules)}
      />
      {error && <p>{error}</p>}
    </div>
  )
}
  
  export default Input;
  